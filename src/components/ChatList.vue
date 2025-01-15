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
  height: 9em;
  display: flex;
  justify-content: flex-end;
  gap: 0.6em;
}
.chat-list .content .name {
  font-size: 0.78em;
  color: #fff;
}
.chat-list .content .content-audio-wrapper {
  padding: 0.35em;
  height: 2.57em;
  width: 6.43em;
  border-radius: 0.8em 0 0.8em 0.8em;
  background: white;
  display: flex;
  gap: 0.1em;
  margin-top: 0.27em;
  align-items: center;
}
.chat-list .content .content-audio-wrapper img {
  width: 1.43em;
  height: 1.43em;
}
.chat-list .content .content-text {
  height: 4.85em;
  margin-top: 0.55em;
  background: rgba(235, 236, 255, 0.94902);
  border-radius: 0.85em;
  font-size: 1.14em;
  padding: 0.71em 0.85em;
  color: #222;
  font-weight: 400;
  display: flex;
  align-items: center;
}
</style>
