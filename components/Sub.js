import { Fragment } from 'react';

export default ({ children }) => (
    <Fragment>
        {children}
        <style jsx>{`
            div {
                display: flex;

                justify-content: center;
                align-items: center;
            }
        `}</style>
    </Fragment>
);