<template>
  <div class="team-page">
    <NavigationBar title="Contribute" />
    <div class="content formatted">
      <h1 class="title">
        {{ $t("navbar.contribute") }}
      </h1>
      <p class="heading--5" v-html="$t('contribute.heading')" />
      <p>
        {{ $t("contribute.content.general") }}
        <br><br>
        {{ $t("contribute.content.technologies.head") }}
        <br>
        <strong>
          {{ $t("contribute.content.technologies.discord") }}
          <a href="https://discord.gg/tN5Wcab">Discord Server</a>.
        </strong>
        {{ $t("contribute.content.technologies.footer") }}
        <br><br>
        {{ $t("contribute.content.testing") }}
        <br><br>
        {{ $t("contribute.content.translation") }}
        <br><br>
        {{ $t("contribute.content.gamedesign") }}
        <br><br>
        {{ $t("contribute.content.text") }}
        <br><br>
        <strong>
          {{ $t("contribute.content.discord") }}
          <a href="https://discord.gg/tN5Wcab">Discord Server</a>.
        </strong>
        <br>
        {{ $t("contribute.content.first-steps") }}
      </p>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'ContributePage',
  components: { NavigationBar },
  head () {
    return {
      titleTemplate: 'Contribute - %s'
    }
  }
}
</script>

<style lang="scss" scoped>
div.content {
  margin-top: 25px;
  margin-bottom: 5rem;
  text-align: justify;
  line-height: 25px;

  h1 {
    line-height: normal;
  }

  p.heading--5 {
    margin-top: 25px;
    line-height: 30px;
    font-size: 1.3rem;
    text-align: left;
  }
  h1.title {
    text-align: left;
  }
}
</style>
