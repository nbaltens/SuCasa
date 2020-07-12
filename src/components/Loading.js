import React from 'react';
import loadingGif from '../images/gif/loadingIcon.gif';

export default function Loading() {
    return (
        <div className="loading">
            <h4>Rental data loading...</h4>
            <img className="loadingGif" src={loadingGif} />
        </div>
    )
}
