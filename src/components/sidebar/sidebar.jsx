import './sidebar.css'
import { useSelector, useDispatch } from 'react-redux'
import ACTIONS from '../../actions'
import { useEffect } from 'react'

const Sidebar = () => {
    
    const isOpen = useSelector(state => state.navbarStatus)
    const category = useSelector(state => state.category)
    const genreListOpen = useSelector(state => state.genreStatus)
    const genres = useSelector(state => state.genres)
    const currentGenre = useSelector(state => state.selectedGenre)

    const dispatch = useDispatch()

    const apiKey = '844815c08fbc4fe4b80c9ce2dba4fbc9'

    const getGenres = async () => {
        const apiCall = await fetch(`https://api.rawg.io/api/genres?key=${apiKey}`)
        const data = await apiCall.json()

        if (apiCall.status === 200) {
            dispatch(ACTIONS.GENRES.SET_GENRES(data.results))
        } else {
            console.log('We got no data')
        }
    }

    const setNavbarStatusClass = () => {
        if(isOpen === 'initial') {
            return 'gs-sidebar'
        } else if(isOpen === true) {
            return 'gs-sidebar mobile-open'
        } else if (isOpen === false) {
            return 'gs-sidebar mobile-close'
        } else {
            return 'gs-sidebar'
        }
    }

    const setGenreListStatusClass = () => {
        if(genreListOpen === 'initial') {
            return 'gs-genre-list'
        } else if(genreListOpen === true) {
            return 'gs-genre-list genres-open'
        } else if (genreListOpen === false) {
            return 'gs-genre-list genres-closed'
        } else {
            return 'gs-genre-list'
        }
    }

    const setCategory = (e) => {
        dispatch(ACTIONS.NAVBAR.CLOSE)
        dispatch(ACTIONS.GENRE.CLOSE_GENRES)
        dispatch(ACTIONS.CATEGORY.CHOOSE(e.target.id))
        dispatch(ACTIONS.SELECTED_GENRE.UNSET_GENRE)
        dispatch(ACTIONS.PAGE.JUMP_TO(1))
    }

    const handleGenreClick = () => {
        if(!genreListOpen || genreListOpen === 'initial') {
            dispatch(ACTIONS.GENRE.OPEN_GENRES)
        } else {
            dispatch(ACTIONS.GENRE.CLOSE_GENRES)
        }
    }

    const setGenre = (e) => {
        dispatch(ACTIONS.CATEGORY.CHOOSE('genre'))
        dispatch(ACTIONS.SELECTED_GENRE.SELECT_GENRE(e.target.id))
        dispatch(ACTIONS.PAGE.JUMP_TO(1))
        dispatch(ACTIONS.NAVBAR.CLOSE)
        dispatch(ACTIONS.GENRE.CLOSE_GENRES)
    }

    const handleSearch = (e) => {
        dispatch(ACTIONS.SEARCHTERM.SET_TERM(e.target.value))
    }

    const handleSubmit = (e) => {
        dispatch(ACTIONS.PAGE.JUMP_TO(1))
        dispatch(ACTIONS.CATEGORY.UNSET_CAT)
        dispatch(ACTIONS.NAVBAR.CLOSE)
        dispatch(ACTIONS.GENRE.CLOSE_GENRES)
        setTimeout(() => {
            dispatch(ACTIONS.CATEGORY.CHOOSE('search'))
        }, 100)
        
    }

    useEffect(() => {
        getGenres()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <aside className={setNavbarStatusClass()}>
            <div className="gs-mobile-search">
                <input type="text" className="gs-search-input" onChange={(e) => handleSearch(e)} placeholder="Search for a game..." />
                <button className="gs-search-btn btn" onClick={() => handleSubmit()}>Search</button>
            </div>
            <nav className="gs-menu">
                <ul>
                    <li onClick={(e) => setCategory(e)} id="latest" className={category === 'latest' && !currentGenre ? "gs-menu-item item-active" : "gs-menu-item"} >New</li>
                    <li onClick={(e) => setCategory(e)} id="popular" className={category === 'popular' && !currentGenre ? "gs-menu-item item-active" : "gs-menu-item"} >Popular</li>
                    <li  className={category === 'genre' ? "gs-menu-item item-active gs-genres" : "gs-menu-item gs-genres"} >
                        <div onClick={() => handleGenreClick()} id="genre" className={genreListOpen ? "gs-genre-list-heading genres-open" : "gs-genre-list-heading genres-closed"}>
                            <span>Genre</span> 
                            <svg 
                                className="gs-menu-chevron"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="4" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </div>
                        <ul className={setGenreListStatusClass()}>
                            {
                                genres.length > 0 ?
                                genres.map((genre, i) => {
                                    return <li onClick={(e) => setGenre(e)} id={genre.slug} className={currentGenre - genre.slug === 0 ? "gs-menu-item item-active" : "gs-menu-item"} key={i}>{genre.name}</li>
                                }) : null
                            }
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
