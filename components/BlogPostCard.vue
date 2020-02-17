<template>
  <div class="blog-post-card">
    <nuxt-link :to="`/blog/${post.slug}`">
      <img
        class="blog-post-card__image"
        :alt="postImage === null ? '' : postImage.altText"
        :src="`/uploads/${post.imageID}`"
        :style="imageStyle"
      />
    </nuxt-link>
    <nuxt-link class="link blog-post-card__info" :to="`/blog/${post.slug}`">
      <span class="blog-post-card__date">{{ new Date(parseInt(post.publishedAt)).toLocaleDateString() }}</span>
      <span class="blog-post-card__title">
          {{ post.title }}
        </span>
      <span class="blog-post-card__excerpt">{{ post.excerpt }}</span>
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
  .blog-post-card {
    background: var(--colors-background-a);
    color: white;

    overflow: hidden;
    position: relative;
    width: 100%;

    border-radius: 3px;
  }

  .blog-post-card__info {
    padding: 20px;
    display: block;
    color: white;
  }

  .blog-post-card__excerpt {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    display: inline-block;
  }

  .blog-post-card__image {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }

  .blog-post-card__date {
    display: block;
  }

  .blog-post-card__title {
    display: block;

    font-size: 1.2rem;
    font-weight: bold;

    margin-bottom: 8px;
  }
</style>

<script>
  export default {
    name: "BlogPostCard",
    props: {
      post: {
        type: Object,
        required: true
      },
      imageHeight: {
        type: String,
        default: undefined
      }
    },
    data: () => ({
      postImage: null,
      postImagePromise: null
    }),
    watch: {
      post(post, oldPost) {
        if (this.postImage === null || oldPost.imageID !== this.postImage.id) {
          if (this.postImagePromise !== null) {
            this.postImagePromise.cancel();
          }

          this.postImagePromise = this.$axios.$get(`/api/uploads/${post.imageID}`);
        }
      }
    },
    computed: {
      imageStyle () {
        return { height: this.imageHeight };
      }
    }
  };
</script>
