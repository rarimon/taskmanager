import {configureStore} from '@reduxjs/toolkit';

import settingReducer from '../state-slice/settingSlice';

export default configureStore({

    reducer: {
      setting: settingReducer,
    }

})