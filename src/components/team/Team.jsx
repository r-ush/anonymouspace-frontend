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
                    post="Full Stack Developer"
                    img="https://avatars2.githubusercontent.com/u/54478821?s=460&u=875df72b781b5e6be8a62b24ec33949720115b51&v=4"
                    github="https://github.com/r-ush"
                    twitter="https://twitter.com/_r_ush_"
                />
                <TeamCard
                    name="Malvika Rajesh"
                    post="Designer"
                    img="https://pbs.twimg.com/profile_images/1317806379730575360/XZDlV8iy_400x400.jpg"
                    github="https://github.com/MalvikaRajesh"
                    twitter="https://twitter.com/malvika_rajeshk"
                />
            </div>
        </div>
    );
};

export default Team;
