<template>
  <header>
    <img src="/logo.svg" alt="Best Selling Books logo" class="logo" />
    <h1>NYT Best-Selling Books</h1>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
header {
  width: 100vw;
  height: 68px;
  display: flex;
  background: var(--color-dark);
  padding: 0 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

img.logo {
  width: 50px;
  margin-right: 16px;
}

h1 {
  color: var(--color-light);
  font-family: var(--font-dancing);
}
</style>
