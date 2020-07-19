import React from 'react'
import Avatar from '../images/default.jpg'
export default function Card({ player }) {
    const {
        name,
        team_name,
        assists_per_game,
        blocks_per_game,
        player_efficiency_rating,
        points_per_game,
        steals_per_game,
        three_point_percentage
    } = player
    return (
        <div className="card">
            <img src={Avatar} alt={name} />
            <h1>{name}</h1>
            <p className="card-team">{team_name}</p>
            <div className="card-content">
                <p>Assits: {assists_per_game}</p>
                <p>Blocks: {blocks_per_game}</p>
                <p>Points: {points_per_game}</p>
                <p>Steals: {steals_per_game}</p>
                <p>Effiency: {player_efficiency_rating}</p>
                <p>Three point: {three_point_percentage}</p>
            </div>
      
            <p ><button className="card-bottom"></button></p>
        </div>
    )
}

