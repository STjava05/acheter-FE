
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchMerceDetail = createAsyncThunk(
    'api/fetchApi',
    async (merce) => {
        const response = await fetch('http://localhost:5052/merce/:id', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(merce),
        });
        const data = await response.json();
        return data;
    }
);


const initialState = {
    merce: [],
    detailMerce: {},
   loading: false,
    error: false,
}

export const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {

        MerceDetail: (state, action) => {
            const find = state.data.find((merce) => merce.id === action.payload);
            state.detailMerce = find;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchMerceDetail.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchMerceDetail.fulfilled, (state, action) => {
            state.merceDetail= action.payload.merce;
            state.loading = false;
        });
        builder.addCase(fetchMerceDetail.rejected, (state, action) => {
           state.error = action.payload ;
           state.loading = false;

        });
    },


});

export const { MerceDetail } = editSlice.actions;
export default editSlice.reducer;
