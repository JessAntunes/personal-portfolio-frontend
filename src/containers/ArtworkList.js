import React, { Component } from 'react';
import ArtworkItem from '../components/ArtworkItem'
import { connect } from 'react-redux'
import { fetchArtworks } from '../actions/index'





export class ArtworkList extends Component {

    

    componentDidMount() {
        this.props.fetchArtworks();
    }

    render() {
        const artworks = this.props.artworks.map(( artwork, i ) => <ArtworkItem key={i} artwork={ artwork } />)
        return (
            <div>
                <div className="home-banner"></div>
                <div className="home-text">
                    <h1>Artwork</h1>
                </div>
              <ul className="art-collection">
                { artworks }
              </ul>
          
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      artworks: state.artworks
    }
}

export default connect(mapStateToProps, { fetchArtworks })(ArtworkList)
