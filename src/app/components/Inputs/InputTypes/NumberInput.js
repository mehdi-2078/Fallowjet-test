import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {DELETE_FROM_FORMS} from '@/app/redux/reducers/forms';

const validationSchema = Yup.object().shape({
    number: Yup.number().required('عدد را وارد کنید'),
});

export const NumberInput = ({data}) => {
    const {title, placeholder, required, label, id} = data;
    const dispatch = useDispatch();

    const deleteForm = () => {
        dispatch(DELETE_FROM_FORMS(id));
    };

    return (<Formik
        initialValues={{
            number: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        {({errors, touched}) => (<Form>
            <div className="flex flex-col my-5">
                <div className="flex">
                    <label htmlFor="number">{label}</label>
                    <span onClick={deleteForm} className="mr-4 text-red-600">حذف</span>
                    {/*<span className="mr-4 text-yellow-600">تغییر</span>*/}
                </div>
                <Field
                    type="number"
                    name="number"
                    id="number"
                    placeholder={placeholder}
                    required={Boolean(required)}
                    className={`bg-transparent pr-2 mt-5 border-b-2 w-1/3 ${errors.number && touched.number ? 'border-red-500' : ''}`}
                />
                <ErrorMessage
                    name="number"
                    component="div"
                    className="text-red-500"
                />
            </div>
        </Form>)}
    </Formik>);
};
