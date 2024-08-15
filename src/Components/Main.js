import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [imageUrl, setImageUrl] = useState(null); // State for the uploaded image URL
  const [sketchUrl, setSketchUrl] = useState(""); // State for the generated sketch URL
  const [loading, setLoading] = useState(false); // State for loading status
  const [imageFileName, setImageFileName] = useState(""); // State for the image file name

  // Handle image file upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFileName(file.name);

    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      console.log("Image URL:", url);
      console.log(imageFileName)
    }
  };

  // Convert the image to a sketch using an external API
  const handleSketchConversion = async () => {
    if (!imageUrl) return;

    setLoading(true);

    try {
      const response = await axios.post(
        `https://sketch-x6qw.onrender.com/create_sketch_basic/`,
        {
          responseType: "blob",
        }
      );

      const blob = response.data;
      const url = URL.createObjectURL(blob);
      setSketchUrl(url);
    } catch (error) {
      console.error("Error creating sketch", error);
      setSketchUrl("");
    } finally {
      setLoading(false);
    }
  };

  // // Download the image
  // const downloadImage = (url, filename) => {
  //   if (!url) return;
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = filename;
  //   link.click();
  // };

  useEffect(() => {
    return () => {
      if (sketchUrl) {
        URL.revokeObjectURL(sketchUrl);
      }
    };
  }, [sketchUrl]);

  return (
    <div className="flex flex-col h-screen py-14 laptop:px-20">
      <div className="pt-5 text-4xl font-bold tracking-wide">
        Convert your Image to a Sketch
      </div>
      <div className="flex items-center justify-center bg-green-400">
        <div className="pt-2">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row bg-red-500 py-5">
        <div className="flex flex-col bg-blue-100 laptop:w-1/2 justify-center items-center">
          <div className="border border-black my-2">
            <img
              src={imageUrl || "https://via.placeholder.com/400x600"}
              alt="Uploaded Preview"
              className="object-cover"
              style={{ width: '400px', height: '600px' }}
            />
          </div>
        </div>
        <div className="flex flex-col bg-blue-100 laptop:w-1/2 justify-center items-center">
          <div className="border border-black my-2">
            <img
              src={sketchUrl || "https://via.placeholder.com/400x600"}
              alt="Sketch Preview"
              className="object-cover"
              style={{ width: '400px', height: '600px' }}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSketchConversion}
        className="bg-gradient-to-r from-logoColor to-headingColor text-xl text-white rounded-lg px-6 py-4 mb-4"
        disabled={loading}
      >
        {loading ? "Creating Sketch..." : "Create Sketch"}
      </button>
    </div>
  );
};

export default Main;
