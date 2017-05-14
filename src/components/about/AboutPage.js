import React from 'react';
import Header from '../common/Header.js';

const AboutPage = () => {

    let body = document.querySelector('body'); body.classList.remove("home");

    return (
        <div>
            <Header />
            <section id="content">
                <div id="about_main">
                    <section id="about_feature">
                        <img src="http://carlosoblivion.com/man-kim/images/AboutHeader.jpg" />
                    </section>
                    <article id="about_description">
                        <strong>Man Kim Atelier</strong> is an American luxury label offering women's clothing and accessories made with exclusive screened silks, fine wools, hand-braided horse hair finishings, and opulent jerseys and leathers. Evoking a <em>timeless sensibility</em> with a contemporary silhouette, the clothing offers a product of superior workmanship, leaving the customer feeling current, yet connected to fashion's <em>lost traditions</em>.
                    </article>
                    <article id="about_bio">
                        <strong>Man Kim Atelier</strong> was Launched in 2012 in Los Angeles, California by multidisciplinary artist and tailor <strong>Kim Mackin</strong>
                    </article>
                    <article id="about_download">
                        Download <a href="http://carlosoblivion.com/man-kim/press/Man_Kim_Atelier_Press_Book.pdf" target="_blank">Press Book</a>
                    </article>
                    <article id="find_career">
                        For employment and apprenticeship opportunities please <a className="careers" href="mailto:man@mankimatelier.com">contact us</a>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;