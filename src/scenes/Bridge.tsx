import React from 'react';
import { GameContext, GameContextType } from '../services/GameContext';
import BridgeImage from '/src/assets/bridge.png'

const Bridge = () => {

    const { bridgeBuilt } = React.useContext(GameContext) as GameContextType;

    return <>
        {bridgeBuilt && <img className='bridge' src={BridgeImage} />}
    </>
}

export default Bridge;