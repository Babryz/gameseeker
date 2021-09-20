import './gameCard.css'
import { Link } from 'react-router-dom'

const GameCard = (gameObj) => {
    const smoothScroll = () => {
        let target = document.querySelector('.gs-single-container')

        if(!target) {
            return 
        }

        target.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const setGameImg = (game) => {
        let mature = game.tags.filter(tag => tag.id === 50)
        if(mature.length > 0) {
            return <span>Warning: Mature content</span>
        } else if (game.background_image) {
            return <img src={game.background_image} alt="Gamecover" />
        } else {
            return <span>No picture found</span>
        }
    }

    let game = gameObj.game

    if (game) {
        return (
            <div className="gs-game-card">
                <div className="gs-game-cover">
                    {setGameImg(game)}
                </div>
                <div className="gs-game-card-content">
                    <div className="gs-game-card-top">
                        <h4 className="gs-game-heading">{game.name}</h4>
                        <div className="gs-game-tags">
                            {game.genres.map((genre, i) => {
                                return <span key={i}>{genre.name}</span>
                            })}
                        </div>
                        <div 
                            className="gs-game-description"> 
                                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                                not only five centuries, but also the leap into electronic... */}
                            <div className="gs-game-rating-wrapper">
                            <div className="gs-game-rating">
                                <div className="gs-game-rating-stars">
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="none" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="none" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="none" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="none" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="none" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="gs-game-rating-stars stars-filled" style={{width: (game.rating * 20) + '%'}}>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="#DCB3D5" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="#DCB3D5" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="#DCB3D5" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="#DCB3D5" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="#DCB3D5" 
                                        stroke="#FFF3FD" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <span className="gs-game-rating-text">{game.ratings_count} ratings</span>
                        </div>
                        </div>
                    </div>
                    <div className="gs-game-card-bottom">
                        <button onClick={() => smoothScroll()} className="gs-game-view-details btn"><Link to={`/game/${game.id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="gs-game-card loading">
                <div className="gs-game-cover">
                    <span>Loading image...</span>
                </div>
                <div className="gs-game-card-content">
                    <div className="gs-game-heading"></div>
                    <div className="gs-game-tags">
                        {[0,1,2].map((i) => {
                            return <span key={i}></span>
                        })}
                    </div>
                    <div 
                        className="gs-game-description">
                    </div>
                    <button className="gs-game-view-details btn">Loading...</button>
                </div>
            </div>
        )
    }
    
}

export default GameCard
