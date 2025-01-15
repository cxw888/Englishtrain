<template>
  <div class="top">
    <!-- pj: 请使用真实api数据来写 -->
    <div class="header">
      <div class="pic" />
    </div>
    <div class="names">
      <!-- {{ personals.names }} -->
      陈晓雯
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderBox',
  // props: ['username'],
  data() {
    return {
      personals: null,
    };
  },
  created() {
    this.getname();
  },
  methods: {
    async getname() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/562bf09f-a412-4e92-ab38-c37ccc903fc4');
        this.personals = response.data;
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<!-- pj: 请使用less -->
<style lang="css" scoped>
.top {
  margin: 0 0.61em;
  display: flex;
  justify-content: flex-start;
  height: 8.14em;
  padding: 1.5em 1em 1.5em 1.5em;
}
.top .names {
  line-height: 4em;
  text-indent: 1em;
  color: white;
  font-weight: 600;
  font-size: 1.43em;
}
.top .header {
  width: 5.14em;
  height: 5.14em;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #e270ff, #5c67ff);
}
.top .header .pic {
  margin: 0.3em;
  width: 4.5em;
  height: 4.5em;
  border-radius: 50%;
  background-image: url(../assets/avatar-default.png);
  background-size: cover;
}
</style>
