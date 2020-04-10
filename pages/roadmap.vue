<template>
  <main class="team-page">
    <KNavigationBar title="Roadmap"></KNavigationBar>
    <div class="content formatted">
      <h1 class="title">Roadmap</h1>

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
            action="Implement Base for Music/Sounds"
            group="Gamedesign, Frontend, Sounddesign">
          </road-map-sprint>
        </road-map-version>
      </road-map-date>

      <road-map-date month="from Mai" state="current" year="2019">
        <road-map-version version="Pre Alpha 2">
          <road-map-sprint
            action="Base for various Computer Hardware"
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
            action="Base for system utilization"
            group="Gamedesign, Backend">
          </road-map-sprint>

          <road-map-sprint
            action="Base for network system with private & public network"
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
            action="Base for hardware exchange among players"
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
            action="Base for user account system"
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
            action="Implementing the Base for Desktop"
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

      <div class="project-launch">

        <h1>Project Launch</h1>

        <div class="date">
          <span class="month">October</span>
          <span class="year">2017</span>
        </div>

        <p>
          On October 15, 2017, The Morpheus Tutorials<br> initiated the project for his community as a browser game.
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  h1.title {
    margin-bottom: 5rem;
  }

  p {
    margin: 0;
  }

  div.project-launch {
    background: rgb(52, 152, 219);
    background: linear-gradient(90deg, rgba(52, 152, 219, 1) 0%, rgba(52, 103, 219, 1) 100%);

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;

    padding: 2rem;
    margin: 7rem 4rem;

    border-radius: 0.4rem;

    h1 {
      text-transform: uppercase;
      font-size: 3rem;
      letter-spacing: 1rem;
      text-align: center;
    }

    div.date {
      display: flex;
      flex-direction: column;
      /*align-items: center;*/

      span {
        line-height: 2.5rem;
      }

      span.month {
        font-size: 1.5rem;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
      }

      span.year {
        letter-spacing: 0.3rem;
        font-size: 4rem;
      }
    }


    @media (max-width: 800px) {
      margin: 7rem 0;

      h1 {
        letter-spacing: 0.2rem;
      }
    }

    p {
      margin-top: 3rem;
      font-size: 1.3rem;
      text-align: center;
    }
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
