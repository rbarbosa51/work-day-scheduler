//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSave } from "@fortawesome/free-solid-svg-icons";
import Hour from "./Hour";

function Main() {
    const hourSpecs = [
        {hour: '9AM', timeBlock: 'past'},
        {hour: '10AM', timeBlock: 'present'},
        {hour: '11AM', timeBlock: 'future'}
    ];
    return (
        <main className="container-lg px-5">
            {hourSpecs.map( (p) => {
                return <Hour hour={p.hour} timeBlock={p.timeBlock} />
            })}
        </main>
    );
}

export default Main;
