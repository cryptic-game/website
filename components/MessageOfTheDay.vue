<template>
  <div v-if="motd.message != undefined" class="motd" :style="motd.style">
    {{ motd.message }} <a v-if="motd.readmorelink != undefined" :href="motd.readmorelink" :style="motd.style"> READ MORE </a>
  </div>
</template>

<script>
export default {

  name: 'Motd',
  components: {},
  data: () => ({
    motd: {},
    style: {}
  }),
  fetch () {
    this.motd = { message: 'Cryptic wird heute zwei jahre alt! 🥳', readmorelink: 'https://google.de' }
  }
}

</script>
<style lang="scss" scoped>
.motd{
    width: fit-content;
    padding: 0.4vw;
    margin-right: 10%;
    margin-left: 4%;
    text-align: center;
    background: #34A735;
    border-radius: 4px;
    margin-bottom: 2vh;
}
a{
    color: white;
    background: #1D1C1C;
    text-decoration: none;
    border-radius: 8px;
    padding: 4px;
    font-size: 0.8rem;
}
</style>
