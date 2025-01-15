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
  margin: 1.07em 0.71em 0;
  background-color: rgba(2, 4, 10, 0.70196);
  display: flex;
  font-size: 1.07em;
  border-radius: 0.71em;
  padding: 1.28em 1.07em 1.07em;
  justify-content: space-between;
  text-decoration: none;
}
.section img {
  width: 7.14em;
  height: 7.14em;
}
.section .texts {
  margin-left: 0.69em;
}
.section .texts h3 {
  font-size: 1.11em;
  color: white;
  margin: 0;
}
</style>
