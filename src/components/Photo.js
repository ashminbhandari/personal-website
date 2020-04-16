import React, {useState} from 'react';
import '../styles/Photo.css';
import ModalImage from "react-modal-image";

const Photo = () => {
    const [images] = useState([
        require('../images/image (8).jpeg'),
        require('../images/image (17).jpg'),
        require('../images/image (3).jpg'),
        require('../images/image (9).jpg'),
        require('../images/image (21).jpg'),
        require('../images/image (5).jpg'),
        require('../images/image (6).jpeg'),
        require('../images/image (7).jpeg'),
        require('../images/image (22).jpg'),
        require('../images/image (23).jpg'),
        require('../images/image (15).jpg'),
        require('../images/image (4).jpg'),
        require('../images/image (16).jpg'),
        require('../images/image (26).jpg'),
        require('../images/image (1).jpg'),
        require('../images/image (28).jfif'),
        require('../images/image (2).jpg'),
        require('../images/image (19).jpg'),
        require('../images/image (20).jpg'),
        require('../images/image (14).jpg'),
        require('../images/image (24).jpg'),
        require('../images/image (25).jpg'),
        require('../images/image (10).jpg'),
        require('../images/image (11).jpg'),
        require('../images/image (12).jpg'),
        require('../images/image (13).jpg'),
        require('../images/image (18).jpg'),
        require('../images/image (29).jfif'),
        require('../images/image (27).jpg'),
        require('../images/image (30).jpg'),
    ]);

    return (
        <div className="photos-container">
            {
                images.map((image) => (
                    <ModalImage className="image"
                                small={image}
                                large={image}
                    />
                ))
            }
        </div>
    );
};

export default Photo;
