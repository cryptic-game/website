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
          :post="post"
          class="posts-page__post"
          image-height="50vh"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import KNavigationBar from "@/components/KNavigationBar";
  import { blogAPI } from "@/assets/js/blog";
  import { mapObjectKeys } from "@/assets/js/mapObjectKeys";
  import BlogPostCard from "@/components/BlogPostCard";

  export default {
    name: "PostsPage",
    components: { BlogPostCard, KNavigationBar },
    async asyncData() {
      return {
        posts: Array.from(await blogAPI.posts.browse({
          include: "slug,title,feature_image,reading_time,published_at"
        })).map(post => mapObjectKeys(blogAPI.mappings.post, post))
      };
    },
    data: () => ({
      posts: []
    }),
    head() {
      return {
        titleTemplate: "Blog - %s"
      };
    }
  };
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
