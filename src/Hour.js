//import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function Hour(props) {
    const clsInput = `row time-block ${props.timeBlock}`;
    return (
        <div className={clsInput}>
            <div className="col-2 col-md-1 hour text-center py-3">{props.hour}</div>
            <textarea className="col-8 col-md-10 description" rows="3"> </textarea>
            <button className="btn saveBtn col-2 col-md-1" aria-label="save">
                <FontAwesomeIcon icon={faSave} />
            </button>
        </div>
    );
    
}
export default Hour;