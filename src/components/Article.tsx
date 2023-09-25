import { MouseEventHandler} from 'react';

export interface IArticleProps {
    price: number;
    imageUrl: string;
    target: string
    enabled?: boolean;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Article = ({price, imageUrl, handleClick, enabled, target}: IArticleProps) => {

    return <div className='article'>
        <img className='articleImage' src={target} />
        <button disabled={!enabled} onClick={handleClick} > <span>{price}</span> <img className='scoreIcon' src={imageUrl} />
        </button>
    </div>
}

export default Article