<template>
  <main class="index-page">
    <NavigationBar background-after-scroll />
    <video
      class="background-video"
      autoplay
      loop
      muted
      playsinline
      poster="@/assets/image/wp-1.jpg"
    >

      <source src="@/assets/video/background.mp4" type="video/mp4">
    </video>
    <section class="hero-section content">
      <span class="hero-section__slogan">
        <Typewriter :texts="subtitles" />
      </span>
      <div class="hero-section__left">
        <h1 class="hero-section__title" v-html="$t('home.openSource')" />
        <span class="hero-section__c2a">{{ $t("home.joinUs") }}</span>
        <CButton
          :size="2"
          class="hero-section__join-button"
          discord
          href="https://discord.gg/tN5Wcab"
          new-tab
          rel="noopener"
          target="_blank"
        >
          <template #icon>
            <DiscordIcon class="icon" />
          </template>
          {{ $t("home.joinDiscord") }}
        </CButton>
      </div>
    </section>
    <section class="section second-section">
      <div class="second-section__content content flex-with-gutter">
        <span>
          {{ $t("home.playEarlyVersion") }}
        </span>
        <span class="second-section__version fit-c-1"> Cryptic Pre Alpha 2 </span>
        <CButton blue outline text-color="white" :to="localePath('/blog')">
          <template #icon>
            <NoteIcon class="icon" />
          </template>
          {{ $t("home.readTheBlogPost") }}
        </CButton>
        <CButton
          green
          href="https://play.cryptic-game.net"
          outline
          rel="noopener"
          target="_blank"
          text-color="white"
        >
          <template #icon>
            <GamepadIcon class="icon" />
          </template>
          {{ $t("home.playNow") }}
        </CButton>
      </div>
    </section>
    <section class="section blog-section">
      <h2 class="section__title content">
        Blog
      </h2>
      <div class="blog-section__content">
        <div />
        <div class="blog-section__posts flex-with-gutter">
          <BlogPostCard
            v-for="post in blogPosts"
            :key="post.id.postId"
            :post="post"
          />
          <div
            v-if="blogPosts.length === 1"
            style="width: 100%; height: 100%; flex-grow: 1"
          />
        </div>
        <div class="blog-section__more-button-container">
          <nuxt-link
            class="blog-section__more-button link center-content"
            :to="localePath('/blog')"
          >
            <ArrowRightIcon class="icon" />
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="section desc-section">
      <div class="desc-section__content content">
        <div class="desc-section__part">
          <h2 class="desc-section__title">
            {{ $t("home.project") }}
          </h2>
          <p>
            {{ $t("home.projectDescription.initiated") }}
            <a class="link" href="https://the-morpheus.de/">The Morpheus</a>.
            {{ $t("home.projectDescription.announced") }}
            <a class="link" href="https://www.youtube.com/watch?v=iOJhuw7eABk">
              {{ $t("home.projectDescription.announcementVideo") }}
            </a>
            {{ $t("home.projectDescription.goal") }}
          </p>
          <p>
            {{ $t("home.projectDescription.daily") }}
          </p>
        </div>
        <div class="desc-section__part">
          <h2 class="desc-section__title">
            {{ $t("home.crypticDescription.what") }}
          </h2>
          <p>
            {{ $t("home.crypticDescription.long") }}
          </p>
          <p>
            {{ $t("home.crypticDescription.help") }}
          </p>
        </div>
      </div>
    </section>
    <section class="section groups-section">
      <div class="content">
        <h2 class="section__title">
          {{ $t("home.groups.groups") }}
        </h2>
        <div class="groups-section__groups">
          <div class="groups-section__group">
            <WindowIcon class="icon" />
            <h3 class="groups-section__group-title">
              Frontend
            </h3>
            <p class="groups-section__group-text">
              {{ $t("home.groups.frontendDescription") }}
            </p>
          </div>
          <div class="groups-section__group">
            <CodeIcon class="icon" />
            <h3 class="groups-section__group-title">
              Backend
            </h3>
            <p class="groups-section__group-text">
              {{ $t("home.groups.backendDescription") }}
            </p>
          </div>
          <div class="groups-section__group">
            <GamepadIcon class="icon" />
            <h3 class="groups-section__group-title">
              Gamedesign
            </h3>
            <p class="groups-section__group-text">
              {{ $t("home.groups.gamedesignDescription") }}
            </p>
          </div>
          <div class="groups-section__group">
            <PaintbrushIcon class="icon" />
            <h3 class="groups-section__group-title">
              Design
            </h3>
            <p class="groups-section__group-text">
              {{ $t("home.groups.designDescription") }}
            </p>
          </div>
          <div class="groups-section__group">
            <GlobeIcon class="icon" />
            <h3 class="groups-section__group-title">
              Website
            </h3>
            <p class="groups-section__group-text">
              {{ $t("home.groups.websiteDescription") }}
            </p>
          </div>
          <div class="groups-section__group">
            <ShieldIcon class="icon" />
            <h3 class="groups-section__group-title">
              Security
            </h3>
            <p class="groups-section__group-text">
              {{ $t("home.groups.securityDescription") }}
            </p>
          </div>
          <div class="groups-section__group">
            <LanguageIcon class="icon" />
            <h3 class="groups-section__group-title">
              Translation
            </h3>
            <p class="groups-section__group-text">
              {{ $t("home.groups.translationDescription") }}
            </p>
          </div>
          <div class="groups-section__group">
            <ABCIcon class="icon" />
            <h3 class="groups-section__group-title">
              Correction
            </h3>
            <p class="groups-section__group-text">
              {{ $t("home.groups.correctionDescription") }}
            </p>
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
          <h3 class="faq-section__question">
            {{ $t("faq.communityProject.communityProject") }}
          </h3>
          {{ $t("faq.communityProject.description") }}
          <a
            class="link"
            href="https://docs.google.com/document/d/17ac_FxqzxQT7DbrJf-xyr8B_ySuvDZhagqP5w10oeyw"
            target="_blank"
          >{{ $t("faq.communityProject.sheet") }}</a>.
        </div>
        <div>
          <h3 class="faq-section__question">
            {{ $t("faq.requirements.requirements") }}
          </h3>
          {{ $t("faq.requirements.description") }}
        </div>
        <div>
          <h3 class="faq-section__question">
            {{ $t("faq.beginner.beginner") }}
          </h3>
          {{ $t("faq.beginner.description") }}
        </div>
        <div class="more-at-faq">
          <span>{{ $t("faq.more.more") }}
            <nuxt-link :to="localePath('/faq')" class="link">{{
              $t("faq.more.faqPage")
            }}</nuxt-link>.
          </span>
        </div>
      </div>
    </section>
    <section class="footer-section">
      <Footer />
    </section>
  </main>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'
import BlogPostCard from '@/components/BlogPostCard'
import CButton from '@/components/CButton'
import DiscordIcon from '@/assets/icons/discord.svg'
import GamepadIcon from '@/assets/icons/gamepad.svg'
import NoteIcon from '@/assets/icons/note.svg'
import ArrowRightIcon from '@/assets/icons/arrow_right.svg'
import WindowIcon from '@/assets/icons/window.svg'
import ABCIcon from '@/assets/icons/abc.svg'
import CodeIcon from '@/assets/icons/code.svg'
import GlobeIcon from '@/assets/icons/globe.svg'
import LanguageIcon from '@/assets/icons/language.svg'
import PaintbrushIcon from '@/assets/icons/paintbrush.svg'
import ShieldIcon from '@/assets/icons/shield.svg'
import Typewriter from '@/components/Typewriter'
import { getDetails } from '@/assets/js/BlogApiConfig'
export default {
  name: 'IndexPage',
  components: {
    NavigationBar,
    Footer,
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
    ShieldIcon,
    Typewriter
  },
  layout: 'none',
  data: () => ({
    blogPosts: [],
    subtitles: [
      'Don’t play the game, create the game',
      'the cyberwar game',
      'the Hacker Browsergame',
      'get hacked!',
      "don't get hacked!",
      'the Hacker playground',
      'The cryptic way of hacking',
      'The art of hacking',
      'The Cyberspace',
      'Game of Cyberwar',
      'Be the most feared hacker',
      'The League of extraordinary Hackers',
      'Hackelicious',
      'be a 1 or 0',
      'Blackhack',
      'world of warhack',
      'Hackback',
      'Hashback'
    ]
  }),
  async fetch () {
    const lang = this.$i18n.locale
    const response = await fetch(getDetails().blog_api_url + lang)
    let posts = await response.json()
    const postsFiltered = []
    let i = 0
    while (postsFiltered.length !== 2 && i < posts.length) {
      const post = posts[i]
      if (post.published === true) {
        postsFiltered.push(post)
      }
      i++
    }
    posts = postsFiltered
    this.blogPosts = posts
  },
  created () {
    this.shuffleSubtitles()
  },
  methods: {
    shuffleSubtitles () {
      // Fisher-Yates shuffle algorithm
      for (let i = this.subtitles.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        // swap elements on positions i and j
        [this.subtitles[i], this.subtitles[j]] = [
          this.subtitles[j],
          this.subtitles[i]
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@use "../assets/css/mixins/screenSize";
.icon{
  max-width: 100%;
  max-height: 13vh;
}
.index-page {
  width: 100%;

  ::selection {
    background-color: var(--colors-green);
  }
}
.fit-c-1{
  min-width: fit-content;
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
  padding: 20px 20px 10vh;

  position: relative;

  .hero-section__content {
    position: relative;
    padding: 20px 20px 10vh;
  }

  .hero-section__slogan {
    display: inline-block;
    max-width: 55vw;
    position: absolute;
    right: 5%;
    font-size: 2.5rem;
    text-align: right;

    & > span:nth-child(2) {
      position: relative;

      right: -40px;
    }
  }

  .hero-section__left {
    position: absolute;
    bottom: 15vh;

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
      max-width: 100%;
      max-height: 20vh;
    }
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
  background-color: #000;
  $more-button-container-width: 70px;
  padding-bottom: 50px;
  padding-top: 50px;

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
    align-items: center;
    min-width: 0;
    width: var(--content-width);
    @media (min-width:1000px){
      max-width:965px;
    }
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
  padding-bottom: 50px;
  padding-top: 50px;

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

    p {
      line-height: 25px;
    }
  }

  .desc-section__title {
    font-size: 2rem;
    margin-top: 0;
    text-align: left;
  }
}

.groups-section {
  background-color: #000;
  padding-bottom: 50px;

  .groups-section__groups {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    margin: -20px;
    width: calc(100% + 40px);

    .groups-section__group {
      padding: 20px;

      width: 50%;
      min-width: 300px;

      .groups-section__group-title {
        margin: 20px auto 0;
        width: fit-content;

        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 2px;
      }

      .groups-section__group-text {
        line-height: 25px;
        text-align: justify;
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
  background-color: #000;
  line-height: 25px;

  div {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: justify;
    line-height: 25px;

    h3.faq-section__question {
      margin-top: 25px;
      margin-bottom: 10px;
      font-size: 1.3rem;
      text-align: left;
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

.footer-section {
  background-color: black;
  position: relative;
  z-index: 1;

  &::v-deep .k-footer {
    margin: 0 auto;
    padding-bottom: 20px;
  }
}
</style>
