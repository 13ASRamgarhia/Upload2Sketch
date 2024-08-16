import React, { useState, useEffect } from "react";
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Main = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [basicSketchUrl, setBasicSketchUrl] = useState(null);
  const [effectsSketchUrl, setEffectsSketchUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [effectLoading, setEffectLoading] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  // State variables for input ranges
  const [brightness, setBrightness] = useState(1);
  const [sepia, setSepia] = useState(0.5);
  const [sharpen, setSharpen] = useState(0.5);
  const [vignette, setVignette] = useState(0.5);
  const [sepiaIntensity, setSepiaIntensity] = useState(0.5);
  const [vignetteIntensity, setVignetteIntensity] = useState(0.5);
  const [sharpenIntensity, setSharpenIntensity] = useState(0.5);
  const [sketchStyle, setSketchStyle] = useState("default");
  const [border, setBorder] = useState(false);
  const [borderSize, setBorderSize] = useState(5);
  const [borderColor, setBorderColor] = useState("#000000");
  const [frame, setFrame] = useState(false);
  const [frameType, setFrameType] = useState("simple");

  // Check if browser supports speech recognition
  const isSpeechRecognitionSupported = SpeechRecognition.browserSupportsSpeechRecognition();

  // Handle file change event
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Create a URL for the selected image
  useEffect(() => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setSelectedImageUrl(url);
    }
  }, [selectedFile]);

  // Create a basic sketch
  const createBasicSketch = async () => {
    setSketchStyle('default')
    setBorder(false)
    setBorderSize(5)
    setBorderColor("#000000")
    setFrame(false)
    setFrameType("simple")
    setLoading(true);
    if (!selectedFile) {
      alert("Please upload an image first.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile, "image.jpg");

    try {
      const response = await axios.post(
        "https://sketch-x6qw.onrender.com/create_sketch_basic/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setBasicSketchUrl(url);
        console.log("Basic sketch displayed.");
      } else {
        console.error("Failed to create basic sketch.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error creating basic sketch:", error);
      setLoading(false);
    }
  };

  const convertImageToSketchWithEffects = async () => {
    if (!selectedFile) {
      alert("Please select an image file first.");
      return;
    }

    try {
      setEffectLoading(true)
      // Convert image to byte object
      const reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onloadend = async () => {
        const byteObject = reader.result;

        // API call to sketch creation with effects function
        const effectsSketchUrl = "https://sketch-x6qw.onrender.com/create_sketch_with_effects/";
        const effectsParams = {
          brightness: brightness,
          sepia: sepia > 0 ? "true" : "false",
          sepia_intensity: sepiaIntensity,
          vignette: vignette > 0 ? "true" : "false",
          vignette_intensity: vignetteIntensity,
          sharpen: sharpen > 0 ? "true" : "false",
          sharpen_intensity: sharpenIntensity,
          sketch_style: sketchStyle,
          border: border ? "true" : "false",
          border_size: border ? borderSize : "0",
          border_color: border ? borderColor.replace('#', '') : "000000", // remove '#'
          frame: frame ? "true" : "false",
          frame_type: frame ? frameType : "none",
        };

        const effectsQuery = new URLSearchParams(effectsParams).toString();
        const formData = new FormData();
        formData.append('file', new Blob([byteObject], { type: "image/jpeg" }), "image.jpg");

        const effectsResponse = await axios.post(
          `${effectsSketchUrl}?${effectsQuery}`,
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
            responseType: 'blob'  // Ensures that the response is handled as a Blob
          }
        );

        if (effectsResponse.status === 200) {
          const effectsSketchBlob = effectsResponse.data;
          const effectsSketchUrl = window.URL.createObjectURL(new Blob([effectsSketchBlob]));
          setEffectsSketchUrl(effectsSketchUrl);  // Save the sketch URL in state
        } else {
          console.error("Failed to create sketch with effects:", effectsResponse.status, effectsResponse.statusText);
        }
      };
      setEffectLoading(false)
    } catch (error) {
      setEffectLoading(false)
      console.error("An error occurred:", error);
    }
  };

  // Handle download of the basic sketch
  const handleDownload = () => {
    if (basicSketchUrl) {
      const link = document.createElement("a");
      link.href = basicSketchUrl;
      link.download = "basic_sketch.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("First get a sketch");
    }
  };

  const handleEffectDownload = () => {
    if (effectsSketchUrl) {
      const link = document.createElement("a");
      link.href = effectsSketchUrl;
      link.download = "effect_sketch.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("First get a effect sketch");
    }
  };

  // Update state when input range changes
  const handleRangeChange = (setter) => (event) => {
    setter(parseFloat(event.target.value).toFixed(1)); // Ensure that the value is up to 1 decimal place
  };

  // Log all range values to the console
  const logRangeValues = () => {
    console.log("Brightness:", brightness);
    console.log("Sepia:", sepia);
    console.log("Sharpen:", sharpen);
    console.log("Vignette:", vignette);
    console.log("Sepia Intensity:", sepiaIntensity);
    console.log("Vignette Intensity:", vignetteIntensity);
    console.log("Sharpen Intensity:", sharpenIntensity);
    console.log("Sketch Style:", "abstract");
    console.log("Border:", 'true');
    console.log("Border Size:", '20');
    console.log("Border Color:", '0,0,0');
    console.log("Frame:", 'true');
    console.log("Frame Type:", 'vintage');
  };

  // Handle voice commands
  useEffect(() => {
    if (transcript.toLowerCase().includes("start sketching")) {
      createBasicSketch();
      resetTranscript();
    } else if (transcript.toLowerCase().includes("start sketch with effects")) {
      convertImageToSketchWithEffects();
      resetTranscript();
    } else if (transcript.toLowerCase().includes("save sketch")) {
      handleDownload();
      resetTranscript();
    } else if (transcript.toLocaleLowerCase().includes("save effect sketch")) {
      handleEffectDownload();
      resetTranscript();
    }
    // eslint-disable-next-line
  }, [transcript]);

  if (!isSpeechRecognitionSupported) {
    return <div>Speech Recognition is not supported in this browser.</div>;
  }

  return (
    <div className="flex flex-col h-fit py-14 laptop:px-20">
      <div className="pt-5 text-4xl font-bold tracking-wide">
        Convert your Image to a Sketch
      </div>
      <div className="flex items-center justify-center">
        <div className="pt-2">
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>
      <div className="space-x-10 flex justify-center mt-10">
        <button className="px-4 py-2 rounded-xl border-2 border-logoColor" onClick={SpeechRecognition.startListening}>Use Voice Command</button>
        <button className="px-4 py-2 rounded-xl border-2 border-logoColor" onClick={SpeechRecognition.stopListening}>Stop Voice Command</button>
        <button className="px-4 py-2 rounded-xl border-2 border-logoColor" onClick={resetTranscript}>Reset Command</button>
      </div>
      <div className="flex flex-col laptop:flex-row py-5">
        <div className="bg-green-200 w-fit"></div>
        <div className="flex space-x-10 laptop:w-full justify-center items-center">
          <div className="border border-black my-2">
            <img
              src={selectedImageUrl || "https://placehold.co/960x540/000000/FFFFFF/png"}
              alt="Selected Preview"
              className="object-cover"
              style={{ width: "960px", height: "540px" }}
            />
          </div>

          <div className="border border-black my-2">
            <img
              src={basicSketchUrl || "https://placehold.co/960x540/000000/FFFFFF/png"}
              alt="Sketch Preview"
              className="object-cover"
              style={{ width: "960px", height: "540px" }}
            />
          </div>
          <div className="border border-black my-2">
            <img
              src={effectsSketchUrl || "https://placehold.co/960x540/000000/FFFFFF/png"}
              alt="Sketch Preview with Effects"
              className="object-cover"
              style={{ width: "960px", height: "540px" }}
            />
          </div>
        </div>
      </div>
      <div className="space-x-10 flex justify-center mt-10">
        <button
          className="px-4 py-2 rounded-xl border-2 border-logoColor"
          onClick={createBasicSketch}
          disabled={loading}
        >
          {loading ? "Creating Sketch..." : "Create Sketch"}
        </button>
        <button className="px-4 py-2 rounded-xl border-2 border-logoColor" onClick={convertImageToSketchWithEffects}>
          {effectLoading ? "Creating Sketch with Effects..." : "Create Sketch with Effects"}
        </button>
        <button className="px-4 py-2 rounded-xl border-2 border-logoColor" onClick={handleDownload}>Download Sketch</button>
        <button className="px-4 py-2 rounded-xl border-2 border-logoColor" onClick={handleEffectDownload}>Download Effect Sketch</button>
        <button className="px-4 py-2 rounded-xl border-2 border-logoColor" onClick={logRangeValues}>Log Range Values</button>
      </div>

      {/* Add sliders for Brightness, Sepia, Sharpen, and Vignette */}
      <div className="space-y-5 mt-10">
      <div className="flex space-x-20">
      <label className="w-36">Brightness</label>
      <label>{brightness}</label>
          <input
            type="range"
            min="0.1"
            max="2.0"
            step="0.1"
            value={brightness}
            onChange={handleRangeChange(setBrightness)}
          />
        </div>
        <div className="flex space-x-20">
          <label className="w-36">Sepia</label>
          <label>{sepia}</label>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.1"
            value={sepia}
            onChange={handleRangeChange(setSepia)}
          />
        </div>
        <div className="flex space-x-20">
        <label className="w-36">Sepia Intensity</label>
        <label>{sepiaIntensity}</label>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.1"
            value={sepiaIntensity}
            onChange={handleRangeChange(setSepiaIntensity)}
          />
        </div>
        <div className="flex space-x-20">
        <label className="w-36">Sharpen</label>
        <label>{sharpen}</label>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.1"
            value={sharpen}
            onChange={handleRangeChange(setSharpen)}
          />
        </div>
        <div className="flex space-x-20">
        <label className="w-36">Sharpen Intensity</label>
        <label>{sharpenIntensity}</label>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.1"
            value={sharpenIntensity}
            onChange={handleRangeChange(setSharpenIntensity)}
          />
        </div>
        <div className="flex space-x-20">
        <label className="w-36">Vignette</label>
        <label>{vignette}</label>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.1"
            value={vignette}
            onChange={handleRangeChange(setVignette)}
          />
        </div>
        <div className="flex space-x-20">
        <label className="w-36">Vignette Intensity</label>
          <label>{vignetteIntensity}</label>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.1"
            value={vignetteIntensity}
            onChange={handleRangeChange(setVignetteIntensity)}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;