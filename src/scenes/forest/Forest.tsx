import { useContext, useMemo } from 'react'
import './Forest.css'
import Scoreboard from '../../components/utils/Scoreboard'
import Shop from '../../components/utils/Shop'
import Tree from './components/Tree';
import BridgeImg from './assets/bridge.png'
import LogImg from './assets/log.png'
import { GameContext, GameContextType } from './services/GameContext';
import { Link } from 'react-router-dom';

interface Ipos {
  x: number;
  y: number
}

function Forest() {

  const treePos: Ipos[] = useMemo(() => {
    const tmpTreePos: Ipos[] = [];
    for (let i = 0; i < 100; i++) {
      tmpTreePos.push({ y: Math.random() * (window.innerHeight - 120), x: Math.random() * (window.innerWidth - 270) });
    }

    tmpTreePos.sort((a, b) => b.y - a.y)

    return tmpTreePos;
  }, [])


  const { bridgeBuilt, logQuantity, updateBridgeBuilt, updateLogQuantity } = useContext(GameContext) as GameContextType;


  const handleClick = () => {
    if (logQuantity >= 300) {
      updateLogQuantity(logQuantity - 300);
      updateBridgeBuilt(true)
    } else {
      alert('Tu n\'as pas assez de buches pour construire le pont');
    }
  }

  return (
    <>
      <Scoreboard scoreList={[{ imgUrl: LogImg, quantity: logQuantity }]} />
      <Shop articleList={[{ enabled: !bridgeBuilt, price: 300, imageUrl: LogImg, handleClick: handleClick, target: BridgeImg }]} />
      {
        treePos.map((pos, index) => {
          return <Tree key={index} zIndex={index} top={pos.y} left={pos.x} />
        })
      }

      <div className='river' />
      {bridgeBuilt && <Link to='/mines' ><img className='bridge' src={BridgeImg} /> </Link>}
    </>
  )
}

export default Forest
