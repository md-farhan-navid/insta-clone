import { Provider } from "./components/ui/provider.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {mode} from '@chakra-ui/theme-tools'


const styles = {
  global:(props) => ({
    body:{
      bg:mode("gray.100","#000")(props),
      color:mode("gray.800","whiteAlpha.900")(props)
    }
  })
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)



