import React from 'react';
import {render} from 'react-dom';
import Five from './components/Five.js'
import './index.css';
render(
        <div className="parent">
         <Five/>
        </div>
       ,document.getElementById("root")
        );
        