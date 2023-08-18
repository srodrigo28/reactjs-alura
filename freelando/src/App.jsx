import { Card } from './components/Card'
import { Estilos } from './components/EstilosGlobais/Estilos'
import { ProvedorTheme } from './components/ProvedorTema'

function App() {
  return(
    <ProvedorTheme>
      <Estilos />
      <Card>
        <h1>Freelando App</h1>
      </Card>
    </ProvedorTheme>
  )
}

export default App
