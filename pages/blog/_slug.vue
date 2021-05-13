<template>
  <div class="post-page">
    <KNavigationBar title="Blog" />
    <article class="content formatted">
      <img :alt="`Title Image from: ${post.title}`" :src="post.image" class="post-page__image">
      <span>{{ new Date(post.publishedAt).toLocaleDateString() }}</span>
      <h1 class="post-page__title">
        {{ post.title }}
      </h1>
      <span>by {{ post.authors.map(author => author.name).join(", ") }} | reading time:
        {{ Math.max(1, post.readingTime) }} minute{{ Math.max(1, post.readingTime) === 1 ? "" : "s" }}</span>
      <div class="post-page__content" v-html="post.html" />
    </article>
  </div>
</template>

<script>
import KNavigationBar from '@/components/KNavigationBar'
import { blogAPI } from '@/assets/js/blog'
import { mapObjectKeys } from '@/assets/js/mapObjectKeys'

export default {
  name: 'PostPage',
  components: { KNavigationBar },
  async asyncData ({ route }) {
    return {
      post: mapObjectKeys(blogAPI.mappings.post, await blogAPI.posts.read({
        slug: route.params.slug,
        include: 'title,html,published_at,authors'
      }))
    }
  },
  data: () => ({
    post: {}
  }),
  head () {
    const content = this.post.excerpt.replace(/\r?[\n|\r]/g, ' ').split(' ').filter(data => data).join(' ') || ''
    return {
      titleTemplate: `${this.post.title} - %s`,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.post.title },
        { hid: 'description', name: 'description', content },
        { hid: 'og:description', name: 'og:description', content },
        { hid: 'twitter:description', name: 'twitter:description', content },
        { hid: 'og:url', name: 'og:url', content: `https://cryptic-game.net/blog/${this.post.slug}` },
        { hid: 'twitter:url', name: 'og:url', content: `https://cryptic-game.net/blog/${this.post.slug}` },
        { hid: 'og:image', name: 'og:image', content: this.post.image || 'https://cryptic-game.net/open-graph.jpg' },
        {
          hid: 'twitter:image',
          name: 'og:image',
          content: this.post.image || 'https://cryptic-game.net/open-graph.jpg'
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

.post-page__title {
  margin-top: 0;
  margin-bottom: 5px;
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
