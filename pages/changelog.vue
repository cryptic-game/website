<template>
  <main class="changelog-page">
    <NavigationBar title="Changelog" />
    <div class="content formatted">
      <h1>{{ $t("navbar.changelog") }}</h1>

      <div class="grid">
        <div v-for="change in changes.versions" :key="change.name" class="versionEntry">
          <article>
            <div>
              <h3>{{ change.name }}</h3>
              <small>{{ change.date }}</small>
              <div />

              <div class="enhancements">
                <h4>{{ $t("changelog.enhancements") }}</h4>

                <div v-for="enhancement in change.enhancements" :key="enhancement" class="enhancement">
                  <h5>
                    {{ enhancement }}<h2 />
                  </h5>
                </div>
              </div>

              <div class="fixes">
                <h4>{{ $t("changelog.fixes") }}</h4>

                <div v-for="fix in change.fixes" :key="fix" class="fix">
                  <h5>
                    {{ fix }}<h2 />
                  </h5>
                </div>
              </div>
            </div>
          </article>
          <br>
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
  data () {
    return {
      changes: []
    }
  },
  async fetch () {
    const response = await fetch('https://play.cryptic-game.net/assets/changelog.json')
    this.changes = await response.json()
  },
  head () {
    return {
      titleTemplate: 'Changelog - %s'
    }
  }

}
</script>

<style lang="scss" scoped>
  .fixes{
    margin-top: 10px;
    border-style: none;
    border-radius: 8px;
    color: rgb(221, 71, 44);
  }
  .enhancements{
    margin-top: 10px;
    border-style: none;
    border-radius: 8px;
    color: rgb(79, 185, 204);
  }
  .fix{
    margin-top: 5px;
    color: white;

  }
  .enhancement{
    color: white;
    margin-top: 5px;
  }
.versionEntry{
  color: white;
  padding: 20px;
  width: 100%;
  //background: linear-gradient(to right,black,black,black,#3EAB34);
  border-left-style: solid;
  border-left-width: 14px;
  border-left-color: #3EAB34;
}

</style>
