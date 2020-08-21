import React, {useState} from 'react';
import '../styles/Coder.css';
import {useSpring, animated} from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Coder = () => {
    const [projects] = useState([
        {
            title: 'openCircle for iOS',
            link: 'https://apps.apple.com/us/app/opencircle-music-discovery/id1516421718?ls=1',
            store: 'https://apps.apple.com/us/app/opencircle-music-discovery/id1516421718?ls=1',
            desc: 'Music discovery platform'
        },
        {
            title: 'Draw Together',
            demo: 'https://morning-eyrie-11918.herokuapp.com/',
            link: 'https://morning-eyrie-11918.herokuapp.com/',
            desc: 'Real-time collaboratory drawing application'

        },
        {
            title: 'Five Crowns',
            link: 'https://github.com/ashminbhandari/FiveCrowns-Android',
            desc: 'Multi-player card game featuring versus AI',
        },
        {
            title: 'storyTweets',
            link: 'https://github.com/ashminbhandari/storyTweets-py',
            desc: 'Selenium bot to automatically push twitter tweets to Instagram stories'
        },
        {
            title: 'VC3600 Assembler',
            link: 'https://github.com/ashminbhandari/VC3600-Assembler',
            tech: 'Assembler for VC3600 computer, a fake decimal computer with 100,000 words of memory'
        },
    ]);

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {mass: 5, tension: 300, friction: 100}
    }));

    return (
        <div className="coder-parent">
            <div className="project">
                {
                    projects.map(project => (
                        <a href={project.link} target="_blank">
                            <animated.div
                                className="card"
                                onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                                onMouseLeave={() => set({xys: [0, 0, 1]})}
                                style={{transform: props.xys.interpolate(trans)}}
                            >
                                <h1>{project.title}</h1>
                                {
                                    project.store ? <i className="fa fa-apple fa-3x"/> : project.demo ?
                                        <i className={"fa fa-play fa-3x"}/> : <i className={"fa fa-github-alt fa-3x"}/>
                                }
                            </animated.div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
};

export default Coder;

