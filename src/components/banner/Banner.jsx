import style from './banner.module.css'

const Banner = () => {
  return(
    <div className={style.banner_section}>
        <div className={style.banner}>
          <p className={style.text_banner}>Лучшие цены 
            <br /> 
            <span>на все чайники</span>
            <br />
            <button className={style.banner_btn}>Купить чайник</button>
          </p>
        </div>
      </div>
  )
}

export default Banner