import React from 'react';
import './Hearde.css';

export default ({black}) => {
    
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
               <a href="/">
                   <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="logo"/>
               </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"  alt="usuário"/>
                </a>
            </div>
        </header>
    );
}