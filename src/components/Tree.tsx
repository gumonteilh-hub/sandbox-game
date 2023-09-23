import React, { useState, useEffect } from 'react';
import Tree1 from '/src/assets/Tree1.png';
import ChopedTree1 from '/src/assets/ChopedTree1.png';
import { ResourceContext, ResourceContextType } from '../services/resourceContext';

interface ITreeProps {
    top: number;
    left: number;
}

const Tree = ({ top, left }: ITreeProps) => {

    const [chopable, setChopable] = useState(true);

    const {logQuantity, updateLogQuantity} = React.useContext(ResourceContext) as ResourceContextType;

    const handleClick = () => {
        setChopable(false);
        updateLogQuantity(logQuantity + 1)
    }

    useEffect(()=> {
        const grow = setTimeout(()=> {
            setChopable(true);
        }, 10000)

        return ()=> {
            clearTimeout(grow);
        }

    }, [chopable])

    return <>
        {chopable ? 
            <img className='tree chopable' onClick={handleClick} style={{ position: 'absolute', top: top, left: left }} src={Tree1} /> 
            :
            <img className='tree' style={{ position: 'absolute', top: top, left: left }} src={ChopedTree1} /> 
     }

    </>
}

export default Tree