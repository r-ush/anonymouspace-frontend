import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
    return (
        <div>
            <h1
                style={{
                    textAlign: "center",
                    textDecoration: "underline",
                    textDecorationColor: "#bb86fc",
                }}
            >
                The Team
            </h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                }}
            >
                <TeamCard
                    name="Hemanth Krishna"
                    post="App Developer"
                    img="https://i.imgur.com/Oyk3SAv.png"
                    github="https://github.com/DarthBenro008"
                    twitter="https://twitter.com/hemanth_kri"
                />
                <TeamCard
                    name="Shubham Palriwala"
                    post="Backend Developer"
                    img="https://i.ibb.co/m0dGZXd/DSC9953-square.jpg"
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
                    img="https://pbs.twimg.com/profile_images/1317769195744948224/olBks3HM_400x400.jpg"
                    github="https://github.com/MalvikaRajesh"
                    twitter="https://twitter.com/malvika_rajeshk"
                />
            </div>
        </div>
    );
};

export default Team;
