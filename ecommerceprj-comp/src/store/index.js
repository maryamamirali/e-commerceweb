import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice'
import cartReducer from './cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, cartReducer)


const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store)


export {store, persistor}