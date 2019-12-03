<template>
  <footer class="layout-footer">
    <div class="layout-footer__links">
      <nuxt-link class="link" to="/imprint">
        Imprint
      </nuxt-link>
      <a class="link" href="https://the-morpheus.de/faq-en.html" target="_blank">
        Privacy Policy
      </a>
      <nuxt-link class="link" to="/status">
        Status
      </nuxt-link>
    </div>
    <div class="layout-footer__icon-links">
      <a
        class="layout-footer__icon-link"
        href="https://discord.gg/tN5Wcab"
        style="--color: #7289DA"
      >
        <DiscordIcon/>
      </a>
      <a
        class="layout-footer__icon-link"
        href="https://github.com/cryptic-game"
        style="--color: #4078c0"
      >
        <GitHubIcon/>
      </a>
      <a
        class="layout-footer__icon-link"
        href="https://www.youtube.com/channel/UCD1cNWfpafkrCxQqWezpZjQ"
        style="--color: #ff3635"
      >
        <YouTubeIcon/>
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  @use "~@/assets/css/utilities/screenSize";

  .layout-footer {
    width: 100%;
    padding: 60px 40px 40px;

    background-color: black;
    color: white;

    position: relative;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .layout-footer__links {
      display: flex;
      justify-content: center;
      align-items: center;

      @include screenSize.notMobile {
        & > .link:not(:last-child) {
          margin-right: 20px;
        }
      }

      @include screenSize.mobile {
        flex-direction: column;
      }
    }

    .layout-footer__icon-links {
      display: flex;
      justify-content: center;

      .layout-footer__icon-link {
        width: 40px;
        color: white;
        margin: 0 10px;

        transition: 120ms linear color;
        &:hover {
          color: var(--color);
        }
      }
    }

    @include screenSize.mobile {
      flex-wrap: wrap;
      padding: 30px;

      .layout-footer__icon-links, .layout-footer__links {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
</style>

<script>
  import DiscordIcon from "@/assets/icons/discord.svg";
  import YouTubeIcon from "@/assets/icons/youtube.svg";
  import GitHubIcon from "@/assets/icons/github.svg";

  export default {
    name: "LayoutFooter",
    components: { DiscordIcon, YouTubeIcon, GitHubIcon }
  };
</script>
