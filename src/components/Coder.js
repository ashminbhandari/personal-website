import React, {useState} from 'react';
import '../styles/Coder.css';

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

    return (
        <div className="coder-parent">
            <div className="project">
                {
                    projects.map(project => (
                        <a href={project.link} target="_blank">
                            <h1>{project.title}</h1>
                            <i className="fa fa-github fa-2x"/>
                            <h3>{project.tech}</h3>
                        </a>
                    ))
                }
            </div>
        </div>
    )
};

export default Coder;

