import Link from 'next/link';
import { Fragment } from 'react';
import moment from 'moment';

// Make this its own module
export default ({ title, subtitle, content, createdAt, id }) => (
    <Fragment>
        <div className="preview-container">
            <Link as={`/post/${id}`} href={`/post?id=${id}`}>
                <a className="post-link">{ title }</a>
            </Link>
            <div className="preview-date" style={{ 'marginTop': '5px' }}>{moment(createdAt).format('MMMM Do, YYYY')}</div>
            <div className="preview-brief" style={{ 'marginTop': '5px' }} dangerouslySetInnerHTML={{ __html: subtitle }}></div>
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
