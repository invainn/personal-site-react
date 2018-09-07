import Link from 'next/link';

const Shell = ({ children }) => (
    <main>
        <nav>
            <span>Anthony J Bennett</span>
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
        <child>
            {children}
        </child>
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
            }

            child {
                padding-top: 50px;

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
            }
        `}</style>
    </main>    
);

export default Shell;
