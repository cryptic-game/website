<template>
  <div class="posts-page">
    <NavigationBar title="Blog" />
    <div class="content">
      <h1 class="heading--1">
        Blog
      </h1>
      <div class="posts-page__posts">
        <div v-for="post in posts" :key="post.title">
          <BlogPostCard
            v-if="post.published"
            :key="post.id.postId"
            :post="post"
            class="posts-page__post"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import BlogPostCard from '@/components/BlogPostCard'
function mergePostArraysByIdPreferred (PreferredArray, fallbackArray) {
  const map = new Map()
  PreferredArray.forEach(item => map.set(item.id.postId, item))
  fallbackArray.forEach((item) => {
    if (!map.has(item.id.postId)) {
      map.set(item.id.postId, item)
    }
  })
  const reslt = Array.from(map.values())
  return reslt
}
export default {
  name: 'PostsPage',
  components: { BlogPostCard, NavigationBar },
  data: () => ({
    posts: []
  }),
  async fetch () {
    const lang = this.$i18n.locale
    const responsePreferredF = await fetch('https://api.admin.staging.cryptic-game.net/website/blog/' + lang)
    const responsePreferred = await responsePreferredF.json()
    const responseFallbackF = await fetch('https://api.admin.staging.cryptic-game.net/website/blog/en')
    const responseFallback = await responseFallbackF.json()
    const response = mergePostArraysByIdPreferred(responsePreferred, responseFallback)
    this.posts = response
  },
  head () {
    return {
      titleTemplate: 'Blog - %s'
    }
  }
}
</script>

<style lang="scss" scoped>
.posts-page__posts {
  margin-top: 40px;

  .posts-page__post {
    width: 100%;
    margin-bottom: var(--gutter-size);
  }
}
</style>
