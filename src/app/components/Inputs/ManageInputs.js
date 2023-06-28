"use client"

import {TextInput} from "@/app/components/Inputs/InputTypes/TextInput";
import {useSelector} from "react-redux";
import {NumberInput} from "@/app/components/Inputs/InputTypes/NumberInput";
import {TextArea} from "@/app/components/Inputs/InputTypes/TextArea";

export const ManageInputs = () => {
    const {forms} = useSelector(state => state.forms);
    const componentByType = {
        text: TextInput,
        number: NumberInput,
        textArea: TextArea,
        // ورودی‌های دیگر
    };
    return (
        <div className="border-2 mt-20 py-8 px-8">
            {forms.map((item, index) => {
                const Component = componentByType[item.type];
                return Component ? <Component key={index} data={item}/> : null;
            })}
        </div>
    );
};
