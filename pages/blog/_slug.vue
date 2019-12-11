<template>
  <div class="post-page">
    <KNavigationBar title="Blog"/>
    <article class="content formatted">
      <img :src="post.image" class="post-page__image"/>
      <span>{{ new Date(post.publishedAt).toLocaleDateString() }}</span>
      <h1 class="post-page__title">
        {{ post.title }}
      </h1>
      <span>by {{ post.authors.map(author => author.name).join(", ") }} | reading time:
        {{ Math.max(1, post.readingTime) }} minute{{ Math.max(1, post.readingTime) === 1 ? "" : "s" }}</span>
      <div class="post-page__content" v-html="post.html">
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
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

<script>
  import KNavigationBar from "kiste/components/KNavigationBar.vue";
  import { blogAPI } from "@/assets/js/blog";
  import { mapObjectKeys } from "@/assets/js/mapObjectKeys";

  export default {
    name: "PostPage",
    components: { KNavigationBar },
    async asyncData ({ route }) {
      return {
        post: mapObjectKeys(blogAPI.mappings.post, await blogAPI.posts.read({
          slug: route.params.slug,
          include: "title,html,published_at,authors"
        }))
      };
    },
    data: () => ({ post: {} })
  };
</script>
