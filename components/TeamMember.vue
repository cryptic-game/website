<template>
  <div class="member">
    <img :src="'https://avatars.githubusercontent.com/u/' + githubId" alt="">
    <span class="name">{{ name }}</span>
    <span class="department">{{ department }}</span>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    name: {
      type: String,
      default: 'Loading...'
    },
    department: {
      type: String,
      default: 'Loading...'
    },
    githubId: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>

$cube: 0.625rem;
$transition: 250ms;
$transition-type: ease-in-out;

.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: $cube * 3;

  border-radius: $cube * 0.7;
  border: transparent solid $cube * 0.2;
  transition: border-color $transition $transition-type, background-color $transition $transition-type;

  &:hover {
    border-color: darken(#18740a, 10%);
    background-color: transparentize(darken(#18740a, 10%), 0.5);
    //cursor: pointer;
  }

  img {
    border-radius: 50%;
    width: 100%;
    margin-bottom: $cube * 1.5;
  }

  span.department {
    color: darken(#fff, 40%);
  }
}

</style>
