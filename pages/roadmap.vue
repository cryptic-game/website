<template>
  <main class="team-page">
    <KNavigationBar title="Roadmap"></KNavigationBar>
    <div class="content formatted">
      <h1>Roadmap</h1>

      <road-map-date month="from July" state="next" year="2020">
        <road-map-version version="Pre Alpha 3">
          <road-map-sprint
            action="Rewrite Backend Infrastructure"
            group="Backend, Security">
          </road-map-sprint>

          <road-map-sprint
            action="Rewrite Frontend Infrastructure"
            group="Frontend, Security">
          </road-map-sprint>

          <road-map-sprint
            action="Implement Cryptic UI Design"
            group="Design, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Cryptic Wiki"
            group="Editorial Office">
          </road-map-sprint>

          <road-map-sprint
            action="Implementing the IP-Address"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Expand Network System"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Implement Firewall-App"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Implement Basis for Music/Sounds"
            group="Gamedesign, Frontend, Sounddesign">
          </road-map-sprint>
        </road-map-version>
      </road-map-date>

      <road-map-date month="from Mai" state="current" year="2019">
        <road-map-version version="Pre Alpha 2">
          <road-map-sprint
            action="Basis for various Computer Hardware"
            group="Gamedesign, Backend">
          </road-map-sprint>

          <road-map-sprint
            action="Assemble computer"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Start and Stop Computer"
            group="Gamedesign, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Basis for system utilization"
            group="Gamedesign, Backend">
          </road-map-sprint>

          <road-map-sprint
            action="Basis for network system with private & public network"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Implementing the Control Center"
            group="Gamedesign, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Implement CPU-Cryptominer-App"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Implement Taskmanager-App"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Implement Wallet-App"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Implement Hardwareshop-App"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Implement Filemanager-App"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="File system: Create folders in layers, additional functions"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Basis for hardware exchange among players"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Extending Terminal Commands"
            group="Gamedesign, Frontend">
          </road-map-sprint>
        </road-map-version>
      </road-map-date>

      <road-map-date month="from June" state="finished" year="2018">
        <road-map-version version="Pre Alpha 1">
          <road-map-sprint
            action="Basis for user account system"
            group="Gamedesign, Backend">
          </road-map-sprint>

          <road-map-sprint
            action="Base for devices"
            group="Gamedesign, Backend">
          </road-map-sprint>

          <road-map-sprint
            action="Login- & Registration Area"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="Implementing the Basis for Desktop"
            group="Gamedesign, Backend, Frontend, Design">
          </road-map-sprint>

          <road-map-sprint
            action="First program: Terminal-App + 20 basic commands"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Base for Wallet to store money"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Base of an ingame crypto currency „morphcoin“"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="First hacker attack „Bruteforce“"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Services: ssh, telnet, portscan"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Access to opponent system through bruteforcing"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>

          <road-map-sprint
            action="Create, open, rename, delete, view text files"
            group="Gamedesign, Backend, Frontend">
          </road-map-sprint>
        </road-map-version>
      </road-map-date>

      <road-map-date month="October" state="finished" year="2017">
        <road-map-version version="Project Launch">
          <p class="heading--6">In October 2017, the project was initiated by The Morpheus Tutorials as an open source
            browser game for his community.</p>
        </road-map-version>
      </road-map-date>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  p {
    margin: 0;
  }
</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar";
  import RoadMapDate from "../components/road-map-date";
  import RoadMapVersion from "../components/road-map-version";
  import RoadMapSprint from "../components/road-map-sprint";

  export default {
    name: "RoadMapPage",
    components: {RoadMapSprint, RoadMapVersion, RoadMapDate, KNavigationBar}
  };
</script>
