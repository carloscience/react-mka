import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CollectionsPage from './components/collection/CollectionsPage';
import SpringCollectionPage from './components/collection/SpringCollectionPage';
import FilmsPage from './components/films/FilmsPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="collections" component={CollectionsPage} />
    <Route path="spring-summer" component={SpringCollectionPage} />
    <Route path="films" component={FilmsPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);
