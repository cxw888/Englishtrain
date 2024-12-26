<template>
  <div class="practice-summary">
    <!-- 组件的多次复用！！！ 不同的样式可以动态传过来  -->
    <div :class="['navigationbar', navigationBarClass]">
      <div class="contet">
        <slot name="center" />
        <div class="content">
          <div
            v-for="item in datas"
            :key="item.id"
            class="item"
          >
            <div class="number">
              {{ item.grade }}
            </div>
            <div class="text">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['datas', 'customClass'],
  computed: {
    navigationBarClass() {
      return this.customClass;
    },
  },
};
</script>
<style lang="css">
.practice-summary {
  margin-right: 2.56410256vw;
  margin-left: 2.56410256vw;
  height: 30vw;
}
.practice-summary .navigationbar {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 2.56410256vw;
  padding: 0.5vw;
}
.practice-summary .navigationbar .contet {
  padding: 2vw 1vw 2vw 1vw;
  height: 29vw;
  background-color: #0d0f24;
  border-radius: 2.56410256vw;
}
.practice-summary .navigationbar .contet .tge {
  margin: 0 2.56410256vw 0;
  display: flex;
  height: 8.25641026vw;
  justify-content: space-between;
}
.practice-summary .navigationbar .contet .tge .leftt {
  color: white;
  font-size: 4.35897436vw;
  line-height: 10.25641026vw;
  text-decoration: none;
}
.practice-summary .navigationbar .contet .tge .rightt {
  color: white;
  font-size: 3.33333333vw;
  line-height: 10.25641026vw;
  text-decoration: none;
}
.practice-summary .navigationbar .contet .content {
  margin: 2.56410256vw;
  display: flex;
}
.practice-summary .navigationbar .contet .content .item {
  /* width: 17.66666667vw; */
  flex: 1;
  margin: 0;
  height: 12.82051282vw;
  text-align: center;
  position: relative;
  /* 近似于1/3的100% */
}
.practice-summary .navigationbar .contet .content .item::after {
  content: "";
  /* 不需要内容，因为我们只想要线条 */
  position: absolute;
  /* 绝对定位以控制线条的位置 */
  top: 50%;
  /* 将线条垂直居中 */
  right: 0;
  /* 将线条放置在盒子右侧 */
  transform: translateY(-50%);
  /* 垂直方向上的微调，以确保线条完全居中 */
  border-right: 1px solid gray;
  /* 创建线条，颜色为灰色，宽度为1px */
  height: 50%;
  /* 如果希望线条贯穿整个盒子高度 */
  /* 或者可以设置一个具体的高度值 */
}
.practice-summary .navigationbar .contet .content .item .number {
  margin-bottom: 2.56410256vw;
  color: white;
  font-weight: 600;
  font-size: 5.12820513vw;
}
.practice-summary .navigationbar .contet .content .item .text {
  font-size: 3vw;
}
</style>
