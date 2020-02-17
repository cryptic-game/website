<template>
  <div class="post-page">
    <KNavigationBar title="Blog"/>
    <article class="content formatted">
      <img
        class="post-page__image"
        :src="`/api/posts/${$route.params.slug}/image/content`"
        :alt="post.image.altText"
      />
      <span>{{ new Date(post.publishedAt).toLocaleDateString() }}</span>
      <h1 class="post-page__title">
        {{ post.title }}
      </h1>
      <div class="post-page__content">
        {{ post.content }}
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
  }
</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar.vue";

  export default {
    name: "PostPage",
    components: { KNavigationBar },
    async asyncData({ $axios, $route }) {
      return {
        post: {
          ...await $axios.$get(`/api/posts/${$route.params.slug}`),
          image: await $axios.$get(`/api/posts/${$route.params.slug}/image`),
          content: await $axios.$get(`/api/posts/${$route.params.slug}/content`)
        }
      };
    }
  };
</script>
