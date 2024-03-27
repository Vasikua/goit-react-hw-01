import { useState } from 'react'
import './App.css'
import {userData} from "../userData.json" 
import {Profile} from "./Profile"
export default function App() {
  return (
    <>
     < Profile data = {userData}/>
    </>
  )
}

