<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${datas.postImage})` }"
      ></div>
      <span class="profile-name">{{ datas.name }}</span>
    </div>
    <div
      @dblclick="$store.commit('changeLikes')"
      class="post-body"
      :style="{ backgroundImage: `url(${datas.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ $store.state.likes }} Likes</p>
      <p>
        <strong>{{ datas.name }}</strong> {{ datas.content }}
      </p>
      <p class="date">{{ datas.date }}</p>
    </div>
  </div>
</template>

<script>
export default { props: { datas: Object } };
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
