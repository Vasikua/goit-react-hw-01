import { useState } from 'react'
import './App.css'
import {userData} from "../src/userData.json" 
import {Profile} from "./components/Profile/Profile"
export default function App() {
  return (
    <>
     < Profile data = "userData"/>
    </>
  )
}

