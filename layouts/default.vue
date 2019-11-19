<template>
  <div class="default-layout fill-screen">
    <CNavbar/>
    <div class="default-layout__content">
      <nuxt/>
    </div>
    <footer class="default-layout__footer">
      <div class="default-layout__footer-links">
        <nuxt-link class="link" to="/imprint">
          Imprint
        </nuxt-link>
      </div>
      <div class="default-layout__footer-icon-links">
        <a
          class="default-layout__footer-icon-link"
          href="https://discord.gg/VSQryKx"
          style="--color: #7289DA"
        >
          <DiscordIcon class="icon"/>
        </a>
        <a
          class="default-layout__footer-icon-link"
          href="https://github.com/cryptic-game"
          style="--color: #4078c0"
        >
          <GitHubIcon class="icon"/>
        </a>
        <a
          class="default-layout__footer-icon-link"
          href="https://www.youtube.com/channel/UCD1cNWfpafkrCxQqWezpZjQ"
          style="--color: #ff4652"
        >
          <YouTubeIcon class="icon"/>
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  @import "~@/assets/css/variables";
  @import "~@/assets/css/mobile";

  .default-layout {
    .default-layout__content {
      margin-top: var(--navbar-height);
      min-height: calc(100vh - var(--navbar-height));
    }

    .default-layout__footer {
      height: 100px;
      width: 100%;
      padding: 20px 40px;

      background-color: $black-brighter;
      color: white;

      position: relative;
      z-index: 1;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .default-layout__footer-links {
        display: flex;
        justify-content: center;
      }

      .default-layout__footer-icon-links {
        display: flex;
        justify-content: center;

        .default-layout__footer-icon-link {
          width: 40px;
          color: white;
          margin: 0 10px;

          transition: 120ms linear color;
          &:hover {
            color: var(--color);
          }
        }
      }

      @include mobile {
        flex-wrap: wrap;
        height: fit-content;

        .default-layout__footer-icon-links,.default-layout__footer-links {
          width: 100%;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<script>
  import CNavbar from "@/components/CNavbar";
  import DiscordIcon from "@/assets/icons/discord.svg";
  import YouTubeIcon from "@/assets/icons/youtube.svg";
  import GitHubIcon from "@/assets/icons/github.svg";

  export default {
    components: { CNavbar, DiscordIcon, YouTubeIcon, GitHubIcon }
  };
</script>
