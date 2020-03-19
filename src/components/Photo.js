import React from 'react';
import '../styles/Photo.css';


class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../images/image (8).JPG'),
                require('../images/image (17).jpg'),
                require('../images/image (3).jpg'),
                require('../images/image (9).jpg'),
                require('../images/image (21).jpg'),
                require('../images/image (5).jpg'),
                require('../images/image (6).JPG'),
                require('../images/image (7).JPG'),
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
            ]
        }
    }

    render() {
        return (
            <div className="photos-container">
                {
                    this.state.images.map((image) => (
                        <img src={image} alt="Nature, people, and abstractions"/>
                    ))
                }
            </div>
        );
    }
}

export default Photo;
