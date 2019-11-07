<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  // Not scoped

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;

    background: transparent;

    z-index: 0;
  }

  .grid-container {
    max-width: 100%;
    width: 1160px;
    padding: 20px;

    margin: 0 auto;
  }
</style>
