import React, { Component } from 'react';
import Shell from '../components/Shell';
import Preview from '../components/Preview';
import fetch from 'isomorphic-unfetch';

export default class extends Component {
    static async getInitialProps({ req }) {
        const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
        const res = await fetch((process.env.URL || baseUrl) + '/api/posts');
        const data = await res.json();

        return { posts: data };
    }

    render() {
        return (
            <Shell>
                <div>
                    {
                        this.props.posts.map((post, i) => {
                            return <Preview key={post._id} {...post} />
                        })
                    }
                </div>
            </Shell>
        );
    }
}