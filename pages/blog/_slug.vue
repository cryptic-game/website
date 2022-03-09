/* eslint-disable vue/no-v-html */
<template>
  <div class="post-page">
    <NavigationBar title="Blog" />
    <article class="content formatted">
      <img :alt="`Title Image from: ${post.title}`" :src="post.image" class="post-page__image"><br>
      <span>{{ Intl.DateTimeFormat($i18n.localeProperties.iso).format(new Date(post.created)) }}</span>
      <h2 class="post-page__title">
        {{ post.title || "untitled post" }}
      </h2>
      <span class="post-page_description">{{ post.description }}</span>
      <span v-if="post.author != undefinded">by {{ post.author }} </span>
      <div class="post-page__content" v-html="post.content" />
    </article>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'PostPage',
  components: { NavigationBar },
  asyncData ({ route }) {
    return { slug: route.params.slug }
  },
  data: () => ({
    post: {}
  }),
  async fetch () {
    let lang = this.$i18n.locale
    let error
    const response = await fetch('https://staging-admin-api.cryptic-game.net/website/blog/' + lang + '/' + this.slug).catch((err) => { error = err })

    // eslint-disable-next-line prefer-const
    let post = await response.json()

    // eslint-disable-next-line eqeqeq
    if (post.title == undefined || post == 0 || error != undefined) {
      lang = 'en'
      const response = await fetch('https://staging-admin-api.cryptic-game.net/website/blog/en/' + this.slug)
      post = await response.json()
    }

    this.post = post
  },
  head () {
    const content = this.post.description
    return {
      titleTemplate: `${this.post.title} - %s`,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.post.title },
        { hid: 'description', name: 'description', content },
        { hid: 'og:description', name: 'og:description', content },
        { hid: 'twitter:description', name: 'twitter:description', content },
        { hid: 'og:url', name: 'og:url', content: `https://cryptic-game.net/blog/${this.slug}` },
        { hid: 'twitter:url', name: 'og:url', content: `https://cryptic-game.net/blog/${this.slug}` },
        { hid: 'og:image', name: 'og:image', content: this.post.image || 'https://cryptic-game.net/open-graph.jpg' },
        {
          hid: 'twitter:image',
          name: 'og:image',
          content: this.post.image || 'https://cryptic-game.net/open-graph.jpg'
        },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          content: new Date(this.post.created).toString()
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.post-page__image {
  width: 100%;
  max-height: 75vh;
  object-fit: cover;
  margin-bottom: 20px;
}
.post-page_description{
  margin-top: 14px;
  margin-bottom: 14px;
  background: rgb(17, 17, 17);
  color: white;
  padding: 8px;
  border-radius: 8px;
}
.post-page__title {
  margin-top: 0;
  margin-bottom: 5px;
}

.post-page__content ::v-deep img, ::v-deep image {
  max-width: 100%;
}

.post-page__content {
  margin-top: 40px;

  ::v-deep {
    .kg-card {
      margin: 20px;
    }

    .kg-image-card {
      width: 100%;
      margin: 0;

      .kg-image {
        max-height: 75vh;
        max-width: 100%;
        object-fit: cover;
      }

      figcaption {
        margin-top: 5px;
        margin-left: 1.1rem;
      }
    }
  }
}
</style>
