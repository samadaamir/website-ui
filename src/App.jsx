import React from 'react'
import Header from './components/section1/header/header'
import Center from './components/section1/center/center'
import Bottom from './components/section1/bottom/bottom'
const App = () => {
  return (
    <div>
    <div className='container'>
      <div className='home'>
        <Header/>
        <Center/>
        </div>
      <Bottom/>
    </div>
    </div>
  )
}

export default App