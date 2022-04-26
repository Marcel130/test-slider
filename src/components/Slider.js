import React , {useState} from 'react';
import './Slider.css'
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1) ;

    const dataSlider = [
        {
            id : 1 ,
            title : "Lorem ipsum1"
        },

        {
            id : 2 ,
            title : "Lorem ipsum2"
        },

        {
            id : 3 ,
            title : "Lorem ipsum3"
        }
    ];

    

    const moveDot = index => {
        setSlideIndex(index)
    }



    return (
        <div className='container-slider'>
            { 
                dataSlider.map( (obj , index) => {
                    return(
                        <div key={index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            <img alt=''
                            src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} 
                            />
                        </div>
                    )
                })
            }
            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
