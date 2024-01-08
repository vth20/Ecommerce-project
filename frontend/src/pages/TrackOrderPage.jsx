import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import TrackOrder from "../components/Profile/TrackOrder";
import Navbar from '../components/Layout/Navbar';

const TrackOrderPage = () => {
  return (
    <div>
        <Navbar />
        <TrackOrder />
        <Footer />
    </div>
  )
}

export default TrackOrderPage