export const fetchProjects = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/projects')
        .then(resp => resp.json())
        .then(pets => {
            dispatch({ type: "SET_PROJECTS", payload: projects })
        })
    }
}

export const fetchArtworks = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/artworks')
        .then(resp => resp.json())
        .then(pets => {
            dispatch({ type: "SET_ARTWORKS", payload: artworks })
        })
    }
}
