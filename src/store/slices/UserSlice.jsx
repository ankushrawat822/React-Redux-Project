import { createSlice  } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name : 'users',
  initialState : [],
  reducers : {
     addUser(state , action){},
     removeUser(state , action){},
    deleteUser(state , action){},
  },
})

export default usersSlice.reducer;