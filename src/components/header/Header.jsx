import { Link } from 'react-router-dom'
import style from './header.module.css'
import React from 'react'



const Header = (props) =>{

    

    return(
        <header>
            <Link to='/'>
                <h1 className={style.logo}>LOGO</h1>
            </Link>
            <nav>
                <Link to='/favorites'>
                    <button className={style.nav_item}>ИЗБРАННОЕ</button>
                </Link>
                <div className={style.cart_btn}>
                    <button className={style.nav_item} onClick={props.openCart}>КОРЗИНА</button>
                    <span className={style.count_cart_items}>{props.cartItems.length}</span>
                    <a className={style.nav_item} href='http://localhost:8080/authentication/login'>Регистрация/авторизация</a>
                </div>
            </nav>
        </header>
    )
} 

export default Header