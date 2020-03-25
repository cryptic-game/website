<template>
  <main class="team-page">
    <KNavigationBar title="Roadmap"></KNavigationBar>
    <div class="content formatted">
      <h1>Roadmap</h1>

      <road-map-year year="2021">
        <road-map-version version="Pre Alpha 3">
          <road-map-sprint action="Refactoring" group="Backend"></road-map-sprint>
          <road-map-sprint action="Refactoring" group="Frontend"></road-map-sprint>
        </road-map-version>
      </road-map-year>

      <road-map-year year="2020">
        <road-map-version version="Pre Alpha 3">
          <road-map-sprint action="Backend Rewrite" group="Backend"></road-map-sprint>
          <road-map-sprint action="Gamedesign Pre Alpha 4" group="Gamedesign"></road-map-sprint>
        </road-map-version>

        <road-map-version version="Pre Alpha 2">
          <road-map-sprint action="Controlcenter" group="Frontend"></road-map-sprint>
          <road-map-sprint action="Hardwareshop-App" group="Frontend"></road-map-sprint>
          <road-map-sprint action="Wallet-App" group="Frontend"></road-map-sprint>
        </road-map-version>
      </road-map-year>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar";
  import RoadMapYear from "../components/road-map-year";
  import RoadMapVersion from "../components/road-map-version";
  import RoadMapSprint from "../components/road-map-sprint";

  export default {
    name: "RoadMapPage",
    components: {RoadMapSprint, RoadMapVersion, RoadMapYear, KNavigationBar}
  };
</script>
