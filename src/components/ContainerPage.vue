<template>
  <div>
    <PostPage :datas="data" v-for="(data, i) in datas" :key="i" />
  </div>
</template>

<script>
import PostPage from "./PostPage.vue";
export default {
  components: { PostPage },
  props: { datas: Array },
  name: "ContainerPage",
};
</script>

<style></style>
