import React from 'react';
import Header from '../common/Header.js';
import RestApi from '../../helpers/RestApi';


class CollectionsPage extends React.Component {

    constructor() {
        super();

        this.state = {
            items: []
        }
    }

    componentWillMount() {
        this.getFallCollection();
    }


    getFallCollection() {
        RestApi.get('api/collections/').then(data => {
            this.setState({items: data.fall_winter});
        });
    }

    render() {
        let body = document.querySelector('body'); body.classList.remove("home");
        return (
            <div id="container">
                <Header />
                <section id="showCollections">
                    <h2 className="black_outline">Fall/Winter 2014-15</h2>
                    <div id="header_graphic">
                        <img src="http://carlosoblivion.com/man-kim/images/header.jpg" />
                    </div>
                    <div className="fall-wrap">
                    {this.state.items.map((cl, index) => {
                        return(<div key={cl.name} id="align_thumbnail" className={cl.mode}>
                            <a href={ `http://carlosoblivion.com/man-kim/images/fw_slides/${cl.name}SLIDE.jpg`} className="fancybox" data-fancybox="group" id={cl.name} rel="fallWinter">
                                <img src={ `http://carlosoblivion.com/man-kim/images/fw_thumbnails/${cl.name}.jpg` } />
                            </a>
                        </div>);
                    })}
                    </div>
                </section>
            </div>
        );
    }
}

export default CollectionsPage;
