import React from 'react';

const Subscribe = () => {
    return (
        <form className="subscribe w-100 mb-3">
            <div className="subscribe__inner d-flex">
                <input type="email" className="subscribe__input flex-grow-1 mr-2 np-in-btn" placeholder="Enter your Email"/>
                <button type="submit" className="subscribe__button np-out-btn">Subscribe</button>  
            </div>
        </form>
    );
}

export default Subscribe
