import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import bookImage from "../../assets/books.jpg";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Books</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={bookImage} alt='A library of great books!' />
      </div>
    </Fragment>
  );
};

export default Header;
