<template>
  <div>
    <div class="header">
      <div class="title">
        <div class="tag">
          任务场景
        </div>
        <template>
          <div @click="stop">
            <el-button
              size="mini"
              round
              icon="el-icon-switch-button"
            >
              结束
            </el-button>
          </div>
        </template>
      </div>
      <div class="single-line">
        {{ only.title }}
      </div>
    </div>
    <ChatList
      v-for="(item, index) in messages"
      :key="index"
      :item="item"
      :names="only.manager"
    >
      <template #pcc>
        <div class="pc" />
      </template>
    </ChatList>
    <div
      v-show="began"
      class="bottom"
      :disabled="Recording"
      @click="startRecording"
    >
      <i class="el-icon-microphone" />点击开始录音
    </div>
    <div
      v-show="!isRecording"
      class="nova-btn"
      @click="hint"
    >
      <div>
        <i class="el-icon-sunny" /> 话术提示
      </div>
    </div>
    <div
      v-show="isRecording"
      class="tips-dialog"
    >
      <div class="headericon">
        <div>
          <i class="el-icon-sunny" /> 话术提示
        </div>
        <div @click="deletetips">
          <i class="el-icon-close" />
        </div>
      </div>
      <div class="letter">
        <h3>角度一：资金安全保障</h3>
        <strong>回复示例：</strong>
        <p>
          王奶奶，您放心，我们的养老保险产品是由国家认可的保险公司承保的，受到严格的监管。保险公司会定期公布财务报告
        </p>
      </div>
    </div>
    <div
      v-show="!began"
      class="recording"
    >
      <img
        src="../assets/audioing-peding.93561376.png"
        alt=""
      >
      <el-button
        type="text"
        class="close"
        @click="afters"
      >
        关闭
      </el-button>
      <div
        v-if="elapsedTime >= 0"
        data-v-f7bd0078
        class="time"
      >
        录音中 {{ formattedTime }}
      </div>
      <div class="twobutton">
        <el-button round>
          重录
        </el-button>
        <el-button
          round
          :disabled="!Recording"
          @click="stopRecording"
        >
          发送
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import ChatList from '../components/ChatList.vue';
export default {
  name: 'StartPracticing',
  components: { ChatList },
  data() {
    return {
      isRecording: false,
      began: true,
      Recording: false,
      mediaRecorder: null,
      audioChunks: [],
      audioUrl: null,
      messages: [],
      startTime: null,
      elapsedTime: 0,
      timerInterval: null,
      only: null, // 用于存储从 API 获取的项目详情
      loading: true, // 用于显示加载状态
      error: null, // 用于存储可能发生的错误
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.elapsedTime / 60);
      const seconds = this.elapsedTime % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
  },
  created() {
    this.fetchItemDetail();
  },
  methods: {
    async fetchItemDetail() {
      try {
        const response = await axios.get(`https://run.mocky.io/v3/${this.$route.params.id}`);
        this.only = response.data; // 将 API 返回的数据赋值给 item
      } catch (err) {
        this.error = '加载出错。';
        console.error(err);
      } finally {
        this.loading = false; // 最后加载状态
      }
    },
    hint() {
      this.isRecording = true;
    },
    deletetips() {
      this.isRecording = false;
    },
    stopRecording() {
      if (this.mediaRecorder) {
        this.mediaRecorder.stop();
      }
      clearInterval(this.timerInterval);
      this.timerInterval = null;
      this.elapsedTime = 0;
      this.began = true;
    },
    beforeDestroy() {
      this.stopRecording();
    },
    async startRecording() {
      this.began = false;
      this.Recording = true;
      this.audioChunks = [];
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          this.mediaRecorder = new MediaRecorder(stream);
          this.mediaRecorder.ondataavailable = (event) => {
            this.audioChunks.push(event.data);
          };
          //  当停止时
          this.mediaRecorder.onstop = () => {
            const stopTime = new Date().getTime();
            const elapsedSeconds = Math.floor((stopTime - this.startTime) / 1000);
            const elapsedTimeFormatted = `${Math.floor(elapsedSeconds / 60).toString().padStart(2, '0')}:${(elapsedSeconds % 60).toString().padStart(2, '0')}`;
            const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
            this.audioUrl = URL.createObjectURL(audioBlob);
            this.audioChunks = [];
            this.messages.push({ timestamp: elapsedTimeFormatted, audioUrl: this.audioUrl });
          };
          // 开始时间 定义点击开始的时间
          this.startTime = new Date().getTime();
          this.timerInterval = setInterval(() => {
            this.elapsedTime = Math.floor((new Date().getTime() - this.startTime) / 1000);
          }, 1000);
          this.mediaRecorder.start();
        })
        .catch((error) => {
          console.error('Error starting media recorder:', error);
        });
    },
    afters() {
      this.began = true;
    },
    stop() {
      this.$confirm('您将结束本次场景任务对话，并前往AI智能分析您的对话效果，看看本次对话的得分如何吧 ', '结束本次任务并前往评估', {
        confirmButtonText: '前往评估',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!',
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        });
      });
    },
  },
};
</script>
<style lang="css" scoped>
.recording {
  position: fixed;
  left: 0.7em;
  bottom: 0.7em;
  width: 25.8em;
  height: 13em;
  border: 2px solid #5c67ff;
  border-radius: 0.83em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(247deg, rgba(92, 103, 255, .85098) 15.1%, rgba(226, 112, 255, .85098) 84.9%);
}
.recording img {
  width: 5em;
  height: 5em;
  position: absolute;
  bottom: 9.75em;
  left: 10em;
}
.recording .close {
  position: absolute;
  right: 1.1em;
  bottom: 9.75em;
}
.recording .time {
  margin-bottom: 1.7em;
  margin-top: 4.3em;
}
.pc {
  margin: 0.8em;
  width: 2.56em;
  height: 2.56em;
  background-size: cover;
  background: url(../assets/cover.aa799c19.png);
  border-radius: 14em;
  background-size: 100% 100%;
}
.header {
  margin: 0.71em;
  padding: 0.71em;
  background: rgba(0, 0, 0, 0.6);
  height: 5.71em;
  border-radius: 0.85em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.header .single-line {
  font-weight: 500;
  font-size: 1.14em;
  color: white;
}
.header .title {
  margin: 0.55em 0.55em 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 2em;
}
.nova-btn {
  padding: 0.4em 0.6em;
  position: fixed;
  background-color: white;
  width: 7em;
  height: 2.2em;
  color: #707aff;
  left: 1.4em;
  border: none;
  border-radius: 3.6em;
  bottom: 5em;
}
.tips-dialog {
  position: fixed;
  background-color: #fff;
  border-radius: 1.43em;
  height: 14.28em;
  color: #707aff;
  left: 0.71em;
  bottom: 0.71em;
  width: 26.43em;
  padding: 1.43em;
}
.tips-dialog .letter {
  overflow: auto;
  width: 22em;
  height: 11em;
}
.tips-dialog .headericon {
  display: flex;
  justify-content: space-between;
}
.recording {
  background-color: linear-gradient(247deg, rgba(92, 103, 255, 0.85098) 15.1%, rgba(226, 112, 255, 0.85098) 84.9%);
}
</style>
