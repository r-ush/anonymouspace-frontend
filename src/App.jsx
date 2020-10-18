import React from "react";
import Navbar from "components/navbar/Navbar";
import Team from "components/team/Team";
import Slideshow from "components/slideShow/Slideshow";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Slideshow />
            <Team />
        </div>
    );
};

export default App;
