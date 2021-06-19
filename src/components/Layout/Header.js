import React from 'react';
import { Fragment } from 'react';

import MealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return(
        <Fragment>
            <header className={classes.header} >
                <h1>Meals-Dukaan</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']} >
                <img src = {MealsImage} alt = "A table full of delecious food!" />
            </div>
        </Fragment>
    )
}

export default Header;