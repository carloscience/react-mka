import React from 'react';
import Header from '../common/Header.js';

const ContactPage = () => {
    
    let body = document.querySelector('body'); body.classList.remove("home");

    return (
        <div>
            <Header />
            <div className="contact_bg">
                <div id="contact_main">
                    <section id="contact_email">
                        <article id="inquiries">
                            <h3>General Inquiries</h3>
                            <a href="mailto:info@mankimatelier.com">info@mankimatelier.com</a>
                        </article>
                        <article id="contact_sales">
                            <h3>Sales</h3>
                            <a href="mailto:sales@mankimatelier.com">sales@mankimatelier.com</a>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;