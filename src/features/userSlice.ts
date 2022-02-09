import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  uid?: string;
  email?: string | null;
  displayName?: string | null;
  // password: string;
}

interface userState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: userState = {
  user: null,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    logout(state) {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    }
  }

})

/* puedo exportar selectors desde aqui o usarlos en linea asi useSelector(state => state.user) */
export const selectUser = (state: userState) => state.user;

export const { login,logout } = userSlice.actions;
export default userSlice.reducer;