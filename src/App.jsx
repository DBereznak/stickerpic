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
  return (
    <>
    <div className='frame'>
      <div className='stickers'>
      {stickerData.map((category) => (
      <StickerCategory stickerData={category} key={category.categoryTitle}/>
     ))}
      </div>
     <div className='canvas'>
     <BackgroundSlider />
      <StickerScene />
     </div>
    </div>
      <button onClick={downloadImage}>Download Scene</button>
    </>
  )
};

export default App;
