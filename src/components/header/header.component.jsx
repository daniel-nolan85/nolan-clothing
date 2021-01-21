import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import BasketIcon from '../basket-icon/basket-icon.component';
import BasketDropdown from '../basket-dropdown/basket-dropdown.component';
import {selectBasketHidden} from '../../redux/basket/basket.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {ReactComponent as Logo} from '../../assets/logo.svg'; //Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=146008">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=146008">Pixabay</a>

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
            <BasketIcon />
        </div>
        {hidden ? null : <BasketDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectBasketHidden
});

export default connect(mapStateToProps)(Header);