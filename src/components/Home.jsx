import Banner from "./banner/Banner"
import About from "./about/About"
import Products from "./products/Products"

const Home = (props) => {
    return(
        <>
            <Banner />
            <About />
            <Products 
                items={props.items} 
                cartItems={props.cartItems} 
                setCartItems={props.setCartItems}
                setSearch={props.setSearch} 
                search={props.search}
                favoritesItems={props.favoritesItems}
                setFavoritesItems={props.setFavoritesItems}
                loading={props.loading}
            />
        </>
    )
}

export default Home