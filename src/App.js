import * as React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from './components/navbar'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'/>
          <Route path='/cart'/>

        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App;
