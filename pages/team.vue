<template>
  <main class="team-page">
    <KNavigationBar title="Team"/>
    <div class="content formatted">
      <h1>Team</h1>

      <div class="group">
        <h6>Team Management</h6>
        <TeamMember github-name="Chaozz66" name="Chaozz" role="Head"></TeamMember>
        <!--        <TeamMember github-name="DevMimas" name="Marius"></TeamMember>-->
      </div>

      <div class="group">
        <h6>Gamedesign</h6>
        <TeamMember github-name="DevMimas" name="Marius" role="Head"></TeamMember>
      </div>

      <div class="group">
        <h6>Development</h6>
        <TeamMember github-name="Defelo" name="Defelo" role="Head of Development"></TeamMember>
        <TeamMember github-name="TheCataliasTNT2k" name="TNT2k" role="Backend Head"></TeamMember>
        <TeamMember github-name="JannikEmmerich" name="Jannik" role="Backend Head Assistant"></TeamMember>
        <TeamMember github-name="MaxiHuHe04" name="MaxiHuHe04" role="Frontend Head"></TeamMember>
        <TeamMember github-name="MarcelCoding" name="Marcel" role="Frontend Head Assistant"></TeamMember>
      </div>

      <div class="group">
        <h6>Design</h6>
        <TeamMember github-name="Chaozz66" name="Chaozz" role="Head"></TeamMember>
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
