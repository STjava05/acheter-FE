
import { createSlice } from '@reduxjs/toolkit';





const initialState = {
    Data: [],
    loading: false,
    error: false,
    
}

const apiSlice = createSlice({

    name: 'api',
    initialState,
    reducers: {
        getData: (state) => {
            state.loading = true;
        },
    },
});

export default apiSlice.reducer
   




   




