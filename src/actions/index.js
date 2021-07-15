export const fetchProjects = () => {
    return(dispatch) => {
        return fetch('http://127.0.0.1:3000/projects')
        .then(resp => resp.json())
        .then(projects => {
            dispatch({ type: "SET_PROJECTS", payload: projects })
        })
    }
}

export const fetchArtworks = () => {
    return(dispatch) => {
        return fetch('http://127.0.0.1:3000/artworks')
        .then(resp => resp.json())
        .then(artworks => {
            dispatch({ type: "SET_ARTWORKS", payload: artworks })
        })
    }
}
