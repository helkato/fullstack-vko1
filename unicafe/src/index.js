import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td><td>{props.value}</td>
        </tr>
    )
}
const Statistics = ({ good, neutral, bad }) => {
    const all = (good + neutral + bad)
    if (all === 0) {
        return (
            <div>  No feedback given </div>
        )
    }
    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={(good - bad) / all} />
                <StatisticLine text="positive"
                    value={(good / all).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })} />
            </tbody>
        </table >
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
            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />

            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))