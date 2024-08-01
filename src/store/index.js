import { createSlice, configureStore } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { username: "홍길동", email: "a@a.a" },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.username;
    },
    setEmail: (state, action) => {
      state.email = action.email;
    },
  },
});

const counterSlice = createSlice({
  //작은 스토어
  name: "counterSlice", // 이름
  initialState: { count: 0 }, //초기값
  reducers: {
    up: (state, action) => {
      //   state.count += action.step;
      state.count += action.payload;
    },
    down: (state, action) => {
      //   state.count -= action.step;
      state.count -= action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    login: loginSlice.reducer,
  },
});

export { counterSlice, store, loginSlice };
