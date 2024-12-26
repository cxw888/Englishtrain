<template>
  <div class="top">
    <div class="header">
      <div class="pic" />
    </div>
    <div class="names">
      陈晓雯
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderBox',
  props: ['username'],
};
</script>
<style lang="css" scoped>
.top {
  margin: 0 2.56410256vw;
  display: flex;
  justify-content: flex-start;
  height: 29.23076923vw;
  padding: 5.38461538vw 3.84615385vw 5.38461538vw 5.38461538vw;
}
.top .names {
  line-height: 18.46153846vw;
  text-indent: 1em;
  color: white;
  font-weight: 600;
  font-size: 5.12820513vw;
}
.top .header {
  width: 18.46153846vw;
  height: 18.46153846vw;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #e270ff, #5c67ff);
}
.top .header .pic {
  margin: 1vw;
  width: 16.41025641vw;
  height: 16.41025641vw;
  border-radius: 50%;
  background-image: url(../assets/avatar-default.png);
  background-size: cover;
}
</style>
