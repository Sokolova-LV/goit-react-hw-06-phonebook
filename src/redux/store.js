import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./slice";
import { filterReducer } from "./slice";

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

export const persistContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistContactsReducer,
        filter: filterReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});

export const persistor = persistStore(store);