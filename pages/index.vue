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
      <section class="section hero-section">
        <div class="hero-section__content centered-container">
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
      <section class="section blog-section">
        <h2 class="section__title centered-container">
          Blog
        </h2>
        <div class="blog-section__content">
          <div></div>
          <div class="blog-section__posts">
            <div v-for="(post, i) in blogPosts" :key="i" class="blog-section__post">
              <img :src="post.image" class="post__image"/>
              <div class="post__info">
                <span class="post__date">{{ new Date(post.date).toLocaleDateString() }}</span>
                <span class="post__title">
                  {{ post.title }}
                </span>
                <div class="post__footer">
                  <span class="post__read-time">
                    <b>{{ post.readTime }} minute{{ post.readTime === 1 ? "" : "s" }}</b> read time
                  </span>
                  <nuxt-link class="post__link link" :to="getPostLink(post.slug)">
                    Read
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-section__more-button-container">
            <nuxt-link class="blog-section__more-button link" to="/blog">
              <ArrowRightIcon class="icon"/>
            </nuxt-link>
          </div>
        </div>
      </section>
      <section class="section desc-section">
        <div class="desc-section__content centered-container">
          <div class="desc-section__part">
            <h2 class="desc-section__title">
              The Project
            </h2>
            <p>
              The project "Cryptic" was initiated by the german YouTuber
              <a class="link" href="https://the-morpheus.de/">The Morpheus</a>. It was first announced on October 15, 2017 with an
              <a class="link" href="https://www.youtube.com/watch?v=iOJhuw7eABk">announcement video (german)</a>. The goal of the
              project is to create a unique experience for the players, but primarily make it possible for people
              interested in coding and computer science to develop and improve their existing skills and create something
              great. This includes the determining of the game content, the design, sounds, the programming, the testing
              and the server maintenance.
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
    overflow: auto;
    padding: 20px 0;

    .section__title {
      margin-top: 0;
      margin-bottom: 1.2rem;
      font-size: 3rem;
    }
  }

  .hero-section {
    background: transparent;
    height: 100vh;

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

    @include notMobile {
      height: 150px;
    }

    .second-section__content {
      height: 100%;

      display: flex;
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

        @include mobile {
          margin-bottom: 20px;
          margin-right: 0;
        }
      }

      @include mobile {
        flex-direction: column;
        justify-content: center;
      }
    }

    @include mobile {
      padding: 20px 0;
    }
  }

  .blog-section {
    $more-button-container-width: 70px;

    .blog-section__content {
      display: flex;
      justify-content: center;

      @include mobile {
        flex-direction: column;

        padding: 0 $content-padding;
      }

      & > div:nth-child(1) {
        width: $more-button-container-width;
      }
    }

    .blog-section__posts {
      display: flex;
      align-items: stretch;

      width: $content-width;

      @include mobile {
        flex-wrap: wrap;
        width: 100%;
      }
    }

    .blog-section__post {
      background: $black-brighter;
      color: white;

      overflow: hidden;
      position: relative;
      width: 100%;

      border-radius: 3px;

      &:not(:last-child) {
        margin-right: $gutter-size;

        @include mobile {
          margin-right: 0;
          margin-bottom: $gutter-size;
        }
      }

      .post__info {
        padding: 20px;
      }

      .post__image {
        height: 250px;
        width: 100%;
        object-fit: cover;
      }

      .post__date {
        display: block;
      }

      .post__title {
        display: block;

        font-size: 1.2rem;
        font-weight: bold;

        color: white;
      }

      .post__footer {
        display: flex;
        justify-content: space-between;

        margin-top: 20px;
      }

      .post__link {
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }

    .blog-section__more-button-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: $more-button-container-width;

      @include mobile {
        width: 100%;
        height: $more-button-container-width;
        flex-direction: column;
      }
    }

    .blog-section__more-button {
      $size: 45px;
      background-color: #1d1d1d;
      color: white;
      border-radius: 50%;

      width: $size;
      height: $size;

      display: flex;
      align-items: center;
      justify-content: center;

      @include mobile {
        transform: rotate(90deg);
      }
    }
  }

  .desc-section {
    background: rgba(0, 0, 0, 0.8);

    .desc-section__content {
      display: flex;

      @include mobile {
        flex-wrap: wrap;
      }
    }

    .desc-section__part {
      width: 100%;
      text-align: justify;

      &:not(:last-child) {
        margin-right: $gutter-size;

        @include mobile {
          margin-right: 0;
          margin-bottom: $gutter-size / 2;
        }
      }
    }

    .desc-section__title {
      font-size: 2rem;
      margin-top: 0;
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
  import ArrowRightIcon from "@/assets/icons/arrow_right.svg";

  export default {
    components: { GamepadIcon, NoteIcon, DiscordIcon, CButton, ArrowRightIcon },
    data: () => ({
      blogPosts: [
        {
          slug: "/pre-alpha-1-now-playable",
          title: "Pre-Alpha 1 now playable",
          date: "2019-06-05",
          readTime: 1,
          image: "https://github.com/cryptic-game/graphics/blob/master/wallpaper/Cryptic%20Wallpaper%201b.png?raw=true"
        },
        {
          slug: "/pre-alpha-1-now-playable",
          title: "Pre-Alpha 1 now playable",
          date: "2019-06-11",
          readTime: 2,
          image: "https://github.com/cryptic-game/graphics/blob/master/wallpaper/Cryptic%20Wallpaper%201b.png?raw=true"
        }
      ]
    }),
    methods: {
      getPostLink(slug) {
        return `/blog/${slug}`;
      }
    }
  };
</script>
