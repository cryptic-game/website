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

export default {
  name: 'PostsPage',
  components: { BlogPostCard, NavigationBar },
  data: () => ({
    posts: []
  }),
  async fetch () {
    const lang = this.$i18n.localeProperties.iso.split('-')[0]
    const response = await fetch('https://api.admin.staging.cryptic-game.net/website/blog/' + lang)
    this.posts = await response.json()
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
