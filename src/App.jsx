import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ContributionCard from './Components/ContributionCard'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Home />} >
          <Route path='/:username' element={<ContributionCard />} />
        </Route>
      </>
    )
  )

  return (
    <div className="min-h-screen w-full bg-[#111518] text-white">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App