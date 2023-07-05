import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import baseCurrenciesReduser from '@/features/baseCurrencies/baseCurrenciesSlice';
import profileDataReduser from '@/features/profileData/profileDataSlice';
import assetsSliceReduser from '@/features/assets/assetsSlice';

export const store = configureStore({
  reducer: {
    baseCurrencies: baseCurrenciesReduser,
    profileData: profileDataReduser,
    assets: assetsSliceReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
