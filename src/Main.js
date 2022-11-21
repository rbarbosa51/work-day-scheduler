//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSave } from "@fortawesome/free-solid-svg-icons";
import Hour from "./Hour";

function Main() {
    const hourSpecs = [
        {hour: '9AM', timeBlock: 'past'},
        {hour: '10AM', timeBlock: 'past'},
        {hour: '11AM', timeBlock: 'past'},
        {hour: '12PM', timeBlock: 'present'},
        {hour: '1PM', timeBlock: 'future'},
        {hour: '2PM', timeBlock: 'future'},
        {hour: '3PM', timeBlock: 'future'},
        {hour: '4PM', timeBlock: 'future'},
        {hour: '5PM', timeBlock: 'future'}
    ];
    
    return (
        <main className="container-lg px-5">
            {hourSpecs.map( (p) => {
                return <Hour key={p.hour} hour={p.hour} timeBlock={p.timeBlock} />
            })}
        </main>
    );
}

export default Main;
