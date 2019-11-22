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
        <a class="link" href="https://the-morpheus.de/faq-en.html" target="_blank">
          Privacy Policy
        </a>
      </div>
      <div class="default-layout__footer-icon-links">
        <a
          class="default-layout__footer-icon-link"
          href="https://discord.gg/tN5Wcab"
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
          style="--color: #ff3635"
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
      width: 100%;
      padding: 60px 40px 40px;

      background-color: black;
      color: white;

      position: relative;
      z-index: 1;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .default-layout__footer-links {
        display: flex;
        justify-content: center;
        align-items: center;

        @include notMobile {
          & > .link:not(:last-child) {
            margin-right: 20px;
          }
        }

        @include mobile {
          flex-direction: column;
        }
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
        padding: 30px;

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
