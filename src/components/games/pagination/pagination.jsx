import './pagination.css'
import { useSelector, useDispatch } from "react-redux"
import range from 'js-range'
import ACTIONS from '../../../actions'
import { useEffect } from 'react'

const Pagination = () => {
    const currentPage = useSelector(state => state.page)
    const gamesCount = useSelector(state => state.games.count)
    const dispatch = useDispatch()

    const smoothScroll = () => {
        document.querySelector('#gs-games-container').scrollIntoView({})
    }

    const setPage = (e) => {
        if(e.target.id === 'pagination-prev') {
            dispatch(ACTIONS.PAGE.PREV)
            smoothScroll()
        } else if(e.target.id === 'pagination-next') {
            if(currentPage !== Math.ceil(gamesCount / 12)) {
                dispatch(ACTIONS.PAGE.NEXT)
                smoothScroll()
            }
        } else {
            dispatch(ACTIONS.PAGE.JUMP_TO(e.target.value))
            smoothScroll()
        }
    }

    const setActiveClass = (value) => {
        if(currentPage === value) {
            return 'gs-pagination-item item-active'
        } else {
            return 'gs-pagination-item'
        }
    }

    const setPaginationNumbers = () => {
        let numberOfPages = Math.floor(gamesCount / 12)

        let paginationArr = []

        if(numberOfPages < 15) {
            paginationArr = range(1, numberOfPages + 2)
        } else if(currentPage <= 3) {
            paginationArr = range(currentPage, currentPage + 15)
        } else if(currentPage > numberOfPages - 15) {
            paginationArr = range(currentPage - 14 + numberOfPages - currentPage, numberOfPages + 2)
        } else {
            paginationArr = range(currentPage - 3, currentPage + 12)
        }

        return paginationArr

    }

    useEffect(() => {
        setPaginationNumbers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gamesCount])

    return (
        <nav className="gs-pagination">
            <ul>
                <li onClick={(e) => setPage(e)} id="pagination-prev" className={currentPage === 1 ? 'gs-pagination-item item-disabled' : 'gs-pagination-item'}>{'<<'}</li>
                {setPaginationNumbers().map((num, i) => {
                    return <li key={i} onClick={(e) => setPage(e)} value={num} className={setActiveClass(num)}>{num}</li>
                })}
                <li onClick={(e) => setPage(e)} id="pagination-next" className={currentPage === Math.ceil(gamesCount / 12) ? 'gs-pagination-item item-disabled' : 'gs-pagination-item'}>{'>>'}</li>
            </ul>
        </nav>
    )
}

export default Pagination
