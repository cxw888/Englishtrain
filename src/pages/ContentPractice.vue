<template>
  <div>
    <div class="tops">
      <div class="tag">
        场景任务
      </div>
      <div class="title">
        {{ item.title }}
      </div>
      <div class="content">
        {{ item.desc }}
      </div>
    </div>
    <div class="two">
      <div class="tag">
        陪练对象
      </div>
      <div class="contents">
        <div class="pc" />
        <div class="right">
          <div class="titles">
            <span class="title">{{ item.manager }}</span>
            <span class="women">{{ item.gender | getgender }}</span>
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="three">
      <div class="tag">
        我的角色
      </div>
      <div class="contents">
        <img class="pc2" :src="news.url" />
        <span class="title">{{ item.name }}</span>
      </div>
    </div>
    <!-- 组件复用。 -->
    <RecordColumn :datas="rankingdata">
      <!-- 插槽 -->
      <template slot="center">
        <div class="get">
          <div class="tag">
            练习记录
          </div>
          <i class="el-icon-arrow-righ" />
        </div>
      </template>
    </RecordColumn>
    <div class="bottom" @click="ask(item)">
      <i class="el-icon-microphone" />点击开始练习
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios';
import RecordColumn from '../components/RecordColumn.vue';

export default {
  name: 'ContentPractice',
  components: { RecordColumn },
  props: ['id'],
  data() {
    return {
      item: null,
      loading: true,
      error: null,
      rankingdata: [],
      clickedDate: '',
    };
  },
  filters: {
    getgender(value) {
      if (value == 0) {
        return `女性`
      } else {
        return `男性`
      }
    }
  },
  computed: {
    ...mapState(['news']),
  },
  created() {
    this.rankings();
    this.fetchItemDetails();
  },
  methods: {
    async rankings() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/f52f042f-c0c6-4d37-9202-119813bd7c05');
        this.rankingdata = response.data;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
    async fetchItemDetails() {
      try {
        const response = await axios.get(`https://run.mocky.io/v3/${this.id}`);
        this.item = response.data;
      } catch (err) {
        this.error = '加载项目详情时出错。';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    ask(item) {
      const today = new Date();
      const nowday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      this.clickedDate = `You clicked on: ${nowday}`;
      const objj = {
        ...item,
        times: nowday,
      };
      this.$store.commit('JIA', objj);
      this.$router.push({
        path: `/startpracticing/${this.id}`,
      });
    },
  },
};
</script>
<style lang="css" scoped>
.get {
  display: flex;
  height: 2.2em;
  justify-content: space-between;
}

.tops {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0.71em;
  padding: 0.71em;
  backdrop-filter: blur(4px);
  border-radius: 1.07em;
}

.tag {
  width: 4em;
  height: 1.43em;
  font-size: 0.86em;
  line-height: 1.43em;
  color: white;
  text-align: center;
  border-radius: 0.28em;
  background: linear-gradient(237deg, #5c67ff 17.4%, #e270ff 87.02%), #707aff;
  margin-bottom: 1.43em;
}

.title {
  font-size: 1.28em;
  color: white;
  margin: 1.43em 0;
  margin-right: 0.71em;
}

.content {
  color: #fff;
  font-size: 1em;
  opacity: 0.7;
  margin-top: 1.07em;
}

.two {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0.71em;
  padding: 0.71em;
  backdrop-filter: blur(4px);
  border-radius: 1.07em;
}

.two .pc {
  background: url(../assets/cover.aa799c19.png);
  width: 3.43em;
  height: 3.43em;
  background-size: cover;
  border-radius: 14.28em;
  background-size: 100% 100%;
  margin-right: 0.71em;
}

.two .right {
  width: 20em;
}

.two .right .titles .women {
  font-size: 0.86em;
}

.contents {
  width: 24.14em;
  display: flex;
  justify-content: start;
}

.three {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0.71em;
  padding: 0.71em;
  backdrop-filter: blur(4px);
  height: 8.71em;
  border-radius: 1.07em;
}

.three .pc2 {
  width: 3.43em;
  height: 3.43em;
  background-size: cover;
  border-radius: 14.28em;
  background-size: 100% 100%;
  margin-right: 0.71em;
}

.three .titles {
  margin-bottom: 1.43em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
