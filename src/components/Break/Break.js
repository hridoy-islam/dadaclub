import React from 'react';
import './Break.css'

const Break = ({addBreak, breaktime}) => {
    const matchtime = (manualtime) => {
        if(breaktime === manualtime){
            return 'rounded-circle p-2 border-0 breakcolor';
        }
        return 'rounded-circle p-2 border-0';
    }
    return (
        <div className='mt-3'>
            <h4>Add A Break</h4>
            <div className='d-flex bgclass rounded px-3 py-2 justify-content-between'>
                <button onClick={()=> addBreak(10)} className={matchtime(10)}>10s</button>
                <button onClick={()=> addBreak(20)} className={matchtime(20)}>20s</button>
                <button onClick={()=> addBreak(30)} className={matchtime(30)}>30s</button>
                <button onClick={()=> addBreak(40)} className={matchtime(40)}>40s</button>
                <button onClick={()=> addBreak(50)} className={matchtime(50)}>50s</button>
            </div>
        </div>
    );
};

export default Break;