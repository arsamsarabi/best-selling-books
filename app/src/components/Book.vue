<template>
  <div class="book-wrapper">
    <img :src="book.book_image" class="image" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import type { Book as BookType } from "@/types";

@Options({
  props: {
    book: null,
  },
})
export default class Book extends Vue {
  book!: BookType;
}
</script>

<style scoped lang="scss">
.book-wrapper {
  cursor: pointer;
}

.image {
  width: 128px;
  height: 193px;
  box-shadow: 2px 2px 8px 0 rgba(#b97a95, 0.5);
}
</style>
