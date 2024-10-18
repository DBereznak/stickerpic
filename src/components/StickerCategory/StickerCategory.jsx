import { useState } from 'react';
import './StickerCategory.css';


function StickerCategory({stickerData}) {

    const [showStickers, setShowStickers] = useState(false);

    return (
        <div className="category">
                <button onClick={() => setShowStickers(!showStickers)}>{ stickerData.categoryTitle }</button>
                <ul className={showStickers ? 'show' : 'hide'}>
                {stickerData.stickers.map((sticker) => (
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