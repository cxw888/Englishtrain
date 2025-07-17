<template>
  <div class="practice-summary">
    <!-- 组件的多次复用！！！ 不同的样式可以动态传过来  -->
    <div :class="['navigationbar', customClass]">
      <div class="contet">
        <!-- 插槽！！！ -->
        <slot name="center" />
        <div class="content">
          <div v-for="item in datas" :key="item.id" class="item">
            <!-- 如果type=time 则渲染第一个否则渲染v-else -->
            <!-- <item.result的值应用在一个名字gettime的过滤器。 过滤器将数据格式化成想要的形式 -->
            <div class="number" v-if="item.type === 'time'">
              <!-- (main.js里) 定义一个全局过滤器。这个过滤器可以在任何组件的模板中使用 -->
              {{ item.result | gettime }}
            </div>
            <div class="number" v-else>
              {{ item.result }}
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
};
</script>
<style lang="css">
.practice-summary {
  margin-right: 0.71em;
  margin-left: 0.71em;
  height: 8.36em;
}

.practice-summary .navigationbar {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 0.71em;
  padding: 0.14em;
}

.practice-summary .navigationbar .contet {
  padding: 0.55em 0.27em 0.55em 0.27em;
  height: 8em;
  background-color: #0d0f24;
  border-radius: 0.71em;
}

.practice-summary .navigationbar .contet .tge {
  margin: 0 0.71em 0;
  display: flex;
  height: 2.86em;
  justify-content: space-between;
}

.practice-summary .navigationbar .contet .tge .leftt {
  color: white;
  font-size: 1.4em;
  line-height: 1.8em;
  text-decoration: none;
}

.practice-summary .navigationbar .contet .tge .rightt {
  color: white;
  font-size: 0.92em;
  line-height: 2.86em;
  text-decoration: none;
}

.practice-summary .navigationbar .contet .content {
  margin: 0.71em;
  display: flex;
}

.practice-summary .navigationbar .contet .content .item {
  /* width: 17.66666667em; */
  flex: 1;
  margin: 0;
  height: 3.57em;
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
  margin-bottom: 0.2em;
  color: white;
  font-weight: 600;
  font-size: 1.43em;
}

.practice-summary .navigationbar .contet .content .item .text {
  font-size: 0.9em;
}
</style>
