<template>
  <div class="faq-page">
    <KNavigationBar title="FAQ"/>
    <div class="content formatted">
      <h1>FAQ</h1>
      <div class="faq-section">
        <h3 class="faq-section__question"> What is the "community project"?</h3>
        The "community project" is a projekt that has been announced in october 2017, where we build a 2 dimensional
        game from scratch. The team consists of people from different age groups, which meet in discord to work on
        that project.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> Do I have to be able to code?</h3>
        No, you don't have to be able to code in order to help developing the game.
        You can also join teams like gamedesign, text and graphic design.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> Is it possible for a beginner to help with the coding?</h3>
        As a beginner, this project might be too difficult for you, so we might advise the beginners to continue
        improving their skills.
        You can decide between backend: Python/Java or frontend: TypeScript + HTML. In your department you should
        know the basics of your programming language. Everything else you will learn in the course of the project.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> Where do I can see all heads of departments?</h3>
        You find all departments and their contact persons in the
        <NuxtLink :to="'/team'" class="link">Team page</NuxtLink>
        .
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> What departments exist within the project?</h3>
        The project is split in the multiple categories: gamedesign, design, frontend, backend, text and security.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> Where I can see the level of development?</h3>
        The latest level of development can be tracked on GitHub. Additionally, there are updates, visible on the
        website or at <a class="link" href="https://play.cryptic-game.net/" target="_blank">play.cryptic-game.net</a>.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> I am new. How can I start?</h3>
        In discord, you can give yourself roles for the department where you want to work. You can get in touch with
        the head if you want work e.g. in frontend or gamedesign.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> I've found am ticket, that I want to work on, how should I proceed?</h3>
        Contact the respective head and say to him wich one of the issues you want to work on. Everything else you
        can ask your head. Additionally, there are at irregular intervals meetings in your department.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> I closed the ticket. What should I do next?</h3>
        Upload your work in the specified GitHub repository. Note the procedure for branches and pull requests in
        the <a class="link" href="https://github.com/cryptic-game/cryptic/blob/master/conventions.md" target="_blank">convention</a>.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> What does a head assistant do?</h3>
        A head assistant is a person, who actively helped in the development of the game for a long time. That
        person is promoted by his/her head and supports him/her. The head assistant can lead the team and is a
        contact person for the people in his/her team.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> What is a Contributor?</h3>
        Additionally to the other roles, there is the contributor. The rank is given to people, which a head
        particularly noticed due to their good cooperation and they are being rewarded with this rank.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> I am now in a leading position and there are conflicts in my team. Who
          should I contact?</h3>
        Contact the head team. We want to solve and prevent conflicts as fast as possible for the users convenience.
      </div>
      <div class="faq-section">
        <h3 class="faq-section__question"> Who should I contact, if I don't have the time to continue working or if
          I don't feel like working on the project or working in my current position?</h3>
        That's no problem. In that case, contact your head to talk about your needs.
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
    components: {KNavigationBar}
  };
</script>
