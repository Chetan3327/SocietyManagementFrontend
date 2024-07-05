import { ModeToggle } from './components/mode-toggle'
import { Button } from './components/ui/button'
import { ThemeProvider } from './providers/theme-provider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Button>hello</Button>
        <ModeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
