import { useState } from "react";
import ShopIcon from '/src/assets/shop.png'
import CloseIcon from '/src/assets/close.png'
import Article from "../components/Article";

const Shop = () => {

    const [displayShop, setDisplayShop] = useState(false);


    return <>
        {displayShop ?
            <div className="shopLocation shop">
                <h1>Shop</h1>
                <button className="shopLocation openShopButton" onClick={()=> setDisplayShop(false)}><img src={CloseIcon}/></button>

                <Article/>
            </div>
            :
            <button className="shopLocation openShopButton" onClick={()=> setDisplayShop(true)}><img src={ShopIcon}/></button>
        }
    </>

}

export default Shop