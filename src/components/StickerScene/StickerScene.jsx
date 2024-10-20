import { useSelector } from "react-redux";
import { useRef, useEffect} from 'react';
import './StickerScene.css';

function StickerScene() {
    const background = useSelector((state) => state.scene.background);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const bg = new Image(800, 640);
        bg.src = background;
        context.font = "50px Arial";
        context.drawImage(bg, 0, 0);
        context.fillText("Scene",10,80);
    }, [background])
    return (
        <canvas id="scene" ref={canvasRef}> 
        </canvas>
    )
};

export default StickerScene;        