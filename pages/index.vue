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
          <h1 class="hero__title">
            An Open Source Game <br/>
            by <b>The Morpheus Tutorials</b>
          </h1>
          <span class="hero__c2a">Join us today!</span>
          <CButton
            class="hero__join-button"
            discord
            :size="2"
            @click="joinDiscord()"
          >
            <template v-slot:icon>
              <DiscordIcon/>
            </template>
            Join our Discord
          </CButton>
        </div>
      </section>
      <section class="section">
        <br/>
        <br/>
        <br/>
        Second section
        <br/>
        <br/>
        <br/>
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
    padding: 20px 20px 16vh;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
    flex-direction: row-reverse;
  }

  .hero__content {
    position: relative;
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
  import DiscordIcon from "@/components/icons/DiscordIcon";

  export default {
    components: { DiscordIcon, CButton },
    methods: {
      joinDiscord() {
        window.open("https://discord.gg/VSQryKx", "_blank");
      }
    }
  };
</script>
