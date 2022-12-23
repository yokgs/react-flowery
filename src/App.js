import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home';
import Header from './pages/Header';
import Hero from './pages/Hero';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Header />
      <Hero />
    </ChakraProvider>
  )
}

export default App;