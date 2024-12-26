<template>
  <div>
    <div class="chat-list">
      <div class="content">
        <div class="name">
          {{ names }}
        </div>
        <div class="content-audio-wrapper">
          <img
            src="../assets/wifi-blue.7f24edee.gif"
            alt=""
          >
          <audio
            :src="item.audioUrl"
            controls
          />
          <span>{{ item.timestamp }}</span>
        </div>
        <div class="content-text">
          你好
        </div>
      </div>
      <slot name="pcc" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChatList',
  props: ['item', 'names'],
};
</script>
<style lang="css">
.chat-list {
  height: 32.33333333vw;
  display: flex;
  justify-content: flex-end;
  gap: 2vw;
}
.chat-list .content .name {
  font-size: 2.82051282vw;
  color: #fff;
}
.chat-list .content .content-audio-wrapper {
  padding: 1.28205128vw;
  height: 9.23076923vw;
  width: 23.07692308vw;
  border-radius: 3.07692308vw 0 3.07692308vw 3.07692308vw;
  background: white;
  display: flex;
  gap: 0.5vw;
  margin-top: 1vw;
  align-items: center;
}
.chat-list .content .content-audio-wrapper img {
  width: 5.12820513vw;
  height: 5.12820513vw;
}
.chat-list .content .content-text {
  height: 10.43589744vw;
  margin-top: 2vw;
  background: rgba(235, 236, 255, 0.94902);
  border-radius: 3.07692308vw;
  font-size: 4.1025641vw;
  padding: 2.56410256vw 3.07692308vw;
  color: #222;
  font-weight: 400;
  display: flex;
  align-items: center;
}
</style>
