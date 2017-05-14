import React from 'react';
import {Link} from 'react-router';
import ReactDriveIn from 'react-drive-in';

const show = ["http://carlosoblivion.com/man-kim/js/assets/nuloop.webm",
        "http://carlosoblivion.com/man-kim/js/assets/nuloop.mp4"];

const HomePage = () => {
    
    let body = document.querySelector('body'); body.className="home";
    
    return (
        <div>
            <ReactDriveIn
              show={show}
              poster="http://carlosoblivion.com/man-kim/js/assets/nuloop.jpg"
            />
            <article id="home_logo"></article>
            <nav id="bottom_nav">
                <section id="shop_overlay"></section>
                <article className="dropdown_nav">
                    <div id="drop_menu">
                        <Link to="collections" className="fall-winter">F/W 2014</Link>
                        <Link to="spring-summer" className="spring-summer">S/S 2014</Link>
                    </div>
                    <Link to="collections" className="bottomnav" id="collections_home">Collections</Link>
                </article>
                <Link to="films" className="bottomnav" id="films_home">Films</Link>
                <Link to="about" className="bottomnav" id="about_home">About</Link>
                <Link to="contact" className="bottomnav" id="contact_home">Contact</Link>
            </nav>
        </div>
    );
}

export default HomePage;