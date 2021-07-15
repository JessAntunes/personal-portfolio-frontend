import React, { Component } from 'react'
import ArtworkItem from '../components/ArtworkItem'
import { connect } from 'react-redux'
import { fetchArtworks } from '../actions/index'


export class ArtworkList extends Component {
  componentDidMount(){
    this.props.fetchArtworks()
  }

  render() {
    const artworks = this.props.artworks.map(( pet, i ) => <PetItem key={i} pet={ pet } />)
    return (
      <div>
        <h3>Artwork</h3>
        <ul className="collection">
          { artworks }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    artworks: state.artworks
  }
}


export default connect(mapStateToProps, { fetchArtworks })(ArtworkList)