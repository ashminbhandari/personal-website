import React from 'react';
import '../styles/Coder.css';

class Coder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: 'openCircle',
                    link: 'https://github.com/ashminbhandari/open-circle'
                },
                {
                    title: 'Knapsack',
                    link: 'https://github.com/ashminbhandari/BrainPhonic'
                },
                {
                    title: 'Five Crowns',
                    link: 'https://github.com/ashminbhandari/Five-Crowns'
                },
                {
                    title: 'VC3600 Assembler',
                    link: 'https://github.com/ashminbhandari/VC3600-Assembler'
                },
                {
                    title: 'iLocate',
                    link: 'https://github.com/ashminbhandari/iLocate'
                },
                {
                    title: 'Coyote Hunter',
                    link: 'https://github.com/ashminbhandari/Coyote-Hunt'
                },
                {
                    title: 'Poker Hands Classifier',
                    link: 'https://github.com/ashminbhandari/Poker-Hands-Classification'
                },
                {
                    title: 'Movie Recommender',
                    link: 'https://github.com/ashminbhandari/Movie-Recommender'
                }
            ]
        }
    }


    render() {
        return (
            <div className="coder-parent">
                <div className="project">
                    {
                        this.state.projects.map(project => (
                            <a href={project.link} target="_blank">
                                <h1>{project.title}</h1>
                                <i className="fa fa-github fa-2x"/>
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Coder;
