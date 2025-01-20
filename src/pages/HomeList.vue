<template>
  <div>
    <HeaderBox />
    <RecordColumn :datas="totaldata" custom-class="gradient-background">
      <template slot="center">
        <div class="tge">
          <div class="leftt">
            <i class="el-icon-s-fold" />
            <span>成长记录</span>
          </div>
          <router-link class="rightt" to="/allrecord">
            <span>所有练习记录</span>
            <i class="el-icon-edit" />
          </router-link>
        </div>
      </template>
    </RecordColumn>
    <div class="title">
      选择陪练场景
    </div>
    <TrainList v-for="item in practice" :key="item.id" :item="item" />
    <div class="bottoms">
      已显示全部内容
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import HeaderBox from '../components/HeaderBox.vue';
import RecordColumn from '../components/RecordColumn.vue';
import TrainList from '../components/TrainList.vue';

export default {
  name: 'HomeList',
  components: { HeaderBox, RecordColumn, TrainList },
  data() {
    return {
      practice: [],
      totaldata: [],
    };
  },
  created() {
    this.fetchApiData();
    this.fetchtotaldata();
    this.getname();
  },
  methods: {
    async fetchApiData() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/fce3e33b-db8b-4851-bb43-d3c4a3accfbc');
        this.practice = response.data;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
    async fetchtotaldata() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/b6a3e548-ca17-495a-8c2d-47a0d8b659da');
        this.totaldata = response.data;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
    async getname() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/9d6219e3-5d38-4b40-a18b-93de7989c565');
        this.$store.commit('Getnews', response.data)
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="css">
.gradient-background {
  background: linear-gradient(48deg, #e270ff 0%, #5b66ff 44%, #10de8b 92%);
}

.bottoms {
  margin-top: 1.4em;
  text-align: center;
}

.title {
  margin: 1.4em 0.71em 1.4em;
  color: white;
}

.top {
  margin: 0 0.61em;
  display: flex;
  justify-content: flex-start;
  height: 8.14em;
  padding: 1.5em 1em 1.5em 1.5em;
}

.top .header .pic {
  margin: 0.3em;
  width: 4.5em;
  height: 4.5em;
  border-radius: 50%;
  background-size: cover;
}

.top .header {
  width: 5.14em;
  height: 5.14em;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #e270ff, #5c67ff);
}

.top .names {
  line-height: 4em;
  text-indent: 1em;
  color: white;
  font-weight: 600;
  font-size: 1.43em;
}
</style>
