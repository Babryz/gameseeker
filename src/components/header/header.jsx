import './header.css'
import Logo from '../../assets/images/GameSeeker.png'
import ACTIONS from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

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
                <img src={Logo} alt="" />
            </div>
            <div className="gs-header-right">
                <div className="gs-search">
                    <input type="text" className="gs-search-input" onChange={(e) => handleSearch(e)} placeholder="Search for a game..." />
                    <button className="gs-search-btn btn" onClick={() => handleSubmit()}>Search</button>
                </div>
                <div onClick={() => handleClick()} className={setToggleStatusClass()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;
