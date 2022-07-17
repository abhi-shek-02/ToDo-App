import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [list, setlist] = useState([])
  const [userInput, setuserInput] = useState('')
  const [pendings, Setpendings] = useState(0)

  //Taking Input
  const functin = (e) => {
    setuserInput(e.target.value)
  }
  const submition = () => {
    setlist([...list, userInput])
    setuserInput('')
    Setpendings((prevpendings) => prevpendings + 1)
  }

  const deletelist = (ind) => {
    console.log('Hello', ind) // Error
    const remainingArray = list.filter((item, index) => {
      console.log(index)
      return index !== ind
    })
    console.log(remainingArray)
    setlist([...remainingArray])
  }

  const d = new Date().toLocaleString()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React ToDo List</h2>
      </header>
      <h3 style={{ color: '#405cf5' }}> PENDING TASK : {pendings}</h3>
      <h3 style={{ color: 'black' }}> {d}</h3>
      <div>
        {/* INPUT */}
        <input
          type="text"
          className="input"
          placeholder="Enter Your Task .."
          value={userInput}
          onChange={(e) => functin(e)}
        />
        <button onClick={() => submition()} className="button-9">
          Submit
        </button>
        {list.map((item, index) => {
          return (
            <div className="list-containers">
              <div className="list-items-main">
                <div className="list-index-container">{index + 1} .</div>
                <div className="list-item-container">{item}</div>
                <div className="list-btn-container">
                  <button
                    className="button-11"
                    onClick={() => deletelist(index)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App