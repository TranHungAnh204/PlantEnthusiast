import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerAccount = createAsyncThunk('register/register', async (data) => {
    const response = await fetch(
        'http://172.16.114.146:7777/user/api/register',
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
    registerStatus: 'ide',
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerAccount.pending, (state) => {
            state.registerStatus = 'pending'
        })

        builder.addCase(registerAccount.fulfilled, (state) => {
            state.registerStatus = 'succeeded'
        })

        builder.addCase(registerAccount.rejected, (state) => {
            state.registerStatus = 'failed'
        })
    }
})

export default registerSlice.reducer