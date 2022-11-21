import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function Hour(props) {
    const clsInput = `row time-block ${props.timeBlock}`;
    //State Hook for the textarea
    const [taValue, settaValue] = useState('');
    
    return (
        <div className={clsInput}>
            <div className="col-2 col-md-1 hour text-center py-3">{props.hour}</div>
            <textarea className="col-8 col-md-10 description" rows="3" onChange={(e) => {
                //used to test
                console.log(e.target.value)
                settaValue(e.target.value);
            }}></textarea>
            <button className="btn saveBtn col-2 col-md-1" aria-label="save" onClick={ () => {
                console.log(`Button ${props.hour} clicked`);
                localStorage.setItem(props.hour, taValue);
            }}>
                <FontAwesomeIcon icon={faSave} />
            </button>
        </div>
    );
    
}
export default Hour;