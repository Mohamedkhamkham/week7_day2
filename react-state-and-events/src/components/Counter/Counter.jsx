import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }

    const decrementCounter = () => {
        setCount(count - 1)
    }


    return (
        <div className="Counter">
            <h2>Has clickado {count} veces</h2>

            <p>¡Modifica el contador!</p>

            <button onClick={incrementCounter}> + </button>
            <button onClick={decrementCounter}> - </button>
        </div>
    );
}

export default Counter