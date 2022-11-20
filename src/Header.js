//import

function Header() {
    return (
        <header className="p-5 mb-4 border-5 border-bottom border-dark text-center">
            <h1 className="display-3">Work Day Scheduler</h1>
            <p className="lead">A simple calendar app for scheduling your work day</p>
            {/* This will be the reactive day.js component */}
            <p id="currentDay" className="lead"></p>
        </header>
    );
}

export default Header;
