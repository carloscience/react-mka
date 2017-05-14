import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
    return (
        <header id="header">
            <nav id="top_nav">
            <Link to="/" id="sidebar"></Link>
                <article className="dropdown_nav">
                <Link to="collections" className="topnav" id="collections" activeClassName="active">Collections</Link>
                <div id="drop_menu">
                    <Link to="collections" className="fall-winter">F/W 2014</Link>
                    <Link to="spring-summer" className="spring-summer">S/S 2014</Link>
                </div>
                </article>
                <Link to="films" className="topnav" id="films" activeClassName="active">Films</Link>
                <Link to="about" className="topnav" id="about" activeClassName="active">About</Link>
                <Link to="contact" className="topnav" id="contact" activeClassName="active">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;