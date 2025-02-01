import React from 'react'
import Navbar from './Navbar'
import Banner1 from './Banner1'
import QualityServices from './QualityServices'
import RecentWorks from './RecentWorks'
import Experience from './Experience'

function First() {
  return (
    <div className='mx-auto max-w-[1400px]  bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] h-full'>
        <Navbar/>
        <Banner1/>
        <QualityServices/>
        <RecentWorks/>
        <Experience/>
    </div>
  )
}

export default First