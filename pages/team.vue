<template>
  <main class="team-page">
    <KNavigationBar title="Team"/>
    <div class="content formatted">
      <h1>Team</h1>

      <h6>Project Management</h6>
      <TeamMember github-name="Chaozz66" name="Chaozz" role="Head"></TeamMember>
      <TeamMember github-name="DevMimas" name="Marius"></TeamMember>

      <h6>Gamedesign</h6>
      <TeamMember github-name="DevMimas" name="Marius" role="Head"></TeamMember>

      <div class="group">
        <h6>Frontend Development</h6>
        <TeamMember github-name="MaxiHuHe04" name="MaxiHuHe04" role="Head"></TeamMember>
        <TeamMember github-name="MarcelCoding" name="Marcel" role="Head-Assistant"></TeamMember>
        <TeamMember github-name="JannikEmmerich" name="Jannik"></TeamMember>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
  div.content {
    display: flex;
    flex-direction: column;

    div.group {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar";
  import TeamMember from "../components/TeamMember";

  export default {
    name: "TeamPage",
    components: {TeamMember, KNavigationBar}
  };
</script>
