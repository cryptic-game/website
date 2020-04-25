<template>
  <div class="faq-page">
    <KNavigationBar title="FAQ"/>
    <div class="content formatted">
      <h1>FAQ</h1>
      <div class="faq-section">
        <h3 class="faq-section__question"> What is the "community project"?</h3>
        The "community project" is a project that has been announced in October 2017 by The Morpheus Tutorials.
        We build a 2-dimensional browser game from scratch. The team consists of people of different age groups.
        We meet in Discord to work together. You can find more information in the
        <a
          class="link"
          href="https://docs.google.com/document/d/17ac_FxqzxQT7DbrJf-xyr8B_ySuvDZhagqP5w10oeyw"
          target="_blank">specification sheet</a>.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> Do I have to be able to code?</h3>
        No, you don't have to be able to code in order to help develop the game.
        You can also join teams like game design, text, and graphic design.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> Is it possible for a beginner to help with the coding?</h3>
        As a beginner, this project might be too difficult for you, so we might advise beginners to continue improving
        their skills.
        You can decide between the backend in Python or Java and the frontend in Angular and HTML. In your department,
        you should know the
        basics of the respective programming language. Everything else you will learn in the course of the project.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">Where can I see all the heads of the departments?</h3>
        You can find all departments and their contact persons in the
        <span><NuxtLink :to="'/team'" class="link">Team page</NuxtLink>.</span>
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> What departments exist within the project?</h3>
        The project is split into multiple categories: Game design, Design, Frontend, Backend, Text and Security.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> Where can I see the progress of the development?</h3>
        The latest progress of the development can be tracked on GitHub. Additionally, there are updates, visible on the
        website or at <a class="link" href="https://play.cryptic-game.net/" target="_blank">play.cryptic-game.net</a>.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> I am new. How can I start?</h3>
        In Discord, you can assign yourself roles for the department you want to work for.
        You can get in touch with the specific department head.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> I've found a ticket that I want to work on, how should I proceed?</h3>
        Contact the respective head and tell them which issue you want to work on. Additionally,
        there are meetings in each department sometimes.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> I am done with a ticket. What should I do next?</h3>
        Upload your work to the corresponding GitHub repository. Note: please keep an eye on
        the procedure for commits, branches and pull requests in the
        <a class="link" href="https://github.com/cryptic-game/cryptic/blob/master/conventions.md" target="_blank">conventions</a>.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> What does a "head assistant" do?</h3>
        A head assistant is a person who has actively helped in the development of the game for a long time.
        They are promoted by their head and assists him/her. The head assistant can lead the team and is also
        a contact person for the team.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> What is a "contributor"?</h3>
        Additionally to the other roles, there is the contributor. The rank is given as
        a reward to people who have been particularly noticed for their good work.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> I am in a leading position now and there are conflicts in my team. Who
          should I contact?</h3>
        Contact the head team. We want to solve and prevent conflicts as fast as possible for the user's convenience.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> Who should I contact if I don't have enough time to continue working,
          or if I don't feel like working on the project / in my current position anymore?</h3>
        That's no problem. In that case, get in touch with your head to talk about your needs.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question">
          How is the project financed?
        </h3>
        Nobody gets paid for working on the project, but we have to pay for our servers, so we depend on donations and
        sponsors. So if you want to sponsor us,
        <a class="link" href="https://www.patreon.com/user?u=5322110" target="_blank">support The Morpheus on
          Patreon</a>.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .faq-page {
    height: 100%;
    margin-bottom: 25px;

    div.faq-section {
      margin-top: 30px;
      margin-bottom: 30px;
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

<script>
  import KNavigationBar from "kiste/components/KNavigationBar";

  export default {
    name: "StatusPage",
    components: {KNavigationBar},
    head() {
      return {
        titleTemplate: "FAQ - %s"
      };
    }
  };
</script>
