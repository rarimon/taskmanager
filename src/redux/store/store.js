import {configureStore} from '@reduxjs/toolkit';

import settingReducer from '../state-slice/settingSlice';
import taskReducer from '../state-slice/taskSlice';

export default configureStore({

    reducer: {
      setting: settingReducer,
        tasks: taskReducer,
    }

})