import { useState } from 'react';
import BackgroundSlider from './components/BackgroundSlider/BackgroundSlider';
import StickerScene from './components/StickerScene/StickerScene';
import './App.css';


function App() { 
  function downloadImage() {
    const canvas = document.getElementById("scene");
    const scene = canvas.toDataURL("image/png");
    const fakeLink = document.createElement("a");
    fakeLink.href = scene;
    fakeLink.download = 'scene.png';
    fakeLink.click();
  }

  return (
    <>
      <BackgroundSlider />
      <StickerScene />
      <button onClick={downloadImage}>Download Scene</button>
    </>
  )
};

export default App;
