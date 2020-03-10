<template>

  <div class="member">

    <div class="image">
      <img :alt="name + ' Github\'s Avatar'" :src="'https://github.com/' + githubName + '.png?size=44'">
    </div>

    <div class="info">
      <span>{{ name }}{{role ? ' - ' + role : ''}}</span>
      <a :href="'https://github.com/' + githubName">Github</a>
    </div>

  </div>

</template>

<script>
  export default {
    name: "TeamMember",
    props: {
      name: String,
      role: String,
      githubName: String
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

      img {
        border-radius: 50%;
      }
    }

    div.info {
      display: flex;
      flex-direction: column;
    }
  }
</style>
