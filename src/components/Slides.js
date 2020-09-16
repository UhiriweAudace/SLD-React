import React, { useState } from 'react';

function Slides({ slides }) {
    const [initial, setInitial] = useState(1)
    const [disabled, setDisabled] = useState(true);
    const [prevDisable, setPrevDisable] = useState(true)
    const [nextDisable, setNexDisable] = useState(false)

    const onRestartHandler = () => {
        setInitial(0)
        setDisabled(true)
        setPrevDisable(true)
        setNexDisable(false)
    }
    const onPrevHandler = () => {
        if (initial === 0) {
            setInitial(0)
            setDisabled(true)
            setPrevDisable(true)
            setNexDisable(false)
        } else {
            setInitial(initial - 1)
        }
    }
    const onNextHandler = () => {
        if (slides.length - 2 === initial) {
            setNexDisable(true)
        }
        setInitial(initial + 1)
        setDisabled(false)
        setPrevDisable(false)
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={() => onRestartHandler()} disabled={disabled}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={() => onPrevHandler()} disabled={prevDisable}>Prev</button>
                <button data-testid="button-next" className="small" onClick={() => onNextHandler()} disabled={nextDisable}>Next</button>
            </div>

            {
                slides.map((slide, index) => {
                    return initial + 1 === index + 1 && (
                        <div id="slide" className="card text-center" key={index}>
                            <h1 data-testid="title">{slide.title}</h1>
                            <p data-testid="text">{slide.text}</p>
                        </div>
                    )
                })
            }
        </div>
    );

}

export default Slides;
