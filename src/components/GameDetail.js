import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";

const GameDetail = () => {

    const {screen, game} = useSelector((state) => state.detail);

    return {
        <div className="card-shadow">
            <div className="detail">
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms.map(data => (
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img scr={game.background_image} alt="image"/>
                </div>
                <div className="galelry">
                    {screen.results.map(screen => (
                        <img scr={screen.image} key={screen.id} alt="game"/>
                    ))}
                </div>
            </div>
        </div>
    }
};

export default GameDetail;