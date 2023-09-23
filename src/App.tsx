import './App.css'
import Tree from './components/Tree'
import Scoreboard from './scenes/Scoreboard'
import ResourceProvider from './services/resourceContext'

function App() {

  return (
    <ResourceProvider>
      <Scoreboard/>
      <Tree top={500} left={600} />

    </ResourceProvider>
  )
}

export default App
