import { useSelector } from "react-redux";
import './StickerScene.css';

function StickerScene() {
    const background = useSelector((state) => state.scene.background);
    const backgroundStyle = {
        background: `no-repeat url(${background})`,
    };
    return (
        <div style={backgroundStyle} className="background"> 
        </div>
    )
};

export default StickerScene;