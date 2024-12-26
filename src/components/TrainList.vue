<template>
  <div
    class="section"
    @click="scene(item)"
  >
    <img
      src="../assets/cover.aa799c19.png"
      alt=""
    >
    <div class="texts">
      <h3>{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
  methods: {
    scene(item) {
      this.$router.push({
        path: `/contentpractice/${item.id}`,
      });
    },
  },
};
</script>
<style lang="css" scoped>
.section {
  margin: 3.84615385vw 2.56410256vw 0;
  background-color: rgba(2, 4, 10, 0.70196);
  display: flex;
  font-size: 3.84615385vw;
  border-radius: 2.56410256vw;
  padding: 4.61538462vw 3.84615385vw 3.84615385vw;
  justify-content: space-between;
  text-decoration: none;
  color: #666;
}
.section img {
  width: 25.64102564vw;
  height: 25.64102564vw;
}
.section .texts {
  margin-left: 2.48717949vw;
}
.section .texts h3 {
  font-size: 4vw;
  color: white;
  margin: 0;
}
</style>
