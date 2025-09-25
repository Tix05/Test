import Index from './pages'
import { MenuProvider } from './contexts/MenuContext'

function App() {

  return (
    <MenuProvider>
      <Index />
    </MenuProvider>
  )
}

export default App
