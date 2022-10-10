<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>안녕 {{ $store.state.name }}</h4>
  <p>{{ $store.state.age }}</p>
  <button @click="$store.commit('changeAge', 10)">나이변경버튼</button>
  <button @click="changeName()">버튼</button>
  <!-- <button @click="$store.state.name = '박'">버튼</button> -->

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기 버튼</button>

  <ContainerPage
    :datas="datas"
    :step="step"
    :url="image"
    @write="newWrite = $event"
  />
  <button @click="morePost">더보기</button>

  <p>{{ name }}</p>
  <p>{{ age }} {{ likes }} {{ 작명 }}</p>
  <p>{{ now() }} {{ counter }} {{ now2 }}</p>
  <button @click="counter++">버튼</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerPage from "./components/ContainerPage.vue";
import instaData from "./assets/data";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      datas: instaData,
      count: 0,
      step: 0,
      image: "",
      newWrite: "",
      selectfilter: "",
      counter: 0,
    };
  },
  components: { ContainerPage },

  // 처음 실행할 때 간직한 데이터를 사용할 때 보여준다.
  // return 필수이다.
  computed: {
    now2() {
      return new Date();
    },
    name() {
      return this.$store.state.name;
    },
    ...mapState(["age", "likes"]),
    ...mapState({ 작명: "name" }),
  },
  // 실행할 때 마다 함수가 실행된다.
  // mutations
  methods: {
    ...mapMutations(["changeName", "changeAge"]),
    now() {
      return new Date();
    },
    morePost() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((post) => {
          this.datas.push(post.data);
          this.count++;
        });
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      this.image = url;
      this.step++;
    },
    publish() {
      var newPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.newWrite,
        filter: this.selectfilter,
      };
      this.datas.unshift(newPost);
      this.step = 0;
    },
  },
  mounted() {
    this.emitter.on("fire", (a) => {
      this.selectfilter = a;
    });
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
