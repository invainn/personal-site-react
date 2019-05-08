import React, { Component } from 'react';
import Shell from '../components/Shell';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Preview from '../components/Preview';

export default class extends Component {
    static async getInitialProps() {
        const res = await fetch(`${process.env.SITE_URL}/projects`);
        const projects = await res.json();
        console.log(projects);

        return {
            projects,
        }
    }

    render() {
        const { projects } = this.props;

        return (
            <Shell>
                <div className="projects-container">
                    {projects.map(({ id, name, description, image, githubLink }) => (
                        <>
                            <div className="project-container">
                                <div>
                                    <img src={`${process.env.SITE_URL}${image.url}`} className="project-image" />
                                </div>
                                <div style={{ 'max-width': '450px' }}>
                                    <p className="project-name">{ name }</p>
                                    <a className="github-link" href={githubLink}>GitHub</a>
                                    <ReactMarkdown source={description} />
                                </div>
                            </div>
                            <hr className="line" />
                        </>
                    ))}
                </div> 
                <style jsx>{`
                    @media all and (max-width: 695px) {
                        .projects-container {
                            padding-bottom: 20px;
                            margin-top: 50px;
                        }

                        .line {
                            border-color: $D2BACA;
                            margin: 35px 0;
                        }
                    }
                    @media all and (min-width: 696px) {
                        .projects-container {
                            padding-bottom: 20px;
                            max-width: 850px;
                            width: 100%;
                            padding-top: 100px;
                        }

                        .line {
                            border-color: $D2BACA;
                            margin: 20px 0;
                        }
                    }

                    .project-container {
                        display: flex;
                        flex-flow: row wrap;
                        justify-content: space-around;
                        align-content:space-evenly;
                        flex: 1;
                    }

                    .project-name {
                        font-weight: bold;
                        font-size: 22px;
                        border: none;

                        color: #FFFFFF;
                    }

                    .project-image {
                        max-width: 300px;
                        width: 100%;
                        height: auto;
                    }

                    .project-desc {
                        max-width: 450px;
                        width: 65vw;
                    }

                    .github-link {
                        border-color: #FFFFFF;
                        border-radius: 1.5px;
                        border-width: 2px;
                        padding: 3px;
                    }
                `}</style>
            </Shell>
        );
    }
}
