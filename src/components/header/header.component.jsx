import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import BasketIcon from '../basket-icon/basket-icon.component';
import BasketDropdown from '../basket-dropdown/basket-dropdown.component';
import {selectBasketHidden} from '../../redux/basket/basket.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import styled from 'styled-components';

import './header.styles.scss';

const MobileNav = styled.div`
    @media (max-width: 860px) {
        width: 2rem;
        height: 2rem;
        position: fixed;
        top: 40px;
        right: 40px;
        z-index: 30;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;

        div {
            width: 2rem;
            height: 0.25rem;
            background-color: ${({open}) => open ? '#fff' : '#d4af37'};
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.3s linear;
    
            &:nth-child(1) {
                transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
            }
    
            &:nth-child(2) {
                transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${({open}) => open ? 0 : 1};
            }
    
            &:nth-child(3) {
                transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
            }
        }
    }
`;

const Options = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 860px) {
        justify-content: flex-start;
        flex-flow: column;
        background-color: #d4af37;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 250px;
        z-index: 20;
        transition: transform 0.3s ease-in-out;
    }

    .option {
        padding: 10px 15px;
        margin-top: 30px;
        color: #d4af37;
        font-weight: 900;
        font-size: 24px;
        cursor: pointer;
        @media (max-width: 860px) {
            color: #fff;
        }
    }
`;
    

const Header = ({currentUser, hidden}) => {
    const [open, setOpen] = React.useState(false)
    return (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <MobileNav open={open} onClick={() => setOpen(!open)}>

            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>

        </MobileNav>
        
        <Options open={open}>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/photo-cred'>
                PHOTO CRED
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
        </Options>
        
        

        {hidden ? null : <BasketDropdown />}
    </div>
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectBasketHidden
});

export default connect(mapStateToProps)(Header);