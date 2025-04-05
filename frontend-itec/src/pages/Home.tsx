import { useRef, useEffect, useState } from "react";
import { Pose } from "@mediapipe/pose";
import * as mpPose from "@mediapipe/pose";
import NavBar from "../components/NavBar.tsx";

// Define the virtual try-on component
const VirtualTryOn = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null); // For displaying generated image

  let showManequin = true;

  useEffect(() => {
    if (!capturedImage) {
      const initCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.onloadedmetadata = () => {
              videoRef.current?.play();
            };
          }
        } catch (err) {
          console.error("Error accessing camera: ", err);
        }
      };

      initCamera();

      return () => {
        if (videoRef.current?.srcObject) {
          const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
          tracks.forEach((track) => track.stop());
        }
      };
    }
  }, [capturedImage]);

  const handleTakePicture = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setCapturedImage(dataUrl);
    }
    showManequin = false;
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setGeneratedImage(null); // Reset generated image
    showManequin = true;
  };

  const handleGenerate = async () => {
    if (!capturedImage) return;
  
    const userImg = new Image();
    userImg.src = capturedImage;
  
    userImg.onload = async () => {
      const results = await detectPoseFromImage(userImg);
      if (!results.poseLandmarks) {
        console.warn("No pose landmarks detected");
        return;
      }
  
      const landmarks = results.poseLandmarks;
  
      const leftShoulder = landmarks[11];
      const rightShoulder = landmarks[12];
      const leftHip = landmarks[23];
      const rightHip = landmarks[24];
  
      const canvas = document.createElement("canvas");
      canvas.width = userImg.width;
      canvas.height = userImg.height;
      const ctx = canvas.getContext("2d");
  
      if (!ctx) return;
  
      ctx.drawImage(userImg, 0, 0);
  
      const tShirt = new Image();
      tShirt.src = "/src/assets/probe-clothes/iTEC-tshirt.png";
  
      tShirt.onload = () => {
        // Coordonate în pixeli
        // const shoulderX = (leftShoulder.x + rightShoulder.x) / 2 * canvas.width;
        // const shoulderY = (leftShoulder.y + rightShoulder.y) / 2 * canvas.height;
  
        // const hipX = (leftHip.x + rightHip.x) / 2 * canvas.width;
        // const hipY = (leftHip.y + rightHip.y) / 2 * canvas.height;
  
        // const torsoHeight = hipY - shoulderY;
        // const torsoWidth = Math.abs(rightShoulder.x - leftShoulder.x) * canvas.width * 1.3;
  
        // const x = shoulderX - torsoWidth / 2;
        // const y = shoulderY; 
        const shoulderX = ((leftShoulder.x + rightShoulder.x) / 2) * canvas.width;
      const shoulderY = ((leftShoulder.y + rightShoulder.y) / 2) * canvas.height;
      const hipY = ((leftHip.y + rightHip.y) / 2) * canvas.height;

      const torsoHeight = (hipY - shoulderY) * 1.4; // mai lung
      const torsoWidth = Math.abs(rightShoulder.x - leftShoulder.x) * canvas.width * 1.7; // mai lat

      const x = shoulderX - torsoWidth / 2;
      const y = shoulderY - torsoHeight * 0.17; // puțin mai sus
  
        ctx.drawImage(tShirt, x, y, torsoWidth, torsoHeight);

        console.log("Torso Width: ", torsoWidth);
        console.log("Torso Height: ", torsoHeight);
        console.log("Torso X: ", x);
        console.log("Torso Y: ", y); 
  
        const finalImage = canvas.toDataURL("image/png");
        setGeneratedImage(finalImage);
      };
    };
  };
  

const detectPoseFromImage = (image: HTMLImageElement): Promise<mpPose.Results> => {
  return new Promise((resolve, reject) => {
    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults((results) => {
      resolve(results);
    });

    pose.initialize().then(() => {
      pose.send({ image });
    });
  });
};


  return (
      <>
        <NavBar country={12}/>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold">Incearca tricoul iTEC!</h2>
          <div className="w-full max-w-md relative">
            {generatedImage ? (
                // If there's a generated image, display it in place of the captured image
                <img
                    src={generatedImage}
                    alt="Generated"
                    className="w-full rounded-xl"
                    style={{transform: "scaleX(-1)", borderRadius: 20, marginBottom: 15}} // Oglindire imagine generată
                />
            ) : capturedImage ? (
                // If no generated image but there is a captured image, display the captured image
                <img
                    src={capturedImage}
                    alt="Captured"
                    className="w-full rounded-xl"
                    style={{transform: "scaleX(-1)", borderRadius: 20, marginBottom: 15}} // Oglindire imagine capturată
                />
            ) : (
                // If no captured image, show the video feed
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full rounded-xl"
                    style={{transform: "scaleX(-1)", borderRadius: 20, marginBottom: 15}} // Oglindire video
                />
            )}

            {/* {
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "40%",
                    width: "5px",
                    height: "100%",
                    opacity: 0.5,
                    color: "gray",
                }}>
                <img src="/src/assets/probe-clothes/manequin.png" alt="Manequin" />
            </div>
        } */}
          </div>

          {!capturedImage && !generatedImage ? (
              <button
                  onClick={handleTakePicture}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Fa poza
              </button>
          ) : (
              <div className="flex gap-4">
                <button
                    onClick={handleRetake}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    style={{backgroundColor: "#f33911"}} // Rosu
                >
                  Refa poza
                </button>
                <button
                    onClick={handleGenerate}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    style={{backgroundColor: "#4CAF50", marginLeft: 10}} // Verde
                >
                  ⟡ Genereaza
                </button>
              </div>
          )}
        </div>
      </>
  );
};

export default VirtualTryOn;
