export default ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                display: flex;

                justify-content: center;
                align-items: center;
            }
        `}</style>
    </div>
);
