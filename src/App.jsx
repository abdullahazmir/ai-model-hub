
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Models from './components/models/Models'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'

const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json()

}

const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab]= useState('models')
  const [carts, setCarts]= useState([])
  


  return (
    <>
      <NavBar />

      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box  justify-center">
        <input onClick={()=> setActiveTab('models')} type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Models" defaultChecked />
        <input onClick={()=> setActiveTab('cart')} type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label={`Cart (${carts.length})`}  />
       
      </div>

     {activeTab ==='models' && <Models modelPromise={modelPromise}  carts={carts} setCarts={setCarts}/>}

      {activeTab==='cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <Footer />
    </>
  )
}

export default App
