import { useEffect, useState } from 'react'
import './App.css'
import Tree from './components/Tree'
import Scoreboard from './scenes/Scoreboard'
import GameContextProvider from './services/GameContext'
import Shop from './scenes/Shop'
import Bridge from './scenes/Bridge'

interface Ipos {
  x : number;
  y: number
}

function App() {

  const [treePos, setTreePos] = useState<Ipos[]>([])

  useEffect(()=> {
    const tmpTreePos : Ipos[] = [];
    for(let i =0; i < 100; i++) {
      tmpTreePos.push({y : Math.random()*(window.innerHeight - 120), x: Math.random()*(window.innerWidth-270)});
    }

    tmpTreePos.sort((a,b) => b.y - a.y)

    setTreePos(tmpTreePos);
  }, [])

  return (
    <GameContextProvider>
      <Scoreboard />
      <Shop/>
      {
        treePos.map((pos, index) => {
          return <Tree key={index} zIndex={index} top={pos.y} left={pos.x} />
        })
      }

      <div className='river'/>

      <Bridge/>

    </GameContextProvider>
  )
}

export default App
