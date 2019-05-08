import Link from 'next/link';

const Shell = ({ children }) => (
    <main>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <nav>
            <Link href="/"> 
                <span>antbnt</span>
            </Link>
            <Link href="/projects">
                <a>projects</a>
            </Link>
            <Link href="/posts">
                <a>posts</a>
            </Link>
            <Link href="/contact">
                <a>contact</a>
            </Link>
        </nav>
        <div>
            {children}
        </div>
        <style jsx>{`
            a {
                text-decoration: none;
                color: #D2CABA;
                margin-right: 10px;
            }

            span {
                margin-right: 20px;
                color: #FFFFFF;
                font-weight: bold;
                border: 3px solid #192E43;
            }

            span:hover {
                cursor: pointer;
                color: #999999;
                border-radius: 2px;
            }

            nav {
                text-align: left;    
                position: fixed;
                padding: 14px;
                z-index: 999;

                top: 0;
                left: 0;
                right: 0;

                display: flex;
                flex-flow: row wrap;

                background-color: #192E43
            }

            div {
                padding: 60px 20px 0 20px;

                display: flex;

                justify-content: center;

                height:80vh;
            }
        `}</style>
        <style jsx global>{`
            body {
                font-family: Helvetica; 
                background-color: #192E43;
                color: #D2CABA;
            } 

            a {
                text-decoration: none;
                color: #FFFFFF;
                border: 3px solid #192E43;

                transition: all 0.1s ease 0s;
            }

            a:hover {
                background-color: white;
                color: #000000;
                border-radius: 4px;
                border: 3px solid white;
            }
        `}</style>
    </main>    
);

export default Shell;
