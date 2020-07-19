import React, { Component } from 'react'
import staffs from './players.json'
const PlayerContext = React.createContext()



class PlayerProvider extends Component {
    state = {
        players: [],
        sortedPlayers: [],
        type: 'all',
        name: ''
    }

    getPlayer =(slug)=>{
        let tempPlayers = [...this.state.players]
        const player = tempPlayers.find((player)=>player.name === slug)
        return player
    }

    handleChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        }, this.filterPlayers)
    }

    filterPlayers = () => {
        let { players, type, name } = this.state
        let tempPlayers = [...players]


        if (type !== 'all') {
            tempPlayers = tempPlayers.filter(player => player.team_name === type)
        }

        tempPlayers = tempPlayers.filter(player => player.name.indexOf(name) === 0)

        console.log("tempPlayers: ",tempPlayers)

        this.setState({
            sortedPlayers: tempPlayers
        })
        
    }


    componentDidMount() {
        this.setState({
            players: staffs,
            sortedPlayers: staffs
        })
    }

    render() {
        return (
            <PlayerContext.Provider value={{ ...this.state, handleChange: this.handleChange, getPlayer:this.getPlayer }}>
                {this.props.children}
            </PlayerContext.Provider>
        )
    }
}

const PlayerConsumer = PlayerContext.Consumer


export function withPlayerConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <PlayerConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </PlayerConsumer>
    }
}

export { PlayerProvider, PlayerConsumer, PlayerContext }


