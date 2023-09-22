
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const initialState = {
    Data: [],
    token: localStorage.getItem('token') || null,
    apiArray: [],
    menu: "acquirenti",
    acquirenti: [],
    merce: [],
    totalPages: 0,
    totalProdPages: 0,
    ordine: [],
    producteur: [],
    cart: [],
    search: '',
    loading: false,
    error: false,

}

export const fetchAcquirenti = createAsyncThunk(
    'api/fetchApi',
    async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/acquirenti`, {
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
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/acquirenti/create`, { // `http://localhost:5052/acquirenti/create
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
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/acquirenti/edit/${acquirenti.id}`, {
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
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/acquirenti/deleteOne/${acquirenti.id}`, { // `http://localhost:5052/acquirenti/deleteOne/${acquirenti.id
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
    async (page) => {
        try {

            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/merce?page=${page}`, { // `http://localhost:5052/merce

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            });

            const data = await response.json();

            return data;

        } catch (error) {
            console.error(error);
        }
    }
);



export const createMerce = createAsyncThunk(
    'api/createMerce',
    async (merce) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/merce/create`, { // `http://localhost:5052/merce/create
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(merce),
            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta API');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
);


export const updateMerce = createAsyncThunk(
    'api/updateMerce',
    async (merce, id) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/merce/edit/${id}`, { // `http://localhost:5052/merce/edit/${id
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
    async (merceId) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/merce/deleteOne/${merceId}`, { // `http://localhost:5052/merce/deleteOne/${id
            method: 'DELETE',

        });
        const data = await response.json();
        return data;

    }
);

export const fetchOrdine = createAsyncThunk(
    'api/fetchApi',
    async (ordine) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/ordine`, { // `http://localhost:5052/ordine
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
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/ordine/create`, { // `http://localhost:5052/ordine/create
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
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/ordine/edit/${ordine.id}`, { // `http://localhost:5052/ordine/edit/${ordine.id
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
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/ordine/deleteOne/${ordine.id}`, { // `http://localhost:5052/ordine/deleteOne/${ordine.id
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

// 

export const fetchProducteurPage = createAsyncThunk(
    'api/fetchProducteur',
    async (page) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/producteur?page=${page} `, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(page),
        });
        const data = await response.json();
        return data;
    }
);


export const createProducteur = createAsyncThunk(
    'api/createProducteur',
    async (producteur) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/producteur/create`, { // `http://localhost:5052/producteur/create
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producteur),
        });
        const data = await response.json();
        return data;
    }
);

export const updateProducteur = createAsyncThunk(
    'api/updateProducteur',
    async (producteur) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/producteur/edit/${producteur.id}`, { // `http://localhost:5052/producteur/edit/${producteur.id
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producteur),
        });
        const data = await response.json();
        return data;
    }
);


export const deleteProducteur = createAsyncThunk(
    'api/deleteProducteur',
    async (producteur) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/producteur/deleteOne/${producteur.id}`, { // `http://localhost:5052/producteur/deleteOne/${producteur.id
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producteur),
        });
        const data = await response.json();
        return data;
    }
);



export const PostLogin = createAsyncThunk(

    'api/PostLogin',
    async (login) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/login`, { // `http://localhost:5052/login
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
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
        setProducteur: (state, action) => {
            state.producteur = action.payload;
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
            console.log(state.Data, state.apiArray)
            state.apiArray = state.Data.filter((item) => {
                return item.nome.toLowerCase().includes(action.payload.toLowerCase())
            });

            console.log(state.apiArray);

        },
    },

    extraReducers: (builder) => {
        // fetchMerce
        builder.addCase(fetchMerce.pending, (state) => {

            state.loading = true;
            state.requestStatus = 'pending';
        }
        );
        builder.addCase(fetchMerce.fulfilled, (state, action) => {

            state.apiArray = action.payload.merce;
            state.Data = action.payload.merce;
            console.log(state.Data, state.apiArray)
            state.totalPages = action.payload.totalPages;
            state.requestStatus = 'fulfilled';
            state.loading = false;
        }
        );
        builder.addCase(fetchMerce.rejected, (state) => {
            console.log("ciao")
            state.loading = false;
            state.error = true;
            state.requestStatus = 'rejected';
        }
        );
        // createMerce
        builder.addCase(createMerce.pending, (state) => {
            state.loading = true;
        }
        );
        builder.addCase(createMerce.fulfilled, (state, action) => {
            console.log(action.payload);
            state.Data = action.payload.merce;
            state.apiArray = action.payload.merce;
            state.loading = false;

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
            const updatedMerce = action.payload.merce;

            if (updatedMerce && updatedMerce.id) {
                const index = state.apiArray.findIndex(item => item.id === updatedMerce.id);

                if (index !== -1) {
                    // Sostituisci l'articolo esistente con il nuovo oggetto aggiornato
                    state.apiArray[index] = updatedMerce;
                }
            }
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
            state.Data = action.payload.merce;
            state.apiArray = state.apiArray.filter((item) => item.id !== action.payload.id);

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





        builder.addCase(fetchProducteurPage.pending, (state) => {
            state.loading = true;
            state.requestStatus = 'pending';
        }
        );
        builder.addCase(fetchProducteurPage.fulfilled, (state, action) => {
            state.loading = false;

            state.producteur = action.payload.producteur;
            state.totalProdPages = action.payload.totalProdPages;
            state.requestStatus = 'fulfilled';
        }
        );
        builder.addCase(fetchProducteurPage.rejected, (state) => {
            state.loading = false;
            state.error = true;
            state.requestStatus = 'rejected';
        }
        );

    }



});

export const { setAcquirenti, setMerce, setOrdine, setProducteur, setSearch, setMenu, addToCart, removeToCart, } = apiSlice.actions;

export default apiSlice.reducer;















