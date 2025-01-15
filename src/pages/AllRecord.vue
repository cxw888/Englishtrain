<template>
  <div>
    <div class="block-title">
      练习记录{{ num }}
    </div>
    <div
      v-for="item in practicedata"
      :key="item.id"
      class="section"
    >
      <div class="pc">
        <img src="../assets/cover.aa799c19.png">
      </div>
      <div class="practice-namec-line-clamp2">
        <div class="practice-name__status--text">
          <span class="practice-name__status">未完成</span>
          <div class="text">
            {{ item.title }}
          </div>
        </div>
        <div class="meta">
          <div class="itemtime">
            <div>练习时间:{{ item.times }}</div>
            <div class="time" />
          </div>
          <div
            class="still"
            @click="still(item)"
          >
            <span>继续练习</span>
            <i class="el-icon-arrow-righ" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'AllRecord',
  data() {
    return {
      practicedata: [],
    };
  },
  created() {
    this.allData();
  },
  methods: {
    async allData() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/0d2c7222-f9b3-4a74-b13c-cffc60920ff6');
        this.practicedata = response.data;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
    still(item) {
      this.$router.push({
        path: `/startpracticing/${item.id}`,
      });
    },
  },
};
</script>
<style lang="css" scoped>
.block-title {
  padding: 1.57em 0.71em 0 1.42em;
  height: 3.28em;
  font-size: 1.28em;
  color: white;
}
.section {
  padding: 1.28em 0.93em 1.07em 1.07em;
  margin: 1.07em 0.71em 0;
  height: 7.43em;
  background: rgba(2, 4, 10, 0.70196);
  display: flex;
  align-items: flex-start;
  gap: 0.71em;
}
img {
  width: 4.57em;
  height: 4.57em;
}
.section .practice-namec-line-clamp2 {
  flex: 1;
  display: flex;
  height: 5.6em;
  gap: 1.43em;
  flex-direction: column;
}
.section .practice-namec-line-clamp2 .practice-name__status--text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.36em;
  color: white;
  line-height: 1.5;
}
.section .practice-namec-line-clamp2 .practice-name__status--text span {
  height: 1.21em;
  font-size: 0.71em;
  border: 0.07142857em solid #fff;
  border-radius: 0.36em;
  padding: 0.07em;
  color: #fff;
  font-weight: 400;
}
.section .practice-namec-line-clamp2 .practice-name__status--text .text {
  font-size: 1.21em;
  font-weight: 600;
}
.section .practice-namec-line-clamp2 .meta {
  /* height: 8em; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.section .practice-namec-line-clamp2 .meta .itemtime {
  color: #999;
  display: flex;
  font-size: 0.86em;
  flex-direction: column;
  justify-content: space-around;
  /* gap: 0.51282051em; */
}
.section .practice-namec-line-clamp2 .meta .still span {
  text-decoration: none;
  color: #a86cff;
  font-weight: 600;
  font-size: 0.86em;
}
</style>
