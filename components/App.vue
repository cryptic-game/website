<template>
  <div class="app">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @use "../assets/css/mixins/screenSize";
  @use "../assets/css/mixins/fillScreen";
  @use "../assets/css/formatting";
  @use "../assets/css/elements";
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, .app {
    @include fillScreen.fillScreen;
    z-index: 0;
    font-size: 16px;
  }
  .app {
    @include fillScreen.fillScreen;
    --colors-background-c: white;
    --colors-background-a: #1d1c1c;
    --colors-background: black;
    --colors-discord-c: white;
    --colors-discord-a: #4b58e7;
    --colors-discord: #5865F2;
    --colors-blue-c: black;
    --colors-blue-a: #3695d8;
    --colors-blue: #39a8f3;
    --colors-green-c: black;
    --colors-green-a: #2ab662;
    --colors-green: #2ECC71;
    --colors-link-c: black;
    --colors-link-a: #3695d8;
    --colors-link: #39a8f3;
    --content-width: 1000px;
    --content-padding: 20px;
    --gutter-size: 40px;
    background: var(--colors-background);
    color: var(--colors-background-c);
    overflow: auto;
    position: relative;
    ::selection {
      background-color: var(--colors-background-a);
    }
  }
</style>
