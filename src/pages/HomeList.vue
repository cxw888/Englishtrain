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
    this.totaldatas();
  },
  methods: {
    async fetchApiData() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/e379d7d3-b3ed-4b3d-b992-a1c63b688c08');
        this.practice = response.data;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
    async totaldatas() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/a74ca58d-cf53-49fe-9a5f-6888c58db70b');
        this.totaldata = response.data;
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
  margin-top: 5vw;
  text-align: center;
}
.title {
  margin: 5.12820513vw 2.56410256vw 5.12820513vw;
  color: white;
}
</style>
