import React from 'react'
import "./Home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/widget'
import Featured from '../../components/featured/Featured'
import Charts from '../../components/chart/Charts'
import List from '../../components/table/Table'

const Home = () => {
  return (
    <nav>
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className='widgets'>
         <Widget type="user"/>
         <Widget type="homestay"/>
         <Widget type="tourist_spots"/>
         <Widget type="payments"/>
         <Widget type="payments_2"/>
        </div>
        <div className="charts">
          <Featured/>
          <Charts/>
        </div>
        <div className="listContainer">
          <div className="listTitle">HOMESTAY INFORMATION</div>
          <List/>
        </div>
      </div>
    </div></nav>
    
  )
}

export default Home
