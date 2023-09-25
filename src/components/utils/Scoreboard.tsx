import React from 'react';
import { GameContext, GameContextType } from '../../scenes/forest/services/GameContext';
import Score, { IScoreProps } from '../Score';
import Log from '/src/assets/log.png';

interface IScoreboardProps {
    scoreList: IScoreProps[];
}


const Scoreboard = ({scoreList}: IScoreboardProps) => {
    
    return <div className="scoreboard">
        {scoreList.map((scoreProps) =>  <Score imgUrl={scoreProps.imgUrl} quantity={scoreProps.quantity}/> )}
       
    </div>
}

export default Scoreboard;