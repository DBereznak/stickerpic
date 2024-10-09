import { useDispatch } from 'react-redux';
import { setBackground } from '../../features/sceneSlice';
import './BackgroundSlider.css';
import data from './Slides.json';


function BackgroundSlider() {
    const dispatch = useDispatch();
    
    return (
        <div>
            <h2>Slider</h2>
            <ul className='slide-list'>
            {
                data.Slides.map((slide) => (
                    <li key={slide.name} onClick={() => dispatch(setBackground(slide.url))}>
                    <img src={slide.url} alt={slide.name} />
                    <span>{slide.name}</span>
                    </li>
                ))
            }
            </ul> 
        </div>
    )
};

export default BackgroundSlider;