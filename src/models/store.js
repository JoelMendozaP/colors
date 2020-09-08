import { configureStore } from '@reduxjs/toolkit'
import ThemeModel from 'models/theme';

export default configureStore({
    reducer: {
        theme: ThemeModel
    }
});