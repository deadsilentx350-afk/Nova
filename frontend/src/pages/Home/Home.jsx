import React from 'react'
import { Link } from "react-router-dom"
const Home = ()=>{
  return(
    <>
    <h1>this is a home page </h1>
    <button ><Link  to="/auth/register">Go to Signup</Link></button>
    </>
    )
}

export default Home;