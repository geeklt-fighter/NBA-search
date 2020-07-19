import React from 'react'

export default function Pagination({ currentPage,postsPerPage, totalPosts, paginate, prevPage, nextPage }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

   
    return ( 
        <div className="pagination-container">
            <nav className="pagination">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => prevPage()}> Previous</a>
                    </li>
                    {pageNumbers.map(num => (
                        <li className="page-item" key={num}>
                            <a className="page-link" onClick={() => paginate(num)} href="#"> {num}</a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => nextPage()}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}
