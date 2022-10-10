<template>
  <div style="padding: 10px">
    <div style="padding: 10px">
      <h4>팔로워</h4>
      <input placeholder="?" @input="search($event.target.value)" />
      <div class="post-header" v-for="(a, i) in follower" :key="i">
        <div class="profile" style="`background-image: url(${a.image}) `"></div>
        <span class="profile-name">{{ a.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, toRefs, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "MyPage",

  // composition API
  setup(props) {
    let follower = ref([]);
    // let test = reactive({ name: "kim" });

    function search(search) {
      let newFollower = follower.value.filter((a) => {
        return a.name.indexOf(search) != -1;
      });

      follower.value = [...newFollower];
    }

    // props를 가져다 쓰는 방법
    let { one } = toRefs(props);
    console.log(one.value);

    // watch 사용 watch(워치하고싶은 데이터, 실행함수)
    watch(one, () => {});

    // computed
    let result = computed(() => {
      return follower.value.length;
    });
    console.log(result.value);

    // vuex
    let store = useStore();
    console.log(store.state.name);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
      });
    });

    return { follower, search };
  },
  data() {},
};
</script>

<style scoped></style>
