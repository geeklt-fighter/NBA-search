import React from 'react'
import EnhanceTable from './EnhanceTable'


export default function PlayersList({ players }) {

    if (players.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no players matched your search</h3>
            </div>
        )
    }
    return (
        <div className="playersList">
            <EnhanceTable info={players} />
        </div>
    )
}
