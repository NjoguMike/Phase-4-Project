import React from "react";

function FeaturedCards({featured}){
    return(
        <>
        <img src={featured.imageUrl} alt="Product"/>
        <h4>{featured.name}</h4>
        </>
    )
}

export default FeaturedCards