import React, { useState } from 'react';
import './CatGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CatGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        { url: 'https://cdn.discordapp.com/attachments/733416748526731382/1199355824800288930/IMG20240123151134.jpg?ex=65cb78a7&is=65b903a7&hm=13c9ba3d68daba9a1040d96f26c05e71a7acf6186f9e404ba56ec598b1bc63b8&', className: 'cat-picture' },
        { url: 'https://cdn.discordapp.com/attachments/733416748526731382/1195395830039990374/IMG20231209180939.jpg?ex=65cf859f&is=65bd109f&hm=6d698918d01041cb16b4b6ecac080a079c252140b2c89a3ddfd39bbb21c6f8d9&', className: 'cat-picture2' },
        { url: 'https://cdn.discordapp.com/attachments/733416748526731382/1195394807711924224/IMG20231214230340.jpg?ex=65cf84ab&is=65bd0fab&hm=a178771303c5c8c3a2a539fe7c87dde55ca6294ec486ec325d57de22d61cc534&', className: 'cat-picture3' }
    ];

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="gallery">
            <button className="arrow left" onClick={handlePreviousImage}><FontAwesomeIcon icon={faArrowLeft} /></button>
           <div className="image-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {images.map((images, index) => (
                    <img key={index} src={images.url} className={`image ${images.className} }`} alt='cat' />
                ))}
           </div>
            <button className="arrow right" onClick={handleNextImage}><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    )
};

export default CatGallery;