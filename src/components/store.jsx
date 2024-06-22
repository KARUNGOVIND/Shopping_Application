import { createSlice, configureStore } from '@reduxjs/toolkit'
import counterSlice from '../reducres/CounterSlice'
import cartSlice from '../reducres/cartSlice'

export const store = configureStore(
    {
        reducer: {
            counter: counterSlice,
            cart:cartSlice
        },

    })