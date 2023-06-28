"use client"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_TO_FORMS} from "@/app/redux/reducers/forms";

export const FormBuilder = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        placeholder: '',
        type: '',
        required: '',
        label: ''
    })
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) =>
            ({...prevFormData, [name]: value}));
    }
    const handleClick = (e) => {
        e.preventDefault();
        const newForm = {...formData, id: Date.now()};

        dispatch(ADD_TO_FORMS(newForm))
        setFormData({
            title: '',
            placeholder: '',
            type: '',
            required: '',
            label: ''
        })
    }

    return (
        <>
            <div className="">
                <form className="flex text-white flex-col space-y-8">
                    <div className="flex items-center">
                        <span>عنوان فیلد:</span>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="bg-transparent border-b-2 mr-5" type="text"/>
                    </div>
                    <div className="flex items-center">
                        <span>عنوان نمایشی:</span>
                        <input
                            name="label"
                            value={formData.label}
                            onChange={handleChange}
                            className="bg-transparent border-b-2 mr-5" type="text"/>
                    </div>
                    <div className="flex items-center">
                        <span>نوع فیلد:</span>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="bg-transparent border-2 mr-5">
                            <option value="" disabled selected hidden>انتخاب کنید...</option>
                            <option className="text-black" value="number">عددی</option>
                            <option className="text-black" value="text">رشته ای</option>
                            <option className="text-black" value="textArea">توضیحات متنی</option>
                            {/*<option className="text-black" value="date">تاریخ</option>*/}
                            {/*<option className="text-black" value="2date">بازه تاریخی</option>*/}
                            {/*<option className="text-black" value="select">انتخاب از لیست</option>*/}
                            {/*<option className="text-black" value="radio">رادیویی</option>*/}
                            {/*<option className="text-black" value="checkBox">چک باکس</option>*/}
                        </select>
                    </div>
                    <div className="flex items-center">
                        <span>توضیحات فیلد:</span>
                        <input
                            name="placeholder"
                            value={formData.placeholder}
                            onChange={handleChange}
                            className="bg-transparent border-b-2 mr-5" type="text"/>
                    </div>
                    <div className="flex items-center">
                        <span>اجباری باشد؟</span>
                        <select
                            name="required"
                            value={formData.required}
                            onChange={handleChange}
                            className=" bg-transparent border-2 mr-5">
                            <option value="" disabled selected hidden>انتخاب کنید...</option>
                            <option className="text-black" value={1}>بله</option>
                            <option className="text-black" value={0}>خیر</option>
                        </select>
                    </div>
                    <button onClick={(e) => handleClick(e)} className="bg-blue-600 w-fit px-8 rounded-lg py-1 text-lg"
                            type="submit">ایجاد
                    </button>
                </form>
            </div>
        </>
    );
};
