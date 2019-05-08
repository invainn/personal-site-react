import moment from 'moment';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Fragment, PureComponent } from 'react';
import Shell from '../components/Shell';
import ReactMarkdown from 'react-markdown';
import client from '../common/client';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/styles/prism";

class CodeBlock extends PureComponent {
  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={okaidia}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

const Post = ({ id, title, createdAt, content }) => (
    <Shell>
        <div className="post-content">
            <h1 className="post-title">{title}</h1>
            <h3 className="post-date">{moment(createdAt).format('LLLL')}</h3>
            <hr/>
            <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
            <hr/>
            <Link href="/posts">
                <button className="post-back">Back To Posts</button>
            </Link>
        </div>

        <style jsx>{`
            .post-content {
                width: 85vw;
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
                cursor: pointer;
            }
        `}</style>
    </Shell> 
);

Post.getInitialProps = async ({ query }) => {
    const { id } = query;

    const { fields, sys } = await client.getEntry({
        id,
    });

    const { title, subtitle, content } = fields;
    const { createdAt } = sys;

    return {
        title,
        createdAt,
        subtitle,
        content,
    };
}
    
export default withRouter(Post);

