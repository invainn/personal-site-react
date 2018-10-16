import Link from 'next/link';
import moment from 'moment';
import { Fragment } from 'react';

// Make this its own module
export default ({ title, content: { brief }, slug, publishedDate }) => (
    <Fragment>
        <div className="preview-container">
            <Link href={`/post/${slug}`}>
                <a className="post-link">{ title }</a>
            </Link>
            <div className="preview-date"style={{ 'marginTop': '4px' }}>{moment(publishedDate).format('MMMM Do, YYYY')}</div>
            <div className="preview-brief" dangerouslySetInnerHTML={{__html: brief }}></div>
            <hr className="line" />
        </div> 
        <style jsx>{`
            .post-link {
                font-weight: bold;
                font-size: 22px;
                border: none;
            }

            .preview-brief {
                font-size: 15px;
            }

            .preview-date {
                font-size: 14px;
            }

            .line {
                border-color: $D2BACA;
                max-width: 600px;
                width: 65vw;
            }

            .preview-container {
                padding-bottom: 20px;
            }
        `}</style>
    </Fragment>
);