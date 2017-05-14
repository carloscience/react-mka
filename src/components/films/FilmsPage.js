import React from 'react';
import Header from '../common/Header.js';
import ReactPlayer from 'react-player'

const path = 'https://www.youtube.com/watch?v=';

class FilmsPage extends React.Component {

    constructor() {
        super();

        this.state = {
            url: path + '6TtN5c1gl8I'
        }

        this.loadVideo = this.loadVideo.bind(this);
    }

    loadVideo(e) {
        e.preventDefault();
        this.setState({url: path + e.target.id});
        return;
    }

    render() {
        let body = document.querySelector('body'); body.classList.remove("home");
        
        return (
            <div>
                <Header />
                <div id="films_main">
                    <ReactPlayer url={this.state.url} width="1025px" height="401px" controls />
                    <section id="films_list">
                        <ul>
                            <li><a id="6TtN5c1gl8I" className="video1" href="#" onClick={this.loadVideo}>Untitled</a></li>
                            <li><a id="XlAFca21jnM" className="video2" href="#" onClick={this.loadVideo}>At the Helm of the Base</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default FilmsPage;