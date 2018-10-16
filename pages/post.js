import { Fragment } from 'react';
import Link from 'next/link';
import Shell from '../components/Shell';
import moment from 'moment';

export default ({ url: { query: { title, content, publishedDate }}}) => (
    <Shell>
        <div className="post-content">
            <h1 className="post-title">{title}</h1>
            <h3 className="post-date">{moment(publishedDate).format('MMMM DD, YYYY')}</h3>
            <hr/>
            <div dangerouslySetInnerHTML={{ __html: content.markdown.html }}></div>
            <hr/>
            <Link href="/posts">
                <button className="post-back">Back To Posts</button>
            </Link>
        </div>
        <style jsx>{`
            .post-content {
                width: 65vw;
                max-width: 800px;
                z-index: 1;

                align-self: end;

                padding-bottom: 40px;
            }

            .post-date {
                font-size: 16px;
            }

            .post-title {
                color: white
            }

            .post-back {
                margin-top: 30px;

                color: #D2CABA !important;
                text-transform: uppercase;
                background: #192E43;
                padding: 6px;
                border: 2px solid #D2CABA !important;
                border-radius: 6px;
                transition: all 0.2s ease 0s;
                display: inline-block;
            }

            .post-back:focus {
                outline-color: white; 
            }
            
            .post-back:hover {
                color: #ffffff !important;
                background: #f6b93b;
                border-color: #f6b93b !important;
            }
        `}</style>
    </Shell> 
);