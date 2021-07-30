import React, { useEffect, useState } from "react";

function App(){
    const [randomDog, setRandomDog] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setRandomDog(data.message)
             setLoading(false)
            }
            )
    }, [])

    return (loading? <p>Loading...</p> :
        <div>
            <img src = {randomDog} alt= {"A Random Dog"} />
        </div>
    )
}

export default App;