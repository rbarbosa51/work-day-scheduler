import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Hour from "./Hour";

function Main() {
    //let hour = '9AM';
    return (
        <main>
            <div className="container-lg px-5">
                <Hour hour='9AM' timeBlock='past' />
                {/* <div id="hour-9" class="row time-block past">
                    <div class="col-2 col-md-1 hour text-center py-3">{hour}</div>
                    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
                    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                </div> */}

                <div id="hour-10" class="row time-block present">
                    <div class="col-2 col-md-1 hour text-center py-3">10AM</div>
                    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
                    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                </div>

                <div id="hour-11" class="row time-block future">
                    <div class="col-2 col-md-1 hour text-center py-3">11AM</div>
                    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
                    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                </div>

            </div>
        </main>
    );
}

export default Main;
