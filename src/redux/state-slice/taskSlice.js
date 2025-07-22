import {createSlice} from '@reduxjs/toolkit';

export  const taskSlice = createSlice({
      name: 'tasks',
        initialState: {
            New: [],
            Complete: [],
            Cancel: [],
            InProgress: [],
        },
    reducers:{
      setNewTasks: (state, action) => {
          state.New = action.payload;
      },
        setCompleteTasks: (state, action) => {
            state.Complete = action.payload;
        },
        setCancelTasks: (state, action) => {
            state.Cancel = action.payload;
        },
        setInProgressTasks: (state, action) => {
            state.InProgress = action.payload;
        },
    }
})

export const {setNewTasks,setCompleteTasks,setCancelTasks,setInProgressTasks}= taskSlice.actions;
export default taskSlice.reducer;