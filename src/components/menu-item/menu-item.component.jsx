import React from 'react';

// takes a component as an arguement returns a modified component 
// powering up menu item component to have been updated with  the most recent Path. 
import { withRouter } from 'react-router-dom'; 


import './menu-item.style.scss';

const MenuItem =  ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }}> </div>
    <div className='content'>
        <h1 className='title'>{ title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
);

export default withRouter(MenuItem);