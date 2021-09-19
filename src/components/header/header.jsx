import './header.css'
import Logo from '../../assets/images/GameSeeker.png'
import ACTIONS from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.navbarStatus)

    const handleClick = () => {
        if(!isOpen || isOpen === 'initial') {
            dispatch(ACTIONS.NAVBAR.OPEN)
        } else {
            dispatch(ACTIONS.NAVBAR.CLOSE)
        }
    }

    const handleSearch = (e) => {
        dispatch(ACTIONS.SEARCHTERM.SET_TERM(e.target.value))
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = (e) => {
        dispatch(ACTIONS.PAGE.JUMP_TO(1))
        dispatch(ACTIONS.CATEGORY.UNSET_CAT)
        setTimeout(() => {
            dispatch(ACTIONS.CATEGORY.CHOOSE('search'))
        }, 100) 
    }

    const setToggleStatusClass = () => {
        if(isOpen === 'initial') {
            return 'gs-mobile-menu-toggle'
        } else if(isOpen === true) {
            return 'gs-mobile-menu-toggle open'
        } else if (isOpen === false) {
            return 'gs-mobile-menu-toggle closed'
        } else {
            return 'gs-mobile-menu-toggle'
        }
    }

    return (
        <header className="gs-header">
            <div className="gs-header-left">
                <Link to="/"><img src={Logo} alt="" /></Link> 
            </div>
            <div className="gs-header-right">
                <Switch>
                    <Route path="/game/:id">
                        <div className="gs-go-to-home">
                            <span><svg 
                                className="gs-go-back-chevron"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="4" d="M9 5l7 7-7 7">
                                </path>
                            </svg><Link to="/">Go back</Link></span>
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="gs-search">
                            <input type="text" className="gs-search-input" onKeyDown={(e) => handleEnter(e)} onChange={(e) => handleSearch(e)} placeholder="Search for a game..." />
                            <button className="gs-search-btn btn" onClick={() => handleSubmit()}>Search</button>
                        </div>
                        <div onClick={() => handleClick()} className={setToggleStatusClass()}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Route>
                </Switch>
                
                
            </div>
        </header>
    )
}

export default Header;
