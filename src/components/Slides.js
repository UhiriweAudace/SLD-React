import React, { useEffect, useState } from 'react';

function Slides({ slides }) {
    const [initial, setInitial] = useState(0)
    const [disabled, setDisabled] = useState(true);
    const [prevDisable, setPrevDisable] = useState(true)
    const [nextDisable, setNexDisable] = useState(false)

    useEffect(() => {
        if (initial > 0) {
            setDisabled(false);
            setPrevDisable(false);
        } else {
            setDisabled(true);
            setPrevDisable(true);
        }
        if ((initial + 1) < slides.length) {
            setNexDisable(false)
        } else {
            setNexDisable(true)
        }
    }, [initial, slides])

    const onRestartHandler = () => {
        setInitial(0)
        setDisabled(true)
        setPrevDisable(true)
        setNexDisable(false)
    }
    const onPrevHandler = () =>  setInitial((prev) => prev - 1)
    const onNextHandler = () => setInitial((prev) => prev + 1)
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={onRestartHandler} disabled={disabled}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={onPrevHandler} disabled={prevDisable}>Prev</button>
                <button data-testid="button-next" className="small" onClick={onNextHandler} disabled={nextDisable}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[initial].title}</h1>
                <p data-testid="text">{slides[initial].text}</p>
            </div>
        </div>
    );

}

export default Slides;
