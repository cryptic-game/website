<template>
  <div>
    <GlobeIcon width="2.2rem" height="2.2rem" class="globe" @click="toggle"/>
    <div v-if="active" class="languages">
      <nuxt-link
        v-for="language in languages"
        :key="language.id"
        :to="switchLocalePath(language.id)"
        class="languageItem"
      >
        {{ language.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import GlobeIcon from "@/assets/icons/globe.svg";
  export default {
    name: "LanguageSwitcher",
    components: { GlobeIcon },
    data() {
      return {
        active: false,
        languages: [
          { id: "en", name: "English" },
          { id: "de", name: "Deutsch" }
        ]
      };
    },
    methods: {
      toggle() {
        console.log(1);
        this.active = !this.active;
      }
    }
  };
</script>

<style lang="scss">
    .languages {
        position: fixed;
        display: flex;
        flex-direction: column;
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
    }

    .languageItem {
        padding: 5px;
        border-top: solid white 1px;
        color: var(--colors-background-c);
        text-decoration: none;
    }

    .globe:hover {
       border-bottom: solid white 1px;
    }
</style>
