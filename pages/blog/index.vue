<template>
  <div class="posts-page">
    <div class="centered-container posts">
      <BlogPostCard
        v-for="post in posts"
        :key="post.slug"
        class="posts__post"
        image-height="50vh"
        :post="post"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/mobile";
  @import "~@/assets/css/variables";

  .posts {
    .posts__post {
      width: 100%;
      margin-bottom: $gutter-size;
    }
  }
</style>

<script>
  import { blogAPI } from "@/assets/js/blog";
  import { mapObjectKeys } from "@/assets/js/mapObjectKeys";
  import BlogPostCard from "@/components/BlogPostCard";

  export default {
    name: "PostsPage",
    components: { BlogPostCard },
    async asyncData() {
      return {
        posts: Array.from(await blogAPI.posts.browse({
          include: "slug,title,feature_image,reading_time,published_at"
        })).map(post => mapObjectKeys(blogAPI.mappings.post, post))
      };
    },
    data: () => ({
      posts: []
    })
  };
</script>
