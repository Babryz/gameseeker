import './games.css'
import GameCard from './gameCard/gameCard'
import Pagination from './pagination/pagination'
import ACTIONS from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Games = () => {
    const dispatch = useDispatch()
    const games = useSelector(state => state.games)
    const currentPage = useSelector(state => state.page)
    const category = useSelector(state => state.category)
    const selectedGenre = useSelector(state => state.selectedGenre)
    const searchterm = useSelector(state => state.searchterm)

    const apiKey = '844815c08fbc4fe4b80c9ce2dba4fbc9'

    const getGames = async () => {
        dispatch(ACTIONS.GAMES.SET([]))
        let apiString = ``

        if(category === 'search' && searchterm !== '') {
            apiString = `https://api.rawg.io/api/games?key=${apiKey}&page_size=12&page=${currentPage}&search=${searchterm}`
        } else if(category === 'genre' && selectedGenre !== null) {
            apiString = `https://api.rawg.io/api/games?key=${apiKey}&page_size=12&page=${currentPage}&genres=${selectedGenre}`
        } else if(category === "popular") {
            apiString = `https://api.rawg.io/api/games?key=${apiKey}&page_size=12&page=${currentPage}`
        } else if(category === "latest") {
            apiString = `https://api.rawg.io/api/games?key=${apiKey}&page_size=12&page=${currentPage}&ordering=released`
        }

        const apiCall = await fetch(apiString)
        const data = await apiCall.json()

        if (apiCall.status === 200) {
            dispatch(ACTIONS.GAMES.SET(data))
        } else {
            console.log('We got no data')
        }
    }

    const setGamesHeading = () => {
        if(category === 'search' && searchterm !== '') {
            return <span>Showing {games.count} titles by term: <i>"{searchterm}"</i></span>
        } else if(category === 'genre' && selectedGenre) {
            return <span>Showing titles by genre: <i>"{selectedGenre}"</i></span>
        } else if(category === 'latest') {
            return <span>Showing latest titles</span>
        } else if(category === 'popular') {
            return <span>Showing popular titles</span>
        }
    }

    const renderGames = () => {
        if(games.count === 0) {
            return <span className="gs-no-games-found">Try a different searchterm</span>
        } else if(games.results && games.results.length > 0) {
            let gamesArr = []
            for(let i = 0; i < games.results.length; i++) {
                gamesArr.push(<GameCard key={i} game={games.results[i]}/>)
            }

            return gamesArr
        } else {
            let loadingArr = [0,1,2,3,4,5,6,7,8,9, 10, 11]
            let gamesArr = []
            for(let i = 0; i < loadingArr.length; i++) {
                gamesArr.push(<GameCard key={i}/>)
            }

            return gamesArr
        }
    }

    useEffect(() => {
        getGames()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, category, selectedGenre])

    return (
        <div className="gs-content-container" id="gs-games-container">
            <h2>{setGamesHeading()}</h2>
            <div className="gs-games-list">
                {renderGames()}
            </div>
            <Pagination />
        </div>
    )
}

export default Games
