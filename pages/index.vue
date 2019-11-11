<template>
  <div class="index-page">
    <main>
      <video
        class="background-video"
        autoplay
        muted
        loop
      >
        <source src="@/assets/video/background.mp4" type="video/mp4"/>
      </video>
      <section class="section hero">
        <div class="hero__content centered-container">
          <div class="hero__slogan">
            Don’t <b>play</b> the game, <span><br/><b>create</b> the game</span>
          </div>
          <h1 class="hero__title">
            An Open Source Game <br/>
            by <b>The Morpheus Tutorials</b>
          </h1>
          <span class="hero__c2a">Join us today!</span>
          <CButton
            class="hero__join-button"
            discord
            outline
            href="https://discord.gg/VSQryKx"
            new-tab
            :size="2"
          >
            <template v-slot:icon>
              <DiscordIcon class="icon"/>
            </template>
            Join our Discord
          </CButton>
        </div>
      </section>
      <section class="section second-section">
        <div class="second-section__content centered-container">
          <span>
            You can already play an early version:
          </span>
          <span class="second-section__version">
            Cryptic Pre Alpha 3
          </span>
          <CButton blue outline text-color="white" to="/blog">
            <template v-slot:icon>
              <NoteIcon class="icon"/>
            </template>
            Read the Blog Post
          </CButton>
          <CButton green outline text-color="white" href="https://play.cryptic-game.net">
            <template v-slot:icon>
              <GamepadIcon class="icon"/>
            </template>
            Play Now
          </CButton>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/mobile";
  @import "~@/assets/css/variables";

  .index-page {
    background-color: black;
    width: 100%;
  }

  .section {
    width: 100%;
    background-color: black;
    z-index: 1;
    position: relative;
  }

  .hero {
    background: transparent;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
    flex-direction: row-reverse;

    position: relative;

    .hero__content {
      position: relative;
      padding: 20px 20px 10vh;
    }

    .hero__slogan {
      position: relative;
      top: -30vh;
      right: 10vw;
      font-size: 1.6rem;
      text-align: right;

      & > span:nth-child(2) {
        position: relative;

        right: -40px;
      }
    }

    .hero__title {
      margin: 0 0 5px;
      font-size: 1.1rem;
      font-weight: normal;
    }

    .hero__c2a {
      font-size: 4rem;
      font-weight: bold;

      @media (max-width: 580px) {
        font-size: 11vw;
      }
    }

    .hero__join-button {
      margin-top: 20px;
    }
  }

  .second-section {
    background-image: url("~@/assets/image/green_background.png");
    background-attachment: fixed;
    height: 150px;

    .second-section__content {
      height: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 1.2rem;
      text-align: center;

      .second-section__version {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.5rem;
      }

      & > :not(:last-child) {
        margin-right: 10px;
      }
    }

    @include mobile {
      height: fit-content;
      padding: 20px 0;

      .second-section__content {
        flex-direction: column;
        justify-content: center;

        & > :not(:last-child) {
          margin-bottom: 20px;
          margin-right: 0;
        }
      }
    }
  }

  .background-video {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    opacity: 0.7;
  }
</style>

<script>
  import CButton from "@/components/CButton";
  import DiscordIcon from "@/assets/icons/discord.svg";
  import GamepadIcon from "@/assets/icons/gamepad.svg";
  import NoteIcon from "@/assets/icons/note.svg";

  export default {
    components: { GamepadIcon, NoteIcon, DiscordIcon, CButton }
  };
</script>
