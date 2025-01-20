<template>
  <div class="top">
    <div class="header">
      <img class="pic" :src="news.url" />
    </div>
    <div class="names">
      {{ news.name }}
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderBox',
  computed: {
    ...mapState(['news']),
  }
};
</script>
<style lang="css" scoped>
.block-title .top {
  display: flex;
  justify-content: flex-start;
  padding: 0;
  height: 2.5em;
}

.block-title .top .header .pic {
  margin: 0.2em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-size: cover;
}

.block-title .top .header {
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #e270ff, #5c67ff);
}

.block-title .top .names {
  color: white;
  font-size: 1em;
  font-weight: 400;
  line-height: 2.5em;
}
</style>
