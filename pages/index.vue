<template>
  <main class="index-page">
    <KNavigationBar background-after-scroll/>
    <video
      class="background-video"
      autoplay
      muted
      loop
    >
      <source src="@/assets/video/background.mp4" type="video/mp4"/>
    </video>
    <section class="section hero-section">
      <div class="hero-section__content content">
        <span class="hero-section__slogan">
          Don’t <b>play</b> the game, <span><br/><b>create</b> the game</span>
        </span>
        <h1 class="hero-section__title">
          An Open Source Game <br/>
          by <b>The Morpheus Tutorials</b>
        </h1>
        <span class="hero-section__c2a">Join us today!</span>
        <CButton
          class="hero-section__join-button"
          discord
          href="https://discord.gg/tN5Wcab"
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
      <div class="second-section__content content flex-with-gutter">
        <span>
          You can already play an early version:
        </span>
        <span class="second-section__version">
          Cryptic Pre Alpha 2
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
    <section class="section blog-section">
      <h2 class="section__title content">
        Blog
      </h2>
      <div class="blog-section__content">
        <div></div>
        <div class="blog-section__posts flex-with-gutter">
          <BlogPostCard v-for="post in blogPosts" :key="post.slug" :post="post"/>
          <div v-if="blogPosts.length === 1" style="width: 100%; height: 100%; flex-grow: 1"></div>
        </div>
        <div class="blog-section__more-button-container">
          <nuxt-link class="blog-section__more-button link center-content" to="/blog">
            <ArrowRightIcon class="icon"/>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="section desc-section">
      <div class="desc-section__content content">
        <div class="desc-section__part">
          <h2 class="desc-section__title">
            The Project
          </h2>
          <p>
            The project "Cryptic" was initiated by the german YouTuber
            <a class="link" href="https://the-morpheus.de/">The Morpheus</a>. It was first announced on October 15,
            2017 with an
            <a class="link" href="https://www.youtube.com/watch?v=iOJhuw7eABk">announcement video (german)</a>.
            The goal of the project is to create a unique experience for the players, but primarily make
            it possible for people interested in coding and computer science to develop and improve their existing
            skills and create something great. This includes the determining of the game content, the design, sounds,
            the programming, the testing and the server maintenance.
          </p>
          <p>
            Together, we daily strive to make Cryptic better and want to give you an interesting, adventurous and
            playful introduction into the world of hacking.
          </p>
        </div>
        <div class="desc-section__part">
          <h2 class="desc-section__title">
            What is Cryptic?
          </h2>
          <p>
            Cryptic is a MMO Hacking-Simulation with realtime strategy elements. Using specific programs and command,
            you can infiltrate the systems of other players and the global infrastructure. Level up your hardware and
            software, produce your own malware in your development center or communicate with other players to plan
            a joint attack. But this is just the beginning.
          </p>
          <p>
            Help the cyber police as a white hat to put a stop to the activities of malicious hackers or become a
            black hat, cripple whole networks and spy the other players.
          </p>
        </div>
      </div>
    </section>
    <section class="section groups-section">
      <div class="content">
        <h2 class="section__title">
          Groups
        </h2>
        <div class="groups-section__groups">
          <div class="groups-section__group">
            <WindowIcon class="icon"/>
            <h3 class="groups-section__group-title">
              Frontend
            </h3>
          </div>
          <div class="groups-section__group">
            <CodeIcon class="icon"/>
            <h3 class="groups-section__group-title">
              Backend
            </h3>
          </div>
          <div class="groups-section__group">
            <GamepadIcon class="icon"/>
            <h3 class="groups-section__group-title">
              Gamedesign
            </h3>
          </div>
          <div class="groups-section__group">
            <PaintbrushIcon class="icon"/>
            <h3 class="groups-section__group-title">
              Design
            </h3>
          </div>
          <div class="groups-section__group">
            <GlobeIcon class="icon"/>
            <h3 class="groups-section__group-title">
              Website
            </h3>
          </div>
          <div class="groups-section__group">
            <ShieldIcon class="icon"/>
            <h3 class="groups-section__group-title">
              Security
            </h3>
          </div>
          <div class="groups-section__group">
            <LanguageIcon class="icon"/>
            <h3 class="groups-section__group-title">
              Translation
            </h3>
          </div>
          <div class="groups-section__group">
            <ABCIcon class="icon"/>
            <h3 class="groups-section__group-title">
              Correction
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section class="section faq-section">
      <div class="content">
        <h2 class="section__title">
          FAQ
        </h2>
        <div>
          <h3 class="faq-section__question"> What is the "community project"?</h3>
          The "community project" is a projekt that has been announced in october 2017, where we build a 2 dimensional
          game from scratch. The team consists of people from different age groups, which meet in discord to work on
          that project.
        </div>
        <div>
          <h3 class="faq-section__question"> Do I have to be able to code?</h3>
          No, you don't have to be able to code in order to help developing the game.
          You can also join teams like gamedesign, text and graphic design.
        </div>
        <div>
          <h3 class="faq-section__question"> Is it possible for a beginner to help with the coding?</h3>
          As a beginner, this project might be too difficult for you, so we might advise the beginners to continue
          improving their skills.
          You can decide between backend: Python/Java or frontend: TypeScript + HTML. In your department you should
          know the basics of your programming language. Everything else you will learn in the course of the project.
        </div>
        <div class="more-at-faq">
          More at the
          <NuxtLink :to="'/faq'" class="link">FAQ page</NuxtLink>
          .
        </div>
      </div>
    </section>
    <KFooter/>
  </main>
</template>

<style scoped lang="scss">
  @use "~kiste/css/mixins/screenSize";

  .index-page {
    width: 100%;

    ::selection {
      background-color: var(--colors-green);
    }
  }

  .section {
    width: 100%;
    z-index: 1;
    position: relative;
    overflow: auto;
    padding: 30px 0;

    .section__title {
      margin-top: 0;
      margin-bottom: 1.2rem;
      font-size: 3rem;
    }
  }

  .hero-section {
    background: transparent;
    height: calc(100vh - var(--x-navbar-height));
    padding: 20px 0;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
    flex-direction: row-reverse;

    position: relative;

    .hero-section__content {
      position: relative;
      padding: 20px 20px 10vh;
    }

    .hero-section__slogan {
      display: inline-block;

      position: absolute;
      top: -40vh;
      right: 15%;
      font-size: 1.6rem;
      text-align: right;

      & > span:nth-child(2) {
        position: relative;

        right: -40px;
      }
    }

    .hero-section__title {
      margin: 0 0 5px;
      font-size: 1.1rem;
      font-weight: normal;
    }

    .hero-section__c2a {
      font-size: 4rem;
      font-weight: bold;

      @media (max-width: 580px) {
        font-size: 11vw;
      }
    }

    .hero-section__join-button {
      margin-top: 20px;
    }
  }

  .second-section {
    background-image: url("~@/assets/image/green_background.jpg");
    background-attachment: fixed;

    @include screenSize.notMobile {
      height: 150px;
    }

    .second-section__content {
      height: 100%;

      justify-content: space-between;
      align-items: center;
      font-size: 1.2rem;
      text-align: center;

      .second-section__version {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.5rem;
      }

      @include screenSize.mobile {
        flex-direction: column;
        justify-content: center;
      }
    }

    @include screenSize.mobile {
      padding: 20px 0;
    }
  }

  .blog-section {
    $more-button-container-width: 70px;

    .blog-section__content {
      display: flex;
      justify-content: center;

      @include screenSize.mobile {
        flex-direction: column;

        padding: 0 var(--content-padding);
      }

      & > div:nth-child(1) {
        width: $more-button-container-width;
      }
    }

    .blog-section__posts {
      display: flex;
      align-items: stretch;

      width: var(--content-width);

      @include screenSize.mobile {
        flex-wrap: wrap;
        width: 100%;
      }
    }

    .blog-section__more-button-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: $more-button-container-width;

      @include screenSize.mobile {
        width: 100%;
        height: $more-button-container-width;
        flex-direction: column;
      }
    }

    .blog-section__more-button {
      $size: 45px;
      background-color: var(--colors-background-a);
      color: white;
      border-radius: 50%;

      width: $size;
      height: $size;

      @include screenSize.mobile {
        transform: rotate(90deg);
      }

      .icon {
        width: 24px;

        position: relative;
        left: 2px;
      }
    }
  }

  .desc-section {
    background: rgba(0, 0, 0, 0.8);

    .desc-section__content {
      display: flex;

      @include screenSize.mobile {
        flex-wrap: wrap;
      }
    }

    .desc-section__part {
      width: 100%;
      text-align: justify;

      &:not(:last-child) {
        margin-right: var(--gutter-size);

        @include screenSize.mobile {
          margin-right: 0;
          margin-bottom: 5px;
        }
      }
    }

    .desc-section__title {
      font-size: 2rem;
      margin-top: 0;
    }
  }

  .groups-section {
    .groups-section__groups {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      width: 100%;

      .groups-section__group {
        padding: 20px;

        width: 25%;
        min-width: 150px;

        .groups-section__group-title {
          margin: 20px auto 0;
          width: fit-content;

          text-transform: uppercase;
          font-size: 1.1rem;
          letter-spacing: 2px;
        }

        .icon {
          width: 50px;

          margin: 0 auto;
          display: block;
        }
      }
    }
  }

  .faq-section {
    div {
      margin-top: 30px;
      margin-bottom: 30px;
      text-align: justify;
      line-height: 25px;

      h3.faq-section__question {
        margin-top: 25px;
        margin-bottom: 10px;
        font-size: 1.3rem;
      }
    }

    .more-at-faq {
      margin-top: 25px;
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
  import KNavigationBar from "kiste/components/KNavigationBar";
  import KFooter from "kiste/components/KFooter";
  import {blogAPI} from "@/assets/js/blog";
  import {mapObjectKeys} from "@/assets/js/mapObjectKeys";
  import BlogPostCard from "@/components/BlogPostCard";
  import CButton from "@/components/CButton";
  import DiscordIcon from "@/assets/icons/discord.svg";
  import GamepadIcon from "@/assets/icons/gamepad.svg";
  import NoteIcon from "@/assets/icons/note.svg";
  import ArrowRightIcon from "@/assets/icons/arrow_right.svg";
  import WindowIcon from "@/assets/icons/window.svg";
  import ABCIcon from "@/assets/icons/abc.svg";
  import CodeIcon from "@/assets/icons/code.svg";
  import GlobeIcon from "@/assets/icons/globe.svg";
  import LanguageIcon from "@/assets/icons/language.svg";
  import PaintbrushIcon from "@/assets/icons/paintbrush.svg";
  import ShieldIcon from "@/assets/icons/shield.svg";

  export default {
    name: "IndexPage",
    layout: "none",
    components: {
      KNavigationBar,
      KFooter,
      BlogPostCard,
      GamepadIcon,
      NoteIcon,
      DiscordIcon,
      CButton,
      ArrowRightIcon,
      WindowIcon,
      ABCIcon,
      CodeIcon,
      GlobeIcon,
      LanguageIcon,
      PaintbrushIcon,
      ShieldIcon
    },
    async asyncData() {
      return {
        blogPosts: Array.from(await blogAPI.posts.browse({
          limit: 2,
          include: "slug,title,feature_image,reading_time,published_at"
        })).map(post => mapObjectKeys(blogAPI.mappings.post, post))
      };
    },
    data: () => ({
      blogPosts: []
    })
  };
</script>
