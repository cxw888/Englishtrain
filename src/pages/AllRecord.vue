<template>
  <div>
    <div class="block-title">
      练习记录
      <HeaderBox></HeaderBox>
    </div>
    <div v-for="item in practicedata" :key="item.id" class="section">
      <div class="pc">
        <img src="../assets/cover.aa799c19.png">
      </div>
      <div class="practice-namec-line-clamp2">
        <div class="practice-name__status--text">
          <span class="practice-name__status">{{ item.result | getresult }}
          </span>
          <div class="text">
            {{ item.title }}
          </div>
        </div>
        <div class="meta">
          <div class="itemtime">
            <div>练习时间:{{ item.times | gettime }}</div>
            <div class="time" />
          </div>
          <div class="still" @click="still(item)">
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
import HeaderBox from '@/components/HeaderBox.vue';
export default {
  components: { HeaderBox },
  name: 'AllRecord',
  data() {
    return {
      practicedata: [],
    };
  },
  filters: {
    gettime(value) {
      // 字符转数字型
      let milliseconds = parseInt(value);
      const date = new Date(milliseconds);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}年${month}月${day}日${hours}时${minutes}分${seconds}秒`;
    },
    getresult(value) {
      if (value == -1) {
        return `已完成`
      } else {
        return `未完成`
      }
    }
  },
  created() {
    this.allData();
  },
  methods: {
    async allData() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/de87b949-6874-49f2-b5e9-2b5611ea80bd');
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
  padding: 1em;
  height: 3em;
  font-size: 1.28em;
  color: white;
  display: flex;
  justify-content: space-between;
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
}

.section .practice-namec-line-clamp2 .meta .still span {
  text-decoration: none;
  color: #a86cff;
  font-weight: 600;
  font-size: 0.86em;
}

/* .block-title .top {
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
} */
</style>
