import React from 'react'



const ArtworkItem = ({ artwork }) => {
    return (
    <li className="collection-item">
       <img src={artwork.photo} alt={artwork.type} />
    </li>
    );
}


export default ArtworkItem











