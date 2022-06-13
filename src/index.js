import React from 'react';
import reactToWebComponent from 'react-to-webcomponent';
import ReactPlayerComponent from './components/reactPlayerComponent';
import ReactDOM from 'react-dom';


export const  PlayerWebComponent = reactToWebComponent(ReactPlayerComponent, React, ReactDOM,  { shadow: false }); 
customElements.define('react-player-comp', PlayerWebComponent);