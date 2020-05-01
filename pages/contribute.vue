<template>
  <main class="team-page">
    <KNavigationBar title="Contribute"></KNavigationBar>
    <div class="content formatted">
      <h1>Contribute</h1>
      <p class="heading--5">
        We develop a multiplayer browser game!
        <br>
        You want to participate? - Then you have come to the right place!
      </p>
      <p>
        The community project is a joint effort of many volunteer members. We are a team of administrators, designers,
        software developers and game designers. It takes a lot of time, good skills, motivation, passion and discipline
        from every single person in the community to make Cryptic a successful game.
        The community project offers many opportunities for you to participate, whether you have programming skills or
        not. At the same time, you will immediately join a friendly and motivated team.
        <br><br>
        The backend is developed in Java and Python.
        The entire interface of the game is developed in Angular and the corresponding web languages HTML, SCSS and
        TypeScript. The Cryptic website is developed in Vue.js in combination with Nuxt.js.
        <br>
        <strong>
          If you have any questions or want to get started right away, feel free to join the
          <a href="https://discord.gg/tN5Wcab">Discord Server</a>.
        </strong>
        If you know more than one programming language, this is even better. There are also areas for non-programmers,
        including game design, graphic design, security, testers and text correction.
        <br><br>
        Testing the game is an important part of the process leading up to release, because a game with lots of bugs
        isn't a good game. Testing Information about the performance and stability of Cryptic under real conditions can
        be very useful for developers. Therefore we would be happy if you test the game thoroughly.
        Furthermore, the game needs to be translated into many languages to make Cryptic accessible to many interested
        players. This applies not only to the game but also to the website.
        <br><br>
        If you want to work on the game design you need creativity. All content that has to be programmed has to be
        defined and written in documents. These documents are then handed over to the programming team for
        implementation. This means that existing ideas must be worked out in writing for later development. But before
        we work out anything in writing, we will discuss it together in the team and everybody can bring in his
        suggestions. Of course, players are also allowed to contribute new game ideas.
        <br>
        The text team also has a lot to do in our blog. To keep it up to date, a team has to constantly adapt it - write
        new tutorials, report on updates to the game and much more!
        <br><br>
        <strong>
          Do you want to join the project? Then just have a look at our <a href="https://discord.gg/tN5Wcab">Discord
          Server</a>.
        </strong>
        <br>
        This is where all the teams organize themselves and discuss further steps.
        When you get to the server, read everything in the channels - there you will find further instructions on how
        to apply. If you got to the channel "bot-use-only" and entered "!ls" you have done everything right. 😉
      </p>
    </div>
  </main>
</template>

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
    }
  }
</style>

<script>
  import KNavigationBar from "@/components/KNavigationBar";

  export default {
    name: "ContributePage",
    components: {KNavigationBar},
    head() {
      return {
        titleTemplate: "Contribute - %s"
      };
    }
  };
</script>
