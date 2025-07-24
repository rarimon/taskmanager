import {configureStore} from '@reduxjs/toolkit';

import settingReducer from '../state-slice/settingSlice';
import taskReducer from '../state-slice/taskSlice';
import summaryReducer from '../state-slice/summarySlice';
import userReducer from '../state-slice/userSlice';

export default configureStore({

    reducer: {
      setting: settingReducer,
        tasks: taskReducer,
        summary:summaryReducer,
        userProfile: userReducer,
    }

})