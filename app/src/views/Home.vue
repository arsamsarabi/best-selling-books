<template>
  <div class="home">
    <div class="loading" v-if="!data">
      <h1>Loading ...</h1>
    </div>
    <div class="content-wrapper">
      <div class="information" v-if="data">
        <p>
          Published date: <span>{{ publishedDate }}</span>
        </p>
        <div v-for="item in data.lists" :key="item.list_id">
          <BooksList :list="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import dayjs from "dayjs";

import { fetchBookLists } from "@/api";
import { FetchBestSellersResponse } from "@/types";
import BooksList from "@/components/BooksList.vue";

@Options({
  components: {
    BooksList,
  },
  data() {
    return {
      data: null,
    };
  },
  async created() {
    const response: FetchBestSellersResponse = await fetchBookLists();
    this.setData(response);
  },
  methods: {
    setData(data: FetchBestSellersResponse) {
      this.data = data;
      console.group(
        "%clists[0].books[0]",
        "background-color: powderblue; color: darkslateblue; padding: 8px 48px; font-size: 18px;"
      );
      console.log(data.lists[0].books[0]);
      console.groupEnd();
    },
  },
  computed: {
    publishedDate() {
      return this.data
        ? dayjs(this.data.published_date).format("DD MMM YYYY")
        : "";
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 68px);
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.content-wrapper {
  width: 100%;
  max-width: 768px;
}

.information {
  span {
    font-weight: 700;
  }
}
</style>
