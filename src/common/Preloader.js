import React from 'react';
import preloader from '../pictures/loader.gif';
import classes from './Preloader.module.css';

let Preloader = () => { 
    return <div style = { {backgroundColor: 'white'}} >
        <img className = {classes.loader} src = {preloader} />
    </div>
}

export default Preloader