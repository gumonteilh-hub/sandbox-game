import React, { useState, useEffect } from 'react';
import Tree1 from '../assets/Tree1.png';
import ChopedTree1 from '../assets/ChopedTree1.png';
import { GameContext, GameContextType } from '../services/GameContext';

interface ITreeProps {
    top: number;
    left: number;
    zIndex: number;
}

const Tree = ({ top, left, zIndex }: ITreeProps) => {

    const [chopable, setChopable] = useState(true);

    const { logQuantity, updateLogQuantity } = React.useContext(GameContext) as GameContextType;

    const handleClick = () => {
        setChopable(false);
        updateLogQuantity(logQuantity + 1)
    }

    useEffect(() => {
        const grow = setTimeout(() => {
            setChopable(true);
        }, 10000)

        return () => {
            clearTimeout(grow);
        }

    }, [chopable])

    return <>
        {chopable ?
            <img className='tree chopable' onClick={handleClick} style={{ position: 'absolute', bottom: top, left: left, zIndex: zIndex }} src={Tree1} />
            :
            <img className='tree' style={{ position: 'absolute', bottom: top, left: left, zIndex: zIndex }} src={ChopedTree1} />
        }

    </>
}

export default Tree