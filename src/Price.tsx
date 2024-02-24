import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { Button } from "./components/ui/button"


export default function Price({ setFruitPrice, index }) {
    const [price, setPrice] = useState(null)
    return (
        <div className="m-6 py-6">
            <Input type="number" placeholder="Cena" value={price} onInput={e => setPrice(e.target.value)}></Input>
            <Button className="mt-4" onClick={()=> setFruitPrice(index, price)}> Dodaj cenę</Button>
        </div>
    )
}