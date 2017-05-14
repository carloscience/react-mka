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
        this.getSpringCollection();
    }


    getSpringCollection() {
        RestApi.get('api/collections/').then(data => {
            this.setState({items: data.spring_summer});
        });
    }

    render() {
        let body = document.querySelector('body'); body.classList.remove("home");
        return (
            <div>
                <Header />
                <section id="showCollections">
                    <h2 className="black_outline">Spring/Summer 2014</h2>
                    <div id="header_graphic">
                        <img src="http://carlosoblivion.com/man-kim/images/ss_header.jpg" />
                    </div>
                    <div>
                    {this.state.items.map((cl, index) => {
                        return(<div key={cl.name} id="align_thumbnail" className={cl.mode}>
                            <a href={ `http://carlosoblivion.com/man-kim/images/ss_slides/${cl.name}SLIDE.jpg`} className="fancybox" data-fancybox="spring" id={cl.name} rel="springSummer">
                                <img src={ `http://carlosoblivion.com/man-kim/images/ss_thumbnails/${cl.name}.jpg` } />
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
