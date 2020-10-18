import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
    return (
        <div>
            <div>Team</div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <TeamCard
                    name="Hemanth Krishna"
                    post="App Developer"
                    img="https://r-ush.tech/static/media/main.e584639c.svg"
                    github="https://github.com/DarthBenro008"
                    twitter="https://twitter.com/hemanth_kri"
                />
                <TeamCard
                    name="Shubham Palriwala"
                    post="Backend Developer"
                    img="https://r-ush.tech/static/media/main.e584639c.svg"
                    github="https://github.com/ShubhamPalriwala"
                    twitter="https://twitter.com/FlyingJoota"
                />
                <TeamCard
                    name="Aarush Bhat"
                    post="Backend Developer"
                    img="https://r-ush.tech/static/media/main.e584639c.svg"
                    github="https://github.com/r-ush"
                    twitter="https://twitter.com/_r_ush_"
                />
                <TeamCard
                    name="Malvika Rajesh"
                    post="Designer"
                    img="https://r-ush.tech/static/media/main.e584639c.svg"
                    github="https://github.com/MalvikaRajesh"
                    twitter="https://twitter.com/malvika_rajeshk"
                />
            </div>
        </div>
    );
};

export default Team;
