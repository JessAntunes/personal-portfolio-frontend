import React, { Component } from 'react';
import ArtworkItem from '../components/ArtworkItem'
import ArtworkBanner from '../components/ArtworkBanner'
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
                <ArtworkBanner />
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
