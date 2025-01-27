"use client"
import { Button } from "@chakra-ui/react"
import {ColorModeButton,useColorMode,useColorModeValue,} from "./components/ui/color-mode"

function App() {

  const { toggleColorMode } = useColorMode()

  return (
    <>
      <Button>hLW</Button>
      <Button variant="outline" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
    </>
  )
}

export default App



