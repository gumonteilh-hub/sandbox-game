import { useContext } from 'react';
import {GameContext, GameContextType } from '../services/GameContext';
import Bridge from '/src/assets/bridge.png'
import Log from '/src/assets/log.png';

const Article = () => {

    const { bridgeBuilt, logQuantity, setBridgeBuilt, updateLogQuantity } = useContext(GameContext) as GameContextType;


    const handleClick = () => {
        if(logQuantity >= 300) {
            updateLogQuantity(logQuantity- 300); 
            setBridgeBuilt(true)
        } else {
            alert('Tu n\'as pas assez de buches pour construire le pont');
        }
    }

    return <div className='article'>
        <img className='articleImage' src={Bridge} />
        <button disabled={bridgeBuilt} onClick={handleClick} > <span>300</span> <img className='scoreIcon' src={Log} />
        </button>
    </div>
}

export default Article