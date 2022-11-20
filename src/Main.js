import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function Main() {
    return (
        <main>
            <div className="container-lg px-5">

                <div id="hour-9" class="row time-block past">
                    <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
                    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
                    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                </div>

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
