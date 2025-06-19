import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavSide from './Components/NavSide'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className='w-full h-[100vh] bg-zinc-400 flex justify-center items-center relative z-0'>
      <div className='w-[80%] h-[85vh] bg-white rounded-3xl flex justify-end z-1'>
        <div className='w-[85%] h-[40vh] bg-zinc-500 rounded-tr-3xl rounded-bl-[4rem] z-2'></div>
      </div>

      <div className="w-[30%] h-[47.5vh] bg-zinc-600 opacity-90 absolute top-0 right-0 z-3"></div>

      <div className="w-[80%] h-[85vh] rounded-3xl absolute z-3 flex">
        <NavSide />

        {/* <MyProvider> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        {/* </MyProvider> */}
      </div>
    </div>
  )
}

export default App
