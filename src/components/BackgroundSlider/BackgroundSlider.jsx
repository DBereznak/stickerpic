import './BackgroundSlider.css';
import data from './Slides.json';

function BackgroundSlider() {
    console.log(data);
    return (
        <div>
            <h2>Slider</h2>
            <ul className='slide-list'>
            {
                data.Slides.map((slide) => (
                    <li key={slide.name}>
                    <img src={slide.url} alt={slide.name} />
                    </li>
                ))
            }
            </ul> 
        </div>
    )
};

export default BackgroundSlider;