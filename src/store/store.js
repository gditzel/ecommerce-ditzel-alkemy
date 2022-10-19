import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./Reducers/rootReducer";

const store = configureStore({
    reducer: rootReducer
})

store.subscribe(() => console.log(store));

export default store;
