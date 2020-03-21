import React, {useEffect} from 'react';
import ReactLoading from 'react-loading';
import peep from '../images/peep-standing-13.png';
import '../styles/Loading.css';

const Loading = (props) => {
    useEffect(() => {
        console.log(props.location.state);
        setTimeout(function(){ props.history.push(props.location.state)}, 700);

    });

    return (
        <div className="loadingContainer">
            <img src={peep} alt="Credit to the open peep library"/>
            <h1>Ashmin is thinking...</h1>
            <ReactLoading type={'bars'} color={'black'} height={'7%'} width={'7%'}/>
        </div>
    );
};


export default Loading;
