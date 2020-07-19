import React, { Component } from 'react'
import { PlayerContext } from '../context'
import Card from '../components/Card'
export default class SinglePlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug
        }
    }

    static contextType = PlayerContext
    render() {
        const { getPlayer } = this.context
        const player = getPlayer(this.state.slug)

        if (!player) {
            return (
                <div>
                    <h1>There is no details</h1>
                </div>
            )
        }
        return (
            <div>
                <Card player={player}/>
            </div>
        )
    }
}
