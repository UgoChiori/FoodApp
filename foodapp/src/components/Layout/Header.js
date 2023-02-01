import { Fragment } from "react";
import classes from './Header.module.css';
import mainHeaderImage from '../../assets/mainHeaderImage.jpeg';
import HeaderCartButton from "./HeaderCartButton";

const Header =() => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Afang & Co</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={mainHeaderImage} alt="bowl of vegetable soup with meat, snails and fufu"  />
                </div>
        </Fragment>

    );
}

export default Header;