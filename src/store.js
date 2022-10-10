import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    name: "kim",
    age: 20,
    likes: 30,
    likesState: false,
  },
  mutations: {
    changeName(state) {
      state.name = "park";
    },
    changeAge(state, payload) {
      state.age += payload;
    },
    changeLikes(state) {
      if (state.likesState === false) {
        state.likes++;
        state.likesState = true;
      } else {
        state.likes--;
        state.likesState = false;
      }
    },
  },
});

export default store;
