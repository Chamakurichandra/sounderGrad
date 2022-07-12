import React,{useState} from 'react';

function Slides({slides}) {
    const [activeStep,setActiveStep]=useState(0);
    let allSlides=slides;

    const restart=()=>{
        setActiveStep(0);
    }
    const next=()=>{
        let step=activeStep;
        setActiveStep(++step);
    }
    
    const preView=()=>{
        let step=activeStep;
        setActiveStep(--step);
    }
    const getContent=()=>{
        let data=allSlides[activeStep];
            return <div id="slide" className="card text-center">
            <h1 data-testid="title">{data.title}</h1>
            <p data-testid="text">{data.text}</p>
        </div>
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={()=>restart()} disabled={activeStep===0}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={()=>preView()} disabled={activeStep===0}>Prev</button>
                <button data-testid="button-next" className="small" onClick={()=>next()} disabled={activeStep===allSlides.length-1}>Next</button>
            </div>
            {getContent()}
        </div>
    );

}

export default Slides;
