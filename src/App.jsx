import './App.css'
import userdata from "./userData.json" 
import Profile from "./components/Profile/Profile"
export default function App() {
  return (
    <>
     < Profile data = {userdata}/>
    </>
  )
}

