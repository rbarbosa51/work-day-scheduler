import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function Hour(props) {
    const clsInput = `row time-block ${props.timeBlock}`;
    //State Hook for the textarea
    // const [taValue, settaValue] = useState('');
    const [taValue, settaValue] = useState( () => {
        const localStorageValue = localStorage.getItem(props.hour);
        if (localStorageValue !== null) {
            return localStorageValue;
        }
        else {
            return '';
        }
    }); 
    //This is used for refreshes
    useEffect( () => {
        if (localStorage.getItem(props.hour) !== null){
            settaValue(localStorage.getItem(props.hour))
        }
        
    }, [])
    return (
        <div className={clsInput}>
            <div className="col-2 col-md-1 hour text-center py-3">{props.hour}</div>
            <textarea className="col-8 col-md-10 description" rows="3" value={taValue} onChange={(e) => {
                //used to test
                //console.log(e.target.value)
                settaValue(e.target.value);
            }}></textarea>
            <button className="btn saveBtn col-2 col-md-1" aria-label="save" onClick={ () => {
                console.log(`Button ${props.hour} clicked and value is: ${taValue}`);
                localStorage.setItem(props.hour, taValue);
            }}>
                <FontAwesomeIcon icon={faSave} />
            </button>
        </div>
    );
    
}
export default Hour;