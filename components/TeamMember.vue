<template>
  <div class="member">
    <div class="image">
      <img :src="'https://github.com/' + githubName + '.png?size=44'" alt="">
    </div>
    <div class="info">
      <span>{{ name }}{{ role ? ' - ' + role : '' }}</span>
      <a :href="'https://github.com/' + githubName">Github</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TeamMember",
    props: {
      name: {
        type: String,
        default: "Loading..."
      },
      role: {
        type: String,
        default: "Loading..."
      },
      githubName: {
        type: String,
        default: "Loading..."
      }
    }
  };
</script>

<style lang="scss" scoped>
div.member {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;

  div.image {
    margin-right: 10px;
    width: 44px;
    height: 44px;

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }

  div.info {
    display: flex;
    flex-direction: column;
  }
}
</style>
