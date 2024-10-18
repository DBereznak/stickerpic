import { useState } from 'react';
import './StickerCategory.css';

function StickerCategory() {

    const [showStickers, setShowStickers] = useState(false);

    const testStickers = {
        categoryTitle: 'Shapes',
        stickers: [
            {title: 'square', file: './Stickers/Shapes/square.png'},
            {title: 'circle', file: './Stickers/Shapes/circle.png'},
            {title: 'triangle', file: './Stickers/Shapes/triangle.png'}
        ]
    };

    return (
        <div className="category">
                <button onClick={() => setShowStickers(!showStickers)}>{ testStickers.categoryTitle }</button>
                <ul className={showStickers ? 'show' : 'hide'}>
                {testStickers.stickers.map((sticker) => (
                    <li key={sticker.title}>
                        <img src={sticker.file} alt={sticker.title} />
                    </li>
                ))
                }
                </ul>

        </div>
    )
};

export default StickerCategory;