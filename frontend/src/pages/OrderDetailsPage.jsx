import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import UserOrderDetails from "../components/UserOrderDetails";
import Navbar from '../components/Layout/Navbar';

const OrderDetailsPage = () => {
  return (
    <div>
        <Navbar />
        <UserOrderDetails />
        <Footer />
    </div>
  )
}

export default OrderDetailsPage