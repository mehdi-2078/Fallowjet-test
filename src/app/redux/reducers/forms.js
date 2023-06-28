import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    forms: []
};
const slice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        ADD_TO_FORMS: (state, {payload}) => {
            console.log({payload})
            state.forms.push(payload)
        },
        DELETE_FROM_FORMS: (state, {payload}) => {
            state.forms = state.forms.filter(form => form.id !== payload);
        },
        UPDATE_FORMS: (state, {payload}) => {
            const index = state.forms.findIndex(form => form.id === payload.id);
            if (index !== -1) {
                state.forms[index] = payload;
            }
        }
    },
});

export const {ADD_TO_FORMS, DELETE_FROM_FORMS, UPDATE_FORMS} = slice.actions;
export default slice.reducer;
