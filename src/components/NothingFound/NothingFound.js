import React from 'react';
import { Link } from 'react-router-dom';

const NothingFound = () => {
    return (
        <div className="text-center">
            <h1 className="mt-5">OOps, Seems like there are no matching result of your search</h1>
            <h3 className="mb-5">404 Not Found!</h3>
            <Link to="/home">Wanna see BEVERAGE STORE?</Link>
        </div>
    );
};

export default NothingFound;