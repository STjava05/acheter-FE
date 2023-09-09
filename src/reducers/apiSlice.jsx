
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';




const initialState = {
    Data: [],
    token: localStorage.getItem('token') || null,
    apiArray: [],
    menu: "acquirenti",
    acquirenti: [],
    merce: [],
    ordine: [],
    categoria: [],
    cart: [], 
    search: '',  
    loading: false,
    error: false,

}

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
        const response = await fetch('http://localhost:5052/acquirenti/create', {
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
        const response = await fetch('http://localhost:5052/acquirenti/edit/:id', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ payload: acquirenti }),
        });
        const data = await response.json();
        return data;
    }
);

export const deleteAcquirenti = createAsyncThunk(
    'api/deleteAcquirenti',
    async (acquirenti) => {
        const response = await fetch('http://localhost:5052/acquirenti/deleteOne/:id', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ payload: acquirenti }),
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
        const response = await fetch('http://localhost:5052/merce/create', {
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
        const response = await fetch('http://localhost:5052/merce/edit/:id', {
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
        const response = await fetch('http://localhost:5052/deleteOne/:id', {
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
        const response = await fetch('http://localhost:5052/ordine/create', {
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
        const response = await fetch('http://localhost:5052/ordine/edit/:id', {
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
        const response = await fetch('http://localhost:5052/ordine/deleteOne/:id', {
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
        const response = await fetch('http://localhost:5052/categoria/create', {
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
        const response = await fetch('http://localhost:5052/categoria/edit/:id', {
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
        const response = await fetch('http://localhost:5052/categoria/deleteOne/:id', {
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


export const PostLogin = createAsyncThunk(
    'api/PostLogin',
    async (login) => {
        const response = await fetch('http://localhost:5052/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${login.token}`
            },
            body: JSON.stringify(login),
        });
        const data = await response.json();
        return data;
    }
);





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
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeToCart: (state, action) => {
            const indexToRemove = state.cart.findIndex(item => item.id === action.payload);
            if (indexToRemove !== -1) {
                state.cart.splice(indexToRemove, 1); // Rimuovi l'articolo dall'array
            }
        },
        

        setSearch: (state, action) => {
            state.search = action.payload;
            state.apiArray = state.Data.filter((item) => {
                return item.nome.toLowerCase().includes(action.payload.toLowerCase())
            })


        },
    },

    extraReducers: (builder) => {
        // fetchMerce
        builder.addCase(fetchMerce.pending, (state) => {
            state.loading = true;
        }
        );
        builder.addCase(fetchMerce.fulfilled, (state, action) => {
            state.loading = false;
            state.Data = action.payload;
            state.apiArray = action.payload;
        }
        );
        builder.addCase(fetchMerce.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }
        );
        // createMerce
        builder.addCase(createMerce.pending, (state) => {
            state.loading = true;
        }
        );
        builder.addCase(createMerce.fulfilled, (state, action) => {
            state.loading = false;
            state.Data = action.payload;
            state.apiArray = action.payload;
        }
        );
        builder.addCase(createMerce.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }
        );
        // updateMerce
        builder.addCase(updateMerce.pending, (state) => {
            state.loading = true;
        }
        );
        builder.addCase(updateMerce.fulfilled, (state, action) => {
            state.loading = false;
            state.Data = action.payload;
            state.apiArray = action.payload;
        }
        );
        builder.addCase(updateMerce.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }
        );
        // deleteMerce
        builder.addCase(deleteMerce.pending, (state) => {
            state.loading = true;
        }
        );
        builder.addCase(deleteMerce.fulfilled, (state, action) => {
            state.loading = false;
            state.Data = action.payload;
            state.apiArray = action.payload;
        }
        );
        builder.addCase(deleteMerce.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }
        );
        // postLogin
        builder.addCase(PostLogin.pending, (state) => {
            state.loading = true;
        }
        );
        builder.addCase(PostLogin.fulfilled, (state, action) => {
            if (action.payload.token) {
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            }
            state.loading = false;

        }
        );
        builder.addCase(PostLogin.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }
        );

    }
});

export const { setAcquirenti, setMerce, setOrdine, setCategoria, setSearch, setMenu,addToCart,removeToCart } = apiSlice.actions;

export default apiSlice.reducer;















