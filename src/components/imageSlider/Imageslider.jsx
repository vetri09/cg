import React,{ useState } from 'react'
import {SliderData} from './sliderData'
import './imageslider.css'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

export default function Imageslider( { slides } ) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent( current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent( current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0 ){
        return null;
    };

    return (
        <div className="slider">
            <KeyboardArrowLeftIcon className="silderLeftArrow" style={{ fontSize: 70 , color: 'var(--bluedark)' }}
            onClick={prevSlide}
            />
            {SliderData.map((slider, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={ index } >
                        {
                            index === current && (
                                <img src={slider.image} alt="sliderImg" className="sliderImg"/>
                            )
                        }
                    </div>
                )
            })}
            <KeyboardArrowRightIcon className="silderRightArrow" style={{ fontSize: 70 , color: 'var(--bluedark)' }}
            onClick={nextSlide}
            />
        </div>
    )
}
