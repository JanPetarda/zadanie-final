import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


export default function Content({  updateCheckStatus, fruits }) {
    
    // const [isChecked, setIsChecked] = useState(false)
    
    return (
        <>
            {fruits.map((fruit, index) => (
                <div className="flex items-center mb-4 ml-10 space-x-2">
                <Checkbox 
                    className="w-6 h-6 mr-6 "
                    id={`fruit-${index}`} 
                    checked={fruit.checked}
                    onCheckedChange={() => updateCheckStatus(index)}
                /> 
                <Label className="text-xl m-4" htmlFor={`fruit-${index}`}>{fruit.name}</Label>
                <p className="text-xl">{fruit.price}</p>
            </div>
      ))}
        </>
    )
}