<template>
  <div class="blog-post-card">
    <img alt="Blog post image" :src="post.image || 'https://cryptic-game.net/open-graph.jpg'" :style="imageStyle" class="blog-post-card__image">
    <div class="blog-post-card__info">
      <span class="blog-post-card__title">{{ post.title }}</span>
      <small class="blog-post-card__date">{{ new Date(post.created).toLocaleDateString() }}</small>
      <span>{{ post.description }}</span>
      <div class="blog-post-card__footer">
        <nuxt-link :to="localePath(`/blog/${post.id.postId}`)" class="blog-post-card__link link">
          Read
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostCard',
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
    imageStyle () {
      return {
        height: this.imageHeight
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-post-card {
  background: var(--colors-background-a);
  color: white;

  overflow: hidden;
  position: relative;
  width: 100%;

  border-radius: 3px;
  float: left;
}
@media all and (max-width: 1170px) and (orientation:landscape)
{
    .blog-post-card{
    max-width: 36vw;
    min-width: 18.4rem;
    margin-right: 5vw;
    }
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
  min-height: 4rem;
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
