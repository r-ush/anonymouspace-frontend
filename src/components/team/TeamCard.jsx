/* eslint-disable react/prop-types */
import React from "react";
import "./teamCard.css";

const TeamCard = ({ name, img, post, github, twitter }) => {
    return (
        <div className="teamCard">
            <img className="teamCardImg" src={img} alt="" />
            <div>
                <span className="underline">{name}</span>
            </div>
            <div>
                <span className="underline">{post}</span>
            </div>
            <div className="teamLinks">
                <a href={twitter}>
                    <img
                        style={{ height: "2.5rem", width: "auto" }}
                        src="https://www.flaticon.com/svg/static/icons/svg/733/733635.svg"
                        alt=""
                    />
                </a>
                <a href={github}>
                    <img
                        style={{ height: "2.5rem", width: "auto" }}
                        src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg"
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
};

export default TeamCard;
