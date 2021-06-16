<template>
  <div class="faq-page">
    <NavigationBar title="FAQ" />
    <div class="content formatted">
      <h1>{{ $t("navbar.faq") }}</h1>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.communityProject.communityProject") }}
        </h3>
        {{ $t("faq.communityProject.description") }}
        <a
          class="link"
          href="https://docs.google.com/document/d/17ac_FxqzxQT7DbrJf-xyr8B_ySuvDZhagqP5w10oeyw"
          target="_blank"
        >{{ $t("faq.communityProject.sheet") }}</a>.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.requirements.requirements") }}
        </h3>
        {{ $t("faq.requirements.description") }}
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.beginner.beginner") }}
        </h3>
        {{ $t("faq.beginner.description") }}
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.heads.heads") }}
        </h3>
        {{ $t("faq.heads.description") }}
        <span><NuxtLink :to="'/team'" class="link">{{
          $t("faq.heads.teamPage")
        }}</NuxtLink>.</span>
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.departments.departments") }}
        </h3>
        {{ $t("faq.departments.description") }}
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.progress.progress") }}
        </h3>
        {{ $t("faq.progress.description") }}
        <a class="link" href="https://play.cryptic-game.net/" target="_blank">
          play.cryptic-game.net</a>.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.new.new") }}
        </h3>
        {{ $t("faq.new.description") }}
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.ticketFound.ticketFound") }}
        </h3>
        {{ $t("faq.ticketFound.description") }}
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.ticketDone.ticketDone") }}
        </h3>
        {{ $t("faq.ticketDone.description") }}
        <a
          class="link"
          href="https://github.com/cryptic-game/cryptic/blob/master/conventions.md"
          target="_blank"
        >{{ $t("faq.ticketDone.conventions") }}</a>.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.headAssistant.headAssistant") }}
        </h3>
        {{ $t("faq.headAssistant.description") }}
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.contributor.contributor") }}
        </h3>
        {{ $t("faq.contributor.description") }}
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.conflicts.conflicts") }}
        </h3>
        {{ $t("faq.conflicts.description") }}
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.problem.problem") }}
        </h3>
        {{ $t("faq.problem.description") }}
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          {{ $t("faq.funding.funding") }}
        </h3>
        {{ $t("faq.funding.description") }}
        <a
          class="link"
          href="https://www.patreon.com/user?u=5322110"
          target="_blank"
        >
          {{ $t("faq.funding.patreon") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'StatusPage',
  components: { NavigationBar },
  head () {
    return {
      titleTemplate: 'FAQ - %s'
    }
  }
}
</script>

<style lang="scss" scoped>
.faq-page {
  height: 100%;
  margin-bottom: 5rem;

  div.faq-section {
    margin-top: 30px;
    text-align: justify;
    line-height: 25px;

    h3.faq-section__question {
      margin-top: 25px;
      margin-bottom: 10px;
      font-size: 1.3rem;
    }
  }
}
</style>
