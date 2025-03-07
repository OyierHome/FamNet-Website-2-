import { RouterProvider } from 'react-router-dom'
import './App.css'
import appRouter from './routes'
// import AgritechMainPage from './Agritech/AgritechMainPage'
// import AgritechPage1 from './Agritech/AgritechPage1'

function App() {

  return (
    <div className='bg-[#152C24]'>
    <RouterProvider router={appRouter} />
    {/* <AgritechMainPage />
    <AgritechPage1/></> */}
    </div>
  )
}

export default App
