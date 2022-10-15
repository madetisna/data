
import './App.css';
import Select from 'react-select'
import { useEffect, useState } from 'react';

function App() {
  const [datas, setDatas] = useState([])
  const [userselect, setUserselect] = useState("")
  const [isShow, setisShow] = useState(false)
  
  const getBerries = async() => {
    const berries = await fetch("https://pokeapi.co/api/v2/berry/")
    const value = await berries .json()
    let result = value.results.map(data => {
      return {
        label: data.name,
        value: data.name
      }
    })
    setDatas(result.sort((a, b) => a. label.localeCompare(b.label)))
    
  }

  useEffect(() => {
      getBerries()
  }, [])
  
  const handleSubmit = () => {
   setisShow(state => !state)
  }

  const handleChange = (value) => {
    setUserselect(value)
  }
  
  return (
    <div className="App">
      <h1>{isShow ? userselect : ""}</h1>
      <button onClick={() => handleSubmit()} disabled={!userselect}>{isShow ? "hide button" : "show values"}</button>
      <br />
      <br />
      <Select options={datas} onChange={(e) => handleChange(e.value)}></Select>

      
    </div>
  );
}

export default App;
