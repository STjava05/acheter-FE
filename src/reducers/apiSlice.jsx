
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchAcquirenti = createAsyncThunk(
    'api/fetchApi',
    async () => {
        const response = await fetch('http://localhost:5052/acquirenti', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        const data = await response.json();
        return data;
    }
);


export const createAcquirenti = createAsyncThunk(
    'api/createAcquirenti',
    async (acquirenti) => {
        const response = await fetch('http://localhost:5052/acquirenti', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(acquirenti),
        });
        const data = await response.json();
        return data;
    }
);

export const updateAcquirenti = createAsyncThunk(
    'api/updateAcquirenti',
    async (acquirenti) => {
        const response = await fetch(`http://localhost:5052/acquirenti/${acquirenti.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({payload:acquirenti}),
        });
        const data = await response.json();
        return data;
    }
);

export const deleteAcquirenti = createAsyncThunk(
    'api/deleteAcquirenti',
    async (acquirenti) => {
        const response = await fetch(`http://localhost:5052/acquirenti/${acquirenti.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({payload:acquirenti}),
        });
        const data = await response.json();
        return data;
    }
);

export const fetchMerce = createAsyncThunk(
    'api/fetchApi',
    async (merce) => {
        const response = await fetch('http://localhost:5052/merce', {
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

export const createMerce = createAsyncThunk(
    'api/createMerce',
    async (merce) => {
        const response = await fetch('http://localhost:5052/merce', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(merce),
        });
        const data = await response.json();
        return data;
    }
);

export const updateMerce = createAsyncThunk(
    'api/updateMerce',
    async (merce) => {
        const response = await fetch(`http://localhost:5052/merce/${merce.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(merce),
        });
        const data = await response.json();
        return data;
    }
);

export const deleteMerce = createAsyncThunk(
    'api/deleteMerce',
    async (merce) => {
        const response = await fetch(`http://localhost:5052/merce/${merce.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(merce),
        });
        const data = await response.json();
        return data;
    }
);

export const fetchOrdine = createAsyncThunk(
    'api/fetchApi',
    async (ordine) => {
        const response = await fetch('http://localhost:5052/ordine', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ordine),
        });
        const data = await response.json();
        return data;
    }
);

export const createOrdine = createAsyncThunk(
    'api/createOrdine',
    async (ordine) => {
        const response = await fetch('http://localhost:5052/ordine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ordine),
        });
        const data = await response.json();
        return data;
    }
);

export const updateOrdine = createAsyncThunk(
    'api/updateOrdine',
    async (ordine) => {
        const response = await fetch(`http://localhost:5052/ordine/${ordine.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ordine),
        });
        const data = await response.json();
        return data;
    }
);

export const deleteOrdine = createAsyncThunk(
    'api/deleteOrdine',
    async (ordine) => {
        const response = await fetch(`http://localhost:5052/ordine/${ordine.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ordine),
        });
        const data = await response.json();
        return data;
    }
);

export const fetchCategoria = createAsyncThunk(
    'api/fetchApi',
    async (categoria) => {
        const response = await fetch('http://localhost:5052/categoria', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoria),
        });
        const data = await response.json();
        return data;
    }
);

export const createCategoria = createAsyncThunk(
    'api/createCategoria',
    async (categoria) => {
        const response = await fetch('http://localhost:5052/categoria', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoria),
        });
        const data = await response.json();
        return data;
    }
);

export const updateCategoria = createAsyncThunk(
    'api/updateCategoria',
    async (categoria) => {
        const response = await fetch(`http://localhost:5052/categoria/${categoria.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoria),
        });
        const data = await response.json();
        return data;
    }
);

export const deleteCategoria = createAsyncThunk(
    'api/deleteCategoria',
    async (categoria) => {
        const response = await fetch(`http://localhost:5052/categoria/${categoria.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoria),
        });
        const data = await response.json();
        return data;
    }
);



const initialState = {
    Data: [],
    apiArray: [],
    menu: "acquirenti",
    acquirenti: [],
    merce: [],
    ordine: [],
    categoria: [],
    loading: false,
    error: false,

}

const apiSlice = createSlice({

    name: 'api',
    initialState,
    reducers: {

        setAcquirenti: (state, action) => {
            
            state.acquirenti = action.payload;
        },
        setMerce: (state, action) => {
            state.merce = action.payload;
        },
        setOrdine: (state, action) => {
            state.ordine = action.payload;
        },
        setCategoria: (state, action) => {
            state.categoria = action.payload;
        },
        setMenu: (state, action) => {
            state.menu = action.payload;
        },

        setSearch: (state, action) => {
            const search = action.payload;
            state.apiArray = state.Data.filter((item) => {
                return item.codiceAcquirenti.toLowerCase().includes(search.toLowerCase()) ||
                    item.codiceProdotto.toLowerCase().includes(search.toLowerCase()) ||
                    item.codiceOrdine.toLowerCase().includes(search.toLowerCase()) ||
                    item.codiceCategoria.toLowerCase().includes(search.toLowerCase())
            });
        },
    },

    extraReducers: (builder) => {
        builder.addMatcher(
            (action) => action.type.endsWith('/fetchAcquirenti/pending') ||
                action.type.endsWith('/createAcquirenti/pending') ||
                action.type.endsWith('/updateAcquirenti/pending') ||
                action.type.endsWith('/deleteAcquirenti/pending') ||

                action.type.endsWith('/fetchMerce/pending') ||
                action.type.endsWith('/createMerce/pending') ||
                action.type.endsWith('/updateMerce/pending') ||
                action.type.endsWith('/deleteMerce/pending') ||

                action.type.endsWith('/fetchOrdine/pending') ||
                action.type.endsWith('/createOrdine/pending') ||
                action.type.endsWith('/updateOrdine/pending') ||
                action.type.endsWith('/deleteOrdine/pending') ||

                action.type.endsWith('/fetchCategoria/pending') ||
                action.type.endsWith('/createCategoria/pending') ||
                action.type.endsWith('/updateCategoria/pending') ||
                action.type.endsWith('/deleteCategoria/pending'),

            (state) => {
                state.loading = true;
                state.error = false;
            }
        );
        builder.addMatcher(
            (action) => action.type.endsWith('/fetchAcquirenti/fulfilled') ||
                action.type.endsWith('/createAcquirenti/fulfilled') ||
                action.type.endsWith('/updateAcquirenti/fulfilled') ||
                action.type.endsWith('/deleteAcquirenti/fulfilled') ||

                action.type.endsWith('/fetchMerce/fulfilled') ||
                action.type.endsWith('/createMerce/fulfilled') ||
                action.type.endsWith('/updateMerce/fulfilled') ||
                action.type.endsWith('/deleteMerce/fulfilled') ||

                action.type.endsWith('/fetchOrdine/fulfilled') ||
                action.type.endsWith('/createOrdine/fulfilled') ||
                action.type.endsWith('/updateOrdine/fulfilled') ||
                action.type.endsWith('/deleteOrdine/fulfilled') ||

                action.type.endsWith('/fetchCategoria/fulfilled') ||
                action.type.endsWith('/createCategoria/fulfilled') ||
                action.type.endsWith('/updateCategoria/fulfilled') ||
                action.type.endsWith('/deleteCategoria/fulfilled'),
            (state, action) => {
                state.loading = false;
                state.error = false;
                state.Data = action.payload;
            }
        );
        builder.addMatcher(
            (action) => action.type.endsWith('/fetchAcquirenti/rejected') ||
                action.type.endsWith('/createAcquirenti/rejected') ||
                action.type.endsWith('/updateAcquirenti/rejected') ||
                action.type.endsWith('/deleteAcquirenti/rejected') ||

                action.type.endsWith('/fetchMerce/rejected') ||
                action.type.endsWith('/createMerce/rejected') ||
                action.type.endsWith('/updateMerce/rejected') ||
                action.type.endsWith('/deleteMerce/rejected') ||

                action.type.endsWith('/fetchOrdine/rejected') ||
                action.type.endsWith('/createOrdine/rejected') ||
                action.type.endsWith('/updateOrdine/rejected') ||
                action.type.endsWith('/deleteOrdine/rejected') ||

                action.type.endsWith('/fetchCategoria/rejected') ||
                action.type.endsWith('/createCategoria/rejected') ||
                action.type.endsWith('/updateCategoria/rejected') ||
                action.type.endsWith('/deleteCategoria/rejected'),

            (state) => {
                state.loading = false;
                state.error = true;
            }
        );


    }

});

export const { setAcquirenti, setMerce, setOrdine, setCategoria, setSearch,setMenu } = apiSlice.actions;

export default apiSlice.reducer;















