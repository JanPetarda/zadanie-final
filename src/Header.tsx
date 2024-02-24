import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"

export default function Header({selectAll, unfold}) {

    return(

        <div className="flex m-6 text-xl">
            <div className="flex items-center space-x-2">
                <Checkbox className="w-6 h-6 mr-5" onCheckedChange={()=> selectAll()}  />
            </div>

            <div onClick={unfold}  className="flex mr-4  font-size-xl space-x-2">
                <p>Owoce</p>
                <img className="w-4 space-y-2 ml-4" src="public/arrow.svg" alt="arrow" />
            </div>


            
        </div>
        
    )
}