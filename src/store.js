import axios from "axios";
import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    name: "kim",
    age: 20,
    likes: 30,
    likesState: false,
    more: {},
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
    setMore(state, payload) {
      state.more = payload;
    },
  },
  actions: {
    getData(context) {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((a) => {
          context.commit("setMore", a.data);
        });
    },
  },
});

export default store;
