<template>
  <div class="section" @click="scene(item)">
    <img src="../assets/cover.aa799c19.png" alt="">
    <div class="texts">
      <h3>{{ item.title }}</h3>
      <p class="clamp-text">{{ item.desc }}</p>
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
/* 标签中的文字只显示两行，多余的部分用省略号表示 */
.clamp-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* 限制显示的行数为2 */
  -webkit-line-clamp: 2;
  /* 超过部分隐藏 */
  overflow: hidden;
  /* 显示省略号 */
  text-overflow: ellipsis;
  line-height: 1.5em;
  /* 根据你的字体大小调整行高 */
  max-height: 3em;
}

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
