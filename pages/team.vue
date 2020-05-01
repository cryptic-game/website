<template>
  <main class="team-page">
    <KNavigationBar title="Team"/>
    <div class="content formatted">
      <h1>Team</h1>

      <div class="group">
        <h6>Project Management</h6>
        <TeamMember github-name="DevMimas" name="Marius" role="Project Manager"></TeamMember>
        <TeamMember github-name="Chaozz66" name="Chaozz" role="Community Manager"></TeamMember>
        <TeamMember github-name="TheMorpheus407" name="Morpheus " role="Community Manager"></TeamMember>
        <!--        <TeamMember github-name="DevMimas" name="Marius"></TeamMember>-->
      </div>

      <div class="group">
        <h6>Backend & Frontend</h6>
        <TeamMember github-name="Defelo" name="Defelo" role="Head of Development"></TeamMember>
      </div>

      <div class="group">
        <h6>Backend</h6>
        <TeamMember github-name="TheCataliasTNT2k" name="TNT2k" role="Head of Backend"></TeamMember>
        <TeamMember github-name="JannikEmmerich" name="Jannik" role="Head Assistant"></TeamMember>
        <TeamMember github-name="MarcelCoding" name="Marcel" role="Contributor"></TeamMember>
      </div>

      <div class="group">
        <h6>Frontend</h6>
        <TeamMember github-name="MaxiHuHe04" name="MaxiHuHe04" role="Head of Frontend"></TeamMember>
        <TeamMember github-name="MarcelCoding" name="Marcel" role="Head Assistant"></TeamMember>
        <TeamMember github-name="JannikEmmerich" name="Jannik" role="Contributor"></TeamMember>
      </div>

      <div class="group">
        <h6>Gamedesign</h6>
        <TeamMember github-name="DevMimas" name="Marius" role="Head of Gamedesign"></TeamMember>
        <TeamMember github-name="Maulwurf852" name="Maulwurf" role="Head Assistant"></TeamMember>
        <TeamMember github-name="Tristan-H11" name="Tristan-H11" role="Head Assistant"></TeamMember>
        <TeamMember github-name="Dev-Fabian" name="Fabian" role="Contributor"></TeamMember>
        <TeamMember github-name="T2brozz" name="T2brozz" role="Contributor"></TeamMember>
        <TeamMember github-name="Chaozz66" name="Chaozz" role="Contributor"></TeamMember>
      </div>

      <div class="group">
        <h6>Design</h6>
        <TeamMember github-name="Chaozz66" name="Chaozz" role="Head of Design"></TeamMember>
        <TeamMember github-name="DevMimas" name="Marius" role="Contributor"></TeamMember>
        <TeamMember github-name="Nocuma" name="Lars" role="Contributor"></TeamMember>
      </div>

      <div class="group">
        <h6>Videoproducer</h6>
        <TeamMember github-name="Nocuma" name="Lars" role="Head of Videoproduction"></TeamMember>
      </div>

      <div class="group">
        <h6>Sounddesign</h6>
        <TeamMember github-name="Captches" name="Captches" role="Head of Sounddesign"></TeamMember>
      </div>

      <div class="group">
        <h6>Editorial office & Translation</h6>
        <TeamMember github-name="andyRonck" name="Aronck" role="Head of Editorial office & Translation"></TeamMember>
        <TeamMember github-name="cephox" name="ce_phox " role="Contributor"></TeamMember>
        <TeamMember github-name="DevMimas" name="Marius " role="Contributor"></TeamMember>
      </div>

      <div class="group">
        <h6>Website</h6>
        <TeamMember github-name="RiseofRice" name="RiseofRice" role="Head of Website"></TeamMember>
        <TeamMember github-name="moritzruth" name="Moritz" role="Contributor"></TeamMember>
        <TeamMember github-name="MarcelCoding" name="Marcel" role="Contributor"></TeamMember>
      </div>

      <div class="group">
        <h6>Security</h6>
        <TeamMember github-name="Capfly" name="Capfly" role="Head of Security"></TeamMember>
      </div>

      <div class="group">
        <h6>Server Admin</h6>
        <TeamMember github-name="kurzdev" name="Jokur" role="Admin"></TeamMember>
        <TeamMember github-name="LordRazor" name="LordRazor" role="Admin"></TeamMember>
        <TeamMember github-name="use-to" name="USE-TO" role="Admin"></TeamMember>
      </div>

      <div class="group">
        <h6>Inactive Members</h6>
        <TeamMember github-name="FelixRewer" name="Felix" role="ex-Head of Frontend"></TeamMember>
        <TeamMember github-name="use-to" name="USE-TO" role="ex-Head of Development"></TeamMember>
        <TeamMember github-name="SpartanerSpaten" name="EinSpaten" role="ex-Head of Backend"></TeamMember>
        <TeamMember github-name="mieasy" name="Mieasy" role="ex-Head of Backend"></TeamMember>
        <TeamMember github-name="TheProgrammer21" name="TheProgrammer" role="ex-Head of Administration"></TeamMember>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  div.content {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;

    div.group {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<script>
  import KNavigationBar from "@/components/KNavigationBar";
  import TeamMember from "../components/TeamMember";

  export default {
    name: "TeamPage",
    components: {TeamMember, KNavigationBar},
    head() {
      return {
        titleTemplate: "Team - %s"
      };
    }
  };
</script>
