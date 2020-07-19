import React, { useState } from 'react'
import { withPlayerConsumer } from '../context'
import PlayersList from './PlayersList'
import PlayersFilter from './PlayersFilter'
import Pagination from './Pagination'



function PlayersContainer({ context }) {

    const { players,sortedPlayers } = context

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(15)

    let currentPost = sortedPlayers

    let indexOfLastPost = currentPage * postsPerPage
    let indexOfFirstPost = indexOfLastPost - postsPerPage

    if (sortedPlayers.length === 491) {
        currentPost = sortedPlayers.slice(indexOfFirstPost, indexOfLastPost)
    } else {
        indexOfLastPost = currentPage * postsPerPage  // Problem solved
        indexOfFirstPost = indexOfLastPost - postsPerPage
        currentPost = sortedPlayers.slice(indexOfFirstPost, indexOfLastPost)
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(currentPage + 1)
    const prevPage = () => setCurrentPage(currentPage - 1)

    return (
        <div>
            <PlayersFilter 
                paginate={paginate}
                players={currentPost}
                all={players} />

            <PlayersList 
                players={currentPost} />
            <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={sortedPlayers.length}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage} />
        </div>
    )
}



export default withPlayerConsumer(PlayersContainer)