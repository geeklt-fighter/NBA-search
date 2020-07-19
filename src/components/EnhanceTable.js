import React from 'react'
import { Link } from 'react-router-dom'
export default function EnhanceTable({ info }) {

    return (
        <div className="table-container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Name</th>
                        <th>Games</th>
                        <th>Points</th>
                        <th>Rebounds</th>
                        <th>Assists</th>
                        <th>Steals</th>
                        <th>Blocks</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                {info.map((row, index) => (
                    <tr key={index}>
                        <td>{row.team_name}</td>
                        <td>{row.name}</td>
                        <td>{row.games_played}</td>
                        <td>{row.points_per_game}</td>
                        <td>{row.rebounds_per_game}</td>
                        <td>{row.assists_per_game}</td>
                        <td>{row.steals_per_game}</td>
                        <td>{row.blocks_per_game}</td>
                        <td><Link to={`/${row.name}`}>Details</Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}

