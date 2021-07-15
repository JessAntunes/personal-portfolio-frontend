import React from 'react'
import { connect } from 'react-redux'


const ArtworkItem = ({ artwork }) => {
    return (
    <li className="collection-item">
       <img src={artwork.img} alt={artwork.type} />
    </li>
    );
}


export default connect(null)(ArtworkItem)











