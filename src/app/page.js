import {FormBuilder} from "@/app/components/FormBuilder/FormBuilder";
import {ManageInputs} from "@/app/components/Inputs/ManageInputs";

export default function Home() {
    return (
        <div className="w-10/12 mx-auto pt-10">
            <FormBuilder/>
            <ManageInputs/>
        </div>
    )
}
