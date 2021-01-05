<template>
  <div class="blog-post-card">
    <img :alt="`Title Image from: ${post.title}`" :src="post.image" :style="imageStyle" class="blog-post-card__image"/>
    <div class="blog-post-card__info">
      <span class="blog-post-card__date">{{ new Date(post.publishedAt).toLocaleDateString() }}</span>
      <span class="blog-post-card__title">
        {{ post.title }}
      </span>
      <span class="blog-post-card__excerpt">{{ post.excerpt }}</span>
      <div class="blog-post-card__footer">
        <span class="blog-post-card__reading-time">
          <strong>{{ Math.max(1, post.readingTime) }} minute{{
            Math.max(1, post.readingTime) === 1 ? "" : "s"
          }}</strong>
          reading time
        </span>
        <nuxt-link :to="`/blog/${post.slug}`" class="blog-post-card__link link">
          Read
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  color: white;
  margin-bottom: 8px;
}

.blog-post-card__footer {
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
}

.blog-post-card__link {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
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
    computed: {
      imageStyle() {
        return {
          height: this.imageHeight
        };
      }
    }
  };
</script>
