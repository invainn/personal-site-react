import React, { Component } from 'react';
import Shell from '../components/Shell';
import fetch from 'isomorphic-unfetch';
import Preview from '../components/Preview';

export default class extends Component {
    static async getInitialProps() {
        const res = await fetch(`${process.env.SITE_URL}/posts`);
        const posts = await res.json();

        return {
            posts,
        }
    }

    render() {
        const { posts } = this.props;

        return (
            <Shell>
                <div style={{ 'align-self': 'center' }}>
                    { posts.map(({ title, subtitle, content, createdAt, id }) => ( 
                        <Preview
                            title={title}
                            content={content}
                            createdAt={createdAt}
                            subtitle={subtitle}
                            id={id}
                            key={id}
                        />
                    ))}
                </div>
            </Shell>
        );
    }
}
