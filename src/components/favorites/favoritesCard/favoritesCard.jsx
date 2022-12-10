import React, { useState } from "react"
import style from './favoritesCard.module.css'
import { AppContext } from "../../../App"
const FavoritesCard = (props) =>{ 

  const context = React.useContext(AppContext)
  //const [added, setAdded] = useState(false)
  // const [favorite, setFavorite] = useState(false)


  const onClickPlus = () => {
    let id = props.id
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img 

    props.onPlus({id, title, description, price, img});

   // setAdded(!added);
  }

  const onClickFavorite = () => {
    props.onFavorite(props.id);
    // setFavorite(!favorite);
  }

  return(
      <div className={style.product_item}>

            {/*
              favorite === true ? <button className={style.favorite_btn_added} onClick={onClickFavorite} >Товар добавлен в избранное</button> 
              : <button className={style.favorite_btn} onClick={onClickFavorite} >Добавить в избранное</button>
            */}
            <button className={style.favorite_btn_added} onClick={onClickFavorite} >Убрать из избранных</button>
            <img className={style.product_img} src={props.img} alt={props.title} />
            <p className={style.product_title}>{props.title}</p>
            <p className={style.product_description}>{props.description}</p>
            <p className={style.price}>Цена</p>

            <div className={style.product_price}>
              <span>{props.price} руб</span>
               <button className={context.itemAdded(props.myId) ? style.check_btn : style.plus_btn} onClick={onClickPlus}>
                <img src={context.itemAdded(props.myId) ? '/img/check.png' : '/img/plus.png'} alt=""/>
              </button>
            </div> 
      </div>
    )
}

export default FavoritesCard