import './singleGame.css'
import GameCard from '../games/gameCard/gameCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ACTIONS from '../../actions'
import { useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'; 

const SingleGame = () => {
    const apiKey = '844815c08fbc4fe4b80c9ce2dba4fbc9'
    let { id } = useParams()
    const dispatch = useDispatch()
    const game = useSelector(state => state.game)

    const getGame = async () => {
        let gameApiString = `https://api.rawg.io/api/games/${id}?key=${apiKey}`
        let seriesApiString = `https://api.rawg.io/api/games/${id}/game-series?key=${apiKey}`

        const gameCall = await fetch(gameApiString)
        const gameData = await gameCall.json()

        const seriesCall = await fetch(seriesApiString)
        const seriesData = await seriesCall.json()
        
        gameData.series = seriesData

        

        if (gameCall.status === 200 && seriesCall.status === 200) {
            dispatch(ACTIONS.GAME.SET_GAME(gameData))
        } else {
            console.log('We got no data')
        }
    }

    useEffect(() => {
        getGame()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <div className="gs-single-container">
            <div className="gs-single-content">
                <div className="gs-single-banner" style={{backgroundImage: 'url(' + game.background_image + ')'}}></div>
                <div className="gs-single-content-top">
                    <div className="gs-single-text">
                        <h2 className="gs-single-heading">{game.name}</h2>
                        <div className="gs-single-description">
                            { ReactHtmlParser (game.description) } 
                        </div>
                    </div>
                    {
                        game.tags && game.tags.length > 0 ?
                        <div className="gs-single-tags-container">
                            <div className="gs-single-tags">
                                <div>
                                    {
                                    game.tags && game.tags.length > 0 ?
                                    game.tags.map((tag, i) => {
                                        if(i === game.tags.length - 1) {
                                            return <span key={i}>#{tag.name}</span>
                                        }
                                        return <span key={i}>#{tag.name},</span>
                                    })
                                    : null
                                    }
                                </div>
                            </div>
                        </div> :
                        null
                    }
                </div>
                <div className="gs-single-game-details">
                    <h2 className="gs-single-heading">Details</h2>
                    <div className="gs-single-details-container">
                        <div className="gs-single-detail">
                            <h4>Release date:</h4>
                            <span>{game.released}</span> 
                        </div>
                        <div className="gs-single-detail">
                            <h4>Rating:</h4>
                            <span>{game.rating}/5</span> 
                        </div>
                        <div className="gs-single-detail">
                            <h4>Developers:</h4>
                            {   
                                game.developers && game.developers.length > 0 ?
                                game.developers.map((dev, i) => {
                                    if(i === game.developers.length - 1) {
                                        return <span key={i}>{dev.name}</span>
                                    }
                                    return <span key={i}>{dev.name},</span>
                                }) : <span>N/A</span>
                            } 
                        </div>
                        <div className="gs-single-detail">
                            <h4>Playtime:</h4>
                            <span>{game.playtime} h</span> 
                        </div>
                        <div className="gs-single-detail">
                            <h4>Platforms:</h4>
                            {   
                                game.platforms && game.platforms.length > 0 ?
                                game.platforms.map((platform, i) => {
                                    if(i === game.platforms.length - 1) {
                                        return <span key={i}>{platform.platform.name}</span>
                                    }
                                    return <span key={i}>{platform.platform.name},</span>
                                }) : <span>N/A</span>
                            } 
                        </div>
                    </div>
                </div>
                
                {
                    game.series && game.series.results.length > 0 ?
                    <div className="gs-series-games-container">
                        <h3>More games in this series</h3>
                        <div className="gs-series-games">
                            {
                            game.series.results.map((game, i) => {
                                return <GameCard key={i} game={game} />
                            })
                            }
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default SingleGame
