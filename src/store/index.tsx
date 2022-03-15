import { configureStore,createSlice } from '@reduxjs/toolkit';

const getTokenId = () => {
    if (typeof window !== "undefined")
    {
        const tokenData = localStorage.getItem('token');
        const initialToken = tokenData ? tokenData : null;
        return initialToken;
    }
    return null;
} 

const isLoggedIn = () => {
    if (typeof window !== "undefined")
    {
        const tokenData = localStorage.getItem('token');
        const isLog = tokenData ? true : false;
        return isLog;
    }
    return false;
}

const authInitialState = {
    tokenId: getTokenId(),
    isLogged: isLoggedIn()
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state , action) {
            state.tokenId = action.payload;
            localStorage.setItem('token', action.payload);
            state.isLogged = true;
        },
        logout(state) {
            state.tokenId = null;
            localStorage.removeItem('token');
            state.isLogged = false;
        }
    }
});

export const authSliceActions = authSlice.actions;

const store = configureStore({
    reducer: authSlice.reducer,
});

export default store;
