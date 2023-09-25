import { useState } from "react";
import ShopIcon from '/src/assets/shop.png'
import CloseIcon from '/src/assets/close.png'
import Article, { IArticleProps } from "../Article";

interface IShopProps {
    articleList : IArticleProps[];
}

const Shop = ({articleList}: IShopProps) => {

    const [displayShop, setDisplayShop] = useState(false);


    return <>
        {displayShop ?
            <div className="shopLocation shop">
                <h1>Shop</h1>
                <button className="shopLocation openShopButton" onClick={()=> setDisplayShop(false)}><img src={CloseIcon}/></button>
                {articleList.map((articleProps) => <Article imageUrl={articleProps.imageUrl} handleClick={articleProps.handleClick} enabled={articleProps.enabled} price={articleProps.price} target={articleProps.target} />)}
                
            </div>
            :
            <button className="shopLocation openShopButton" onClick={()=> setDisplayShop(true)}><img src={ShopIcon}/></button>
        }
    </>

}

export default Shop