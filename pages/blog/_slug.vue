<template>
  <div class="post-page">
    <article class="post centered-container formatted">
      <span>{{ new Date(post.publishedAt).toLocaleDateString() }}</span>
      <h1 class="post__title">{{ post.title }}</h1>
      <span>by {{ post.authors.map(author => author.name).join(", ") }} | reading time:
        {{ Math.max(1, post.readingTime) }} minute{{ Math.max(1, post.readingTime) === 1 ? "" : "s" }}</span>
      <div class="post__content" v-html="post.html">
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
  .post {
    h1 {
      font-size: 3rem;
      font-weight: bold;
    }
  }

  .post__title {
    margin-top: 0;
    margin-bottom: 5px;
  }

  .post__content {
    margin-top: 40px;
  }
</style>

<script>
  import { blogAPI } from "@/assets/js/blog";
  import { mapObjectKeys } from "@/assets/js/mapObjectKeys";

  export default {
    name: "PostPage",
    async asyncData({ route }) {
      return {
        post: mapObjectKeys(blogAPI.mappings.post, await blogAPI.posts.read({
          slug: route.params.slug,
          include: "title,html,published_at,authors"
        }))
      };
    },
    data: () => ({
      post: {}
    })
  };
</script>
