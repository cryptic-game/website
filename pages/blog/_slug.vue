<template>
  <div class="post-page">
    <article class="post content formatted">
      <img :src="post.image" class="post__image"/>
      <span>{{ new Date(post.publishedAt).toLocaleDateString() }}</span>
      <h1 class="post__title">
        {{ post.title }}
      </h1>
      <span>by {{ post.authors.map(author => author.name).join(", ") }} | reading time:
        {{ Math.max(1, post.readingTime) }} minute{{ Math.max(1, post.readingTime) === 1 ? "" : "s" }}</span>
      <div class="post__content" v-html="post.html">
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
  .post {

  }

  .post__image {
    width: 100%;
    max-height: 75vh;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .post__title {
    margin-top: 0;
    margin-bottom: 5px;
  }

  .post__content {
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
