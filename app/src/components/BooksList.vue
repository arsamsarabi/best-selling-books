<template>
  <div class="wrapper">
    <div v-if="list.list_image">
      <img :src="list.list_image" class="book-list-image" alt="list image" />
    </div>
    <h2 class="books-list-title">{{ list.display_name }}</h2>
    <div class="books-list">
      <div v-for="book in list.books" :key="book.updated_date">
        <Book :book="book" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import type { BestSellersList } from "@/types";
import Book from "@/components/Book.vue";

@Options({
  components: { Book },
  props: {
    list: null,
  },
})
export default class BooksList extends Vue {
  list!: BestSellersList;
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  border-top: 4px solid rgba(#b97a95, 0.5);
  border-radius: 8px;
}

img.book-list-image {
  width: 50px;
}

.books-list-title {
  font-weight: 700;
  margin: 4px 0;
  color: transparent;
  background: linear-gradient(to right, #716f81, #b97a9579);
  background-clip: text;
}

.books-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 8px 0;
}
</style>
