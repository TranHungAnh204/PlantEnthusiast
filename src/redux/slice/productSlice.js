import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const getProductsHome = createAsyncThunk('product/get-home-products', async () => {
    const response = await fetch(
        'http://172.16.114.146:7777/product/api/products-home'
    );

    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
})

export const getDetailProduct = createAsyncThunk('product/get-detail', async (productId) => {
    const response = await fetch(
        'http://172.16.114.146:7777/product/api/product/' + productId
    );

    console.log(123, response)

    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        homeProducts: [],
        productDetail: {}
    },
    reducers: () => {},
    extraReducers: builder => {
        builder.addCase(getProductsHome.fulfilled, (state, {payload}) => {
            state.homeProducts = payload.data;
        })

        builder.addCase(getDetailProduct.fulfilled, (state, {payload}) => {
            state.productDetail = payload.data
        })
    }

})

export default productSlice.reducer;