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
              <client-only>
                <small>{{ getPrettyDate(change.date) }}</small>
              </client-only>
              <div />
              <div class="additions">
                <h4>{{ $t("changelog.additions") }}</h4>

                <div v-for="add in change.additions" :key="add" class="addition">
                  <h5 style="font-weight: normal;">
                    {{ add }}
                  </h5>
                </div>
              </div>

              <div class="enhancements">
                <h4>{{ $t("changelog.enhancements") }}</h4>

                <div v-for="enhancement in change.enhancements" :key="enhancement" class="enhancement">
                  <h5 style="font-weight: normal;">
                    {{ enhancement }}
                  </h5>
                </div>
              </div>

              <div class="changes">
                <h4>{{ $t("changelog.changes") }}</h4>

                <div v-for="cha in change.changes" :key="cha" class="change">
                  <h5 style="font-weight: normal;">
                    {{ cha }}
                  </h5>
                </div>
              </div>

              <div class="fixes">
                <h4>{{ $t("changelog.fixes") }}</h4>

                <div v-for="fix in change.fixes" :key="fix" class="fix">
                  <h5 style="font-weight: normal;">
                    {{ fix }}
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
  },
  methods: {
    getPrettyDate (date) {
      return new Intl.DateTimeFormat(this.$i18n.localeProperties.iso).format(new Date(date))
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
  .additions{
    margin-top: 10px;
    border-style: none;
    border-radius: 8px;
    color: rgb(81, 185, 60);
  }
  .changes{
    margin-top: 10px;
    border-style: none;
    border-radius: 8px;
    color: rgb(222, 224, 52);
  }
  .addition, .change, .fix, .enhancement{
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
