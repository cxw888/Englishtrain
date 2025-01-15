<template>
  <div>
    <HeaderBox />
    <RecordColumn
      :datas="totaldata"
      custom-class="gradient-background"
    >
      <template slot="center">
        <div class="tge">
          <div class="leftt">
            <i class="el-icon-s-fold" />
            <span>成长记录</span>
          </div>
          <router-link
            class="rightt"
            to="/allrecord"
          >
            <span>所有练习记录</span>
            <i class="el-icon-edit" />
          </router-link>
        </div>
      </template>
    </RecordColumn>
    <div class="title">
      选择陪练场景
    </div>
    <TrainList
      v-for="item in practice"
      :key="item.id"
      :item="item"
    />
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
  },
  methods: {
    async fetchApiData() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/69219195-6ca4-45c2-ac2f-1bf4aeb912e8');
        this.practice = response.data;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
    async fetchtotaldata() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/e66bad9b-90b0-42af-ba31-e9468daec5b9');
        const originaldata = response.data;
        this.totaldata = originaldata.map((item) => ({
          ...item,
          result: item.title === '练习总时间'
            ? `${(parseInt(item.result, 10) / 60000).toFixed(0)} 分钟`
            : item.result,
        }));
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
</style>
