import { combineReducers } from 'redux'
import projects from './projectsReducer'
import artworks from './artworksReducer'

export default combineReducers({
    projects,
    artworks
})