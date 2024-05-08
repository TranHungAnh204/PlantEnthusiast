import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk('login/login', async (data) => {
    const response = await fetch(
        // 'http://localhost:7777/user/api/login',
        'http://172.16.114.146:7777/user/api/login',

        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
    );

    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
})

const initialState = {
    loginStatus: 'ide',
    userData: {}
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, (state) => {
            state.loginStatus = 'pending'
        })

        builder.addCase(login.fulfilled, (state, {payload}) => {
            state.loginStatus = 'succeeded';
            state.userData = payload.data;
        })

        builder.addCase(login.rejected, (state) => {
            state.loginStatus = 'failed'
        })
    }
})

export default loginSlice.reducer