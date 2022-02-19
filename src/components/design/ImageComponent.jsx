import React from 'react'

const ImageComponent = (props) => {

    const {width, height ,src, alt, className , ...otherProps} = props; 
    return (
        <img src={src} width={width} height={height} className={className} alt={alt? alt : "an Image"}  />
    )
}

export default ImageComponent;