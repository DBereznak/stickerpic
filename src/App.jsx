import BackgroundSlider from './components/BackgroundSlider/BackgroundSlider';
import StickerScene from './components/StickerScene/StickerScene';
import './App.css';
import StickerCategory from './components/StickerCategory/StickerCategory';
import stickerData from './components/StickerCategory/Stickers.json';


function App() { 
  function downloadImage() {
    const canvas = document.getElementById("scene");
    const scene = canvas.toDataURL("image/png");
    const fakeLink = document.createElement("a");
    fakeLink.href = scene;
    fakeLink.download = 'scene.png';
    fakeLink.click();
  }

  console.log(stickerData[0]);
  return (
    <>
      <StickerCategory stickerData={stickerData[0]}/>
      <BackgroundSlider />
      <StickerScene />

      <button onClick={downloadImage}>Download Scene</button>
    </>
  )
};

export default App;
