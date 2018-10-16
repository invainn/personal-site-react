import Link from 'next/link';

const Shell = ({ children }) => (
    <main>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <nav>
            <span>Anthony Bennett</span>
            <Link href="/"> 
                <a>Home</a>
            </Link>
            <Link href="/posts">
                <a>Posts</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
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
                padding: 50px 20px 0 20px;

                display: flex;

                align-items: center;
                justify-content: center;

                height: 80vh;
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
                color: black;
                border-radius: 4px;
                border: 3px solid white;
            }
        `}</style>
    </main>    
);

export default Shell;
