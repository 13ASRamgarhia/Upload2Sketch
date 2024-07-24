import React, { useState } from "react";
import axios from "axios";

const Main = () => {
  const [image, setImage] = useState(null);
  const [sketch, setSketch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageFileName, setImageFileName] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFileName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSketchConversion = async () => {
    if (!image) return;
    const imageURL = "https://raw.githubusercontent.com/vaibhavsharma2511/Testing/master/Jatin_pic.jpg"

    setLoading(true);
    console.log("1")
    try {
      console.log("2")
      const response = await axios.get(`https://sketch-x6qw.onrender.com/create_sketch/?image_url=${encodeURIComponent(imageURL)}`);
      console.log("3")
      if (response.status === 200) {
        console.log("4")
        console.log(response)
      } else {
        console.log("5")
        console.error("Failed to create sketch", response.data);
      }
    } catch (error) {
      console.log("6")
      console.error("Error creating sketch", error);
    } finally {
      console.log("7")
      setLoading(false);
    }
    console.log("8")
  };

  const downloadImage = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-headerBG py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-white">Upload2Sketch</h1>
        </div>
      </nav>
      <main className="flex-grow flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Convert Your Image to a Sketch</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
          {image && (
            <button
              onClick={() => downloadImage(image, imageFileName)}
              className="bg-gradient-to-r from-logoColor to-headingColor text-xl text-white rounded-lg px-6 py-4 mb-4"
            >
              Download Original Image
            </button>
          )}
          <button
            onClick={handleSketchConversion}
            className="bg-gradient-to-r from-logoColor to-headingColor text-xl text-white rounded-lg px-6 py-4 mb-4"
            disabled={loading}
          >
            {loading ? "Creating Sketch..." : "Create Sketch"}
          </button>
          {sketch && (
            <div className="mt-6">
              <img src={sketch} alt="Sketch" className="rounded-lg shadow-lg mb-4" />
              <button
                onClick={() => downloadImage(sketch, "sketch.png")}
                className="bg-gradient-to-r from-logoColor to-headingColor text-xl text-white rounded-lg px-6 py-4"
              >
                Download Sketch
              </button>
            </div>
          )}
        </div>
      </main>
      <footer className="bg-headerBG py-4 mt-auto">
        <div className="container mx-auto px-4 text-white text-center">
          &copy; 2024 Upload2Sketch. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Main;
