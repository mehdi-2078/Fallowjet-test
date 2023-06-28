"use client"
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {DELETE_FROM_FORMS} from '@/app/redux/reducers/forms';

const validationSchema = Yup.object().shape({
    text: Yup.string().min(10, 'متن شما نباید کمتر از 10 کاراکتر باشد')
        .required('متن را وارد کنید'),
});

export const TextArea = ({data}) => {
    const {title, placeholder, required, label, id} = data;
    const dispatch = useDispatch();

    const deleteForm = () => {
        dispatch(DELETE_FROM_FORMS(id));
    };

    return (
        <Formik
            initialValues={{
                text: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <div className="flex flex-col">
                        <div className="flex">
                            <label htmlFor={title}>{label}</label>
                            <span onClick={deleteForm} className=" cursor-pointer mr-4 text-red-600">حذف</span>
                            {/*<span className=" cursor-pointer mr-4 text-yellow-600">تغییر</span>*/}
                        </div>
                        <textarea
                            name="text"
                            id={title}
                            placeholder={placeholder}
                            required={Boolean(required)}
                            className={`bg-transparent pr-2 mt-5 border-2 w-1/3 ${
                                errors.text && touched.text ? 'border-red-500' : ''
                            }`}
                        />
                        <ErrorMessage
                            name="text"
                            component="div"
                            className="text-red-500"
                        />
                    </div>
                </Form>)}
        </Formik>);
};
