import { configureStore } from '@reduxjs/toolkit'
import { baseAPi } from './baseApi/BaseApi'
// ...

export const store = configureStore({
  reducer: {
    [baseAPi.reducerPath]: baseAPi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch