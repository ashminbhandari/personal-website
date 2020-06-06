import React, {useState} from 'react';
import '../styles/Photo.css';
import ModalImage from "react-modal-image";

const Photo = () => {
    const [images] = useState([
        'https://i.ibb.co/pvv4xHn/image-8.jpg',
        'https://i.ibb.co/2nVvf36/image-17.jpg',
        'https://i.ibb.co/mzd8rJq/image-3.jpg',
        'https://i.ibb.co/S6s6vPB/image-9.jpg',
        'https://i.ibb.co/QmDZRKf/image-21.jpg',
        'https://i.ibb.co/VB6w4ZR/image-5.jpg',
        'https://i.ibb.co/gFWj1mj/image-6.jpg',
        'https://i.ibb.co/ydqg752/image-7.jpg',
        'https://i.ibb.co/mchwJTW/image-22.jpg',
        'https://i.ibb.co/PYJ54dg/image-23.jpg',
        'https://i.ibb.co/PZ9cwsg/image-15.jpg',
        'https://i.ibb.co/txWTTDd/image-4.jpg',
        'https://i.ibb.co/YZQLd5K/image-16.jpg',
        'https://i.ibb.co/sy3J44M/image-26.jpg',
        'https://i.ibb.co/pf2zpkj/image-1.jpg',
        'https://i.ibb.co/BjWwsRt/image-28.jpg',
        'https://i.ibb.co/d0sVBtd/image-2.jpg',
        'https://i.ibb.co/hCVybqr/image-19.jpg',
        'https://i.ibb.co/DWJvvTG/image-20.jpg',
        'https://i.ibb.co/p0GphzH/image-14.jpg',
        'https://i.ibb.co/N1wNXvn/image-24.jpg',
        'https://i.ibb.co/bWrBPY0/image-25.jpg',
        'https://i.ibb.co/Tc1BQWn/image-10.jpg',
        'https://i.ibb.co/YBrbYt4/image-11.jpg',
        'https://i.ibb.co/vH93VVN/image-12.jpg',
        'https://i.ibb.co/KrnZ4f2/image-13.jpg',
        'https://i.ibb.co/BBCXCKZ/image-18.jpg',
        'https://i.ibb.co/8rSnCd3/image-29.jpg',
        'https://i.ibb.co/4RqR1Pc/image-27.jpg',
        'https://i.ibb.co/2c67fp7/image-30.jpg',
    ]);

    return (
        <div className="photos-container">
            {
                images.map((image) => (
                    <ModalImage className="image"
                                small={image}
                                large={image}
                                hideDownload={true}
                    />
                ))
            }
        </div>
    );
};

export default Photo;
