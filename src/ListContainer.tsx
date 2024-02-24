import { Checkbox } from "@/components/ui/checkbox"
import Header from "@/Header"
import Content from "@/Content"
import { useState, useEffect } from "react"; 
import Price from "./Price";


const fruitsData = [
    { name: "jabłka", checked: false, price: null },
    { name: "banany", checked: false, price: null},
    { name: "pomarańcze", checked: false, price: null },
    { name: "wiśnie", checked: false, price: null },
    { name: "winogorona", checked: false, price: null }
]
    
export default function ListContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const [checkAll, setCheckAll] = useState(false)
    const [fruits, setOwoce] = useState(fruitsData)


    useEffect(()=> {
        setOwoce(fruits.map(f => 
            ({...f, checked: checkAll})
            ))
    }, [checkAll])
    

    const updateCheckStatus = index => {
        setOwoce(
            fruits.map((fruit, currentIndex) =>
            currentIndex === index
            ? { ...fruit, checked: !fruit.checked }
            : fruit
            )
            )
    }

    const setPrice = (index, newPrice) => {
        setOwoce(
            fruits.map((fruit, currentIndex) =>
            currentIndex === index
            ? { ...fruit, price: newPrice }
            : fruit
            )
            )
    }

        function unfold() {
            setIsOpen(!isOpen)
        }

        const toggleCheckAll = () => {
            setCheckAll(prevState => !prevState)
        }

    return(
        <div>
            <Header unfold={unfold} selectAll={toggleCheckAll} />
           {isOpen && <Content fruits={fruits} updateCheckStatus={updateCheckStatus} />}
           {fruits.map((fruit, index) => {
                return fruit.checked && <Price index={index} setFruitPrice={setPrice} />
           })}
        </div>
    )
}