<template>
  <main class="changelog-page">
    <NavigationBar title="Changelog" />
    <div class="content formatted">
      <h1>{{ $t("navbar.changelog") }}</h1>

      <div class="grid">
        <div class="versionEntry" v-for="change in changes.versions" :key="change.name">
          <article>
          <div>
            <h3>{{change.name}}</h3>
            <h4>{{change.date}}</h4>
          
          <div/>
          <div>{{change.enhancements}}</div>
          <div>{{change.fixes}}</div>
        </article>
        <br/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'ChangelogPage',
  components: {
    
    NavigationBar
  },
  async fetch() {
  const response = await fetch("https://play.cryptic-game.net/assets/changelog.json");
  const data = await response.json();
  this.changes = data;
  },
  data () {
    return {
      changes: [],
    }
  },
  head () {
    return {
      titleTemplate: 'Changelog - %s'
    }
  },
  
}
</script>

<style lang="scss" scoped>
.versionEntry{
  background: rgb(26, 26, 26);
  color: rgb(235, 227, 184);
  padding: 20px;
  width: 100%;
}

</style>