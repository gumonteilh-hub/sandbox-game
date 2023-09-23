import React from 'react';
import { ResourceContext, ResourceContextType } from '../services/resourceContext';
import Score from '../components/Score';
import Log from '/src/assets/log.png';

const Scoreboard = () => {

    const { logQuantity } = React.useContext(ResourceContext) as ResourceContextType;
    
    return <div className="scoreboard">
        <Score imgUrl={Log} quantity={logQuantity}/>
    </div>
}

export default Scoreboard;