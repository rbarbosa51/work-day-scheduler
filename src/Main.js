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
            </div>
        </main>
    );
}

export default Main;
{/* <div class="container-lg px-5">
      <!-- Use class for "past", "present", and "future" to apply styles to the
        time-block divs accordingly. The javascript will need to do this by
        adding/removing these classes on each div by comparing the hour in the
        id to the current hour. The html provided below is meant to be an example
        demonstrating how the css provided can be leveraged to create the
        desired layout and colors. The html below should be removed or updated
        in the finished product. Remember to delete this comment once the
        code is implemented.
        -->

      <!-- Example of a past time block. The "past" class adds a gray background color. -->
      <div id="hour-9" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Example of a a present time block. The "present" class adds a red background color. -->
      <div id="hour-10" class="row time-block present">
        <div class="col-2 col-md-1 hour text-center py-3">10AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Example of a future time block. The "future" class adds a green background color. -->
      <div id="hour-11" class="row time-block future">
        <div class="col-2 col-md-1 hour text-center py-3">11AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div> */}