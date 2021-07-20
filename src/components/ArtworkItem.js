import React from 'react'



const ArtworkItem = ({ artwork }) => {
    return (
    <div className="art-collection-item">
       <img className="img-artwork" src={artwork.photo} alt={artwork.type} />
    </div>
    );
}


export default ArtworkItem











