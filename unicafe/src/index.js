import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {

}
const Statistics = ({ good, neutral, bad }) => {
    const all = (good + neutral + bad)
    if (all === 0){
        return(
            <div>  nothing here </div>
        )      
    }
    return (
        <div>           
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
            <div>all {all}</div>
            <div> average {(good - bad) / all}</div>
            <div> positive {good / all * 100} %</div>
            
        </div >
    )

}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1> Give feedback </h1>
            <button onClick={() => setGood(good + 1)}>
                good
            </button>
            <button onClick={() => setNeutral(neutral + 1)}>
                neutral
            </button>
            <button onClick={() => setBad(bad + 1)}>
                bad
            </button>

            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))