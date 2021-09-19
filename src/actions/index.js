const ACTIONS = {
    NAVBAR: {
        OPEN: {
            type: 'OPEN'
        },
        CLOSE: {
            type: 'CLOSE'
        }
    },
    GAMES: {
        SET(data) {
            const SET = {
                type: "SET",
                payload: data
            }
            return SET
        },
        WIPE: {
            type: "WIPE"
        }
    },
    GENRES: {
        SET_GENRES(data) {
            const SET_GENRES = {
                type: "SET_GENRES",
                payload: data
            }
            return SET_GENRES
        },
        WIPE: {
            type: "WIPE_GENRES"
        }
    },
    CATEGORY: {
        CHOOSE(category) {
            const CHOOSE = {
                type: "CHOOSE",
                payload: category
            }
            return CHOOSE
        },
        UNSET_CAT: {
            type: "UNSET_CAT"
        }
    },
    PAGE: {
        NEXT: {
            type: "NEXT"
        },
        PREV: {
            type: "PREV"
        },
        JUMP_TO(page_number) {
            const JUMP_TO = {
                type: "JUMP_TO",
                payload: page_number
            }
            return JUMP_TO
        }
    },
    GENRE: {
        OPEN_GENRES: {
            type: "OPEN_GENRES"
        },
        CLOSE_GENRES: {
            type: "CLOSE_GENRES"
        }
    },
    SELECTED_GENRE: {
        SELECT_GENRE(id) {
            const SELECT_GENRE = {
                type: "SELECT_GENRE",
                payload: id
            }
            return SELECT_GENRE
        },
        UNSET_GENRE: {
            type: "UNSET_GENRE"
        }
    },
    SEARCHTERM: {
        SET_TERM(term) {
            const SET_TERM = {
                type: "SET_TERM",
                payload: term
            }
            return SET_TERM
        },
        UNSET_TERM: {
            type: "UNSET_TERM"
        }
    },
    GAME: {
        SET_GAME(data) {
            const SET_GAME = {
                type: "SET_GAME",
                payload: data
            }
            return SET_GAME
        },
        UNSET_GAME: {
            type: "UNSET_GAME"
        }
    }

}

export default ACTIONS
