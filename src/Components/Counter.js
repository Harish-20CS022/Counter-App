import {useState} from "react"

function Counter(){

    const [count, setcount] = useState(0)

    const increment = () =>{
        setcount(count+1)
    }

    const decrement = () =>{
       if(count>0){
        setcount(count-1)
       }
    }

    const reset = () =>{
        setcount(0)
    }

    return(
        <div className="container">
            <h1>Counter App</h1>
            <h2>{count}</h2>

            {count === 0 && <p>Minimum limit reached</p>}

            <div className="btn">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter