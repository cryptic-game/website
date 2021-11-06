<template>
  <span>
    <span class="typewriter" v-html="typedText" />
    <span class="typewriter-cursor">|</span>
  </span>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      default () {
        return []
      }
    },
    interval: {
      type: Number,
      default () {
        return 100
      }
    },
    waitingInterval: {
      type: Number,
      default () {
        return 1000
      }
    }
  },
  data: () => ({
    typedText: null,
    currentWord: 0,
    currentChar: 0
  }),
  mounted () {
    setTimeout(() => this.type(), this.interval)
  },
  methods: {
    changeTyping (forward) {
      this.typedText = this.texts[this.currentWord].substr(0, this.currentChar + 1)
      this.currentChar += forward ? 1 : -1
    },
    type () {
      this.changeTyping(true)
      if (this.currentChar >= this.texts[this.currentWord].length) {
        setTimeout(() => this.clear(), this.waitingInterval)
      } else {
        setTimeout(() => this.type(), this.interval)
      }
    },
    clear () {
      this.changeTyping(false)
      if (this.currentChar < -1) {
        this.currentWord += 1
        this.currentChar = 0
        setTimeout(() => this.type(), this.waitingInterval)
      } else {
        // clearing should be 1.5 times faster than typing
        setTimeout(() => this.clear(), this.interval / 1.5)
      }
      if (this.currentWord === this.texts.length) {
        this.currentWord = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.typewriter-cursor{
    opacity: 1;
    animation: blink 0.8s infinite;
    position: relative;
    top:-3px;
    left:-8px;
}
@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@media only screen and (max-height: 600px) {
  span{
    display: none;
  }
  .typewriter{
    display: none;
  }
  .typewriter-cursor{
    display: none;
  }
}
</style>
