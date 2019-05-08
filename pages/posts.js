import React, { Component } from 'react';
import Shell from '../components/Shell';
import client from '../common/client';
import Preview from '../components/Preview';

export default class extends Component {
    static async getInitialProps() {
        const { items } = await client.getEntries({
            'content_type': 'post',
        });

        return {
            posts: items.map(({ fields, sys }) => {
                const { title, subtitle, content } = fields;
                const { id, createdAt } = sys;

                return {
                    title,
                    subtitle,
                    content,
                    id,
                    createdAt,
                };
            }),
        };
    }

    render() {
        const { posts } = this.props;

        return (
            <Shell>
                <div style={{ 'align-self': 'center' }}>
                    { posts.map(({ title, subtitle, content, id, createdAt }) => ( 
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
