import {configureStore} from '@reduxjs/toolkit';

import settingReducer from '../state-slice/settingSlice';
import taskReducer from '../state-slice/taskSlice';
import summaryReducer from '../state-slice/summarySlice';

export default configureStore({

    reducer: {
      setting: settingReducer,
        tasks: taskReducer,
        summary:summaryReducer,
    }

})