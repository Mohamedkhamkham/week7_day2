import { useState } from "react"
import { drinksData } from "../../fakeAPI"

const BasicList = () => {

    const [drinks] = useState(drinksData)

    return (
        <>
            <h1>Listado básico</h1>
            {
                drinks.map((elm, i) => {
                    return <p key={i}>{elm}</p>
                })
            }
        </>
    )
}

export default BasicList
