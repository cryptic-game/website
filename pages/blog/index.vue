<template>
  <div class="posts-page">
    <KNavigationBar title="Blog"/>
    <div class="content">
      <h1 class="heading--1">
        Blog
      </h1>
      <div class="posts-page__posts">
        <BlogPostCard
          v-for="post in posts"
          :key="post.slug"
          class="posts-page__post"
          image-height="50vh"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .posts-page__posts {
    margin-top: 40px;

    .posts-page__post {
      width: 100%;
      margin-bottom: var(--gutter-size);
    }
  }
</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar.vue";
  import BlogPostCard from "@/components/BlogPostCard.vue";

  export default {
    name: "PostsPage",
    components: { BlogPostCard, KNavigationBar },
    async asyncData({ $axios }) {
      return {
        posts: await $axios.$get("/api/posts")
      };
    }
  };
</script>
