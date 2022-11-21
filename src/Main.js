import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Hour from "./Hour";

function Main() {
    
    return (
        <main className="container-lg px-5">
            
                <Hour hour='9AM' timeBlock='past' />
                <Hour hour='10AM' timeBlock='present' />
                <Hour hour='11AM' timeBlock='future' />

        </main>
    );
}

export default Main;
