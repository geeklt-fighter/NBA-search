import React, { useContext } from 'react'
import { PlayerContext } from '../context'
import TpModal from './TpModal'
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function PlayersFilter({ all, players,paginate }) {
    const { handleChange, type, name } = useContext(PlayerContext)

    let teams = getUnique(players, 'team_name')
    teams = ['all', ...teams]
    teams = teams.map((team, index) => {
        return <option value={team} key={index}>{team}</option>
    })
    return (
        <>
            <section className="filter-container">
                <form className="filter-form">
                    <div className="form-group">
                        <label htmlFor="team">Team: </label>
                        <select
                            name="type"
                            id="type"
                            value={type}
                            className="form-control"
                            onChange={handleChange}
                            onClick={() => paginate(1)}
                            >
                            {teams}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={handleChange} />
                    </div>
                </form>
            </section>
            <section className="show-container">
                <div className="show-chart">
                    <TpModal all={all} />
                </div>
            </section>
        </>
    )
}
