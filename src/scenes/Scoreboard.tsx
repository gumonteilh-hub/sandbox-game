import React from 'react';
import { GameContext, GameContextType } from '../services/GameContext';
import Score from '../components/Score';
import Log from '/src/assets/log.png';

const Scoreboard = () => {

    const { logQuantity } = React.useContext(GameContext) as GameContextType;
    
    return <div className="scoreboard">
        <Score imgUrl={Log} quantity={logQuantity}/>
    </div>
}

export default Scoreboard;