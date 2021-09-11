<template>
  <div class="posts-page">
    <NavigationBar title="Blog" />
    <div class="content">
      <h1 class="heading--1">
        Blog
      </h1>
      <div class="posts-page__posts">
        <BlogPostCard
          v-for="post in publishedPosts"
          :key="post.id.postId"
          :post="post"
          class="posts-page__post"
          image-height="50vh"
        />
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
    const response = await fetch('https://api.admin.staging.cryptic-game.net/website/blog/de')
    this.posts = await response.json()
  },
  head () {
    return {
      titleTemplate: 'Blog - %s'
    }
  },
  computed: {
    // eslint-disable-next-line object-shorthand
    publishedPosts: function () {
      return this.posts.filter(post => post.published === true)
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
