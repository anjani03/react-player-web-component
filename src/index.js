// import formDetail from "./form";
import './joke.css';
// import formDetail from './form';

import React from "react";
import ReactDOM  from "react-dom";
import formDetail from './form';
import reactToWebComponent from 'react-to-webcomponent'

export const webcomp = reactToWebComponent(formDetail, React, ReactDOM, {shadow:false});
customElements.define('react-comp', webcomp);
