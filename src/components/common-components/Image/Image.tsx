import React from "react";

interface IImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
}

const Image = ({ src, alt, className, width, height }: IImage) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
        />
    );
};

Image.defaultProps = {
    src: "#",
    alt: "image",
    width: 100,
    height: 100,
    className: ""
};

export default Image;
