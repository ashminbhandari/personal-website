import React, {useState} from 'react';
import '../styles/Coder.css';
import { useSpring, animated } from 'react-spring'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Coder = () => {
    const [projects] = useState([
        {
            title: 'openCircle',
            link: 'https://github.com/ashminbhandari/open-circle',
            tech: 'HTML, CSS, Javascript, React, Node.js, Firebase'
        },
        {
            title: 'Knapsack',
            link: 'https://github.com/ashminbhandari/BrainPhonic',
            tech: 'HTML, CSS, Bootstrap, React'

        },
        {
            title: 'Five Crowns',
            link: 'https://github.com/ashminbhandari/FiveCrowns-Android',
            tech: 'Java Android, C++, Python versions',
        },
        {
            title: 'VC3600 Assembler',
            link: 'https://github.com/ashminbhandari/VC3600-Assembler',
            tech: 'C++'
        },
        {
            title: 'iLocate',
            link: 'https://github.com/ashminbhandari/iLocate',
            tech: 'HTML, Bootstrap, Node.js, Express.js'
        },
        {
            title: 'Coyote Hunter',
            link: 'https://github.com/ashminbhandari/Coyote-Hunt',
            tech: 'Java'
        },
        {
            title: 'Poker Hands Classifier',
            link: 'https://github.com/ashminbhandari/Poker-Hands-Classification',
            tech: 'NumPy, Pandas, Matplotlib, Scikit-learn, Tensorflow, Keras'
        },
        {
            title: 'Movie Recommender',
            link: 'https://github.com/ashminbhandari/Movie-Recommender',
            tech: 'Hadoop MapReduce'
        }
    ]);

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1],
        config: { mass: 5, tension: 300, friction: 100 } }));

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
                            <i className="fa fa-github fa-2x"/>
                            <h3>{project.tech}</h3>
                            </animated.div>
                        </a>

                    ))
                }
            </div>
        </div>
    )
};

export default Coder;

