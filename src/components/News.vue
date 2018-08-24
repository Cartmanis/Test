<template>
    <!--<paginated-data :listData = 'news' :currentPage = 'pageNumber' :url = "/news/"
      @change-page = 'onChangePage' styleClass = 'menu-vertical-drop-down'></paginated-data>-->

      <div>
      <h1>Новости</h1>
      <hr>
      <nav class = 'menu-vertical-drop-down'>
          <ul>
              <router-link  v-for = '(item, index) in paginatedData' :key = 'index'
              tag = 'li' :to = "/news/ + id(index)"
                ><a>{{id(index) + 1}} - {{item.title}}</a>
              </router-link>
          </ul>
      </nav>
      <hr>
      <button class = 'btn btn-success' :disabled = "pageNumber==0" @click= "prevPage">Previous</button>
      <button class = 'btn btn-success' :disabled = "pageNumber == pageCount - 1" @click = 'nextPage'>Next</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      size: 7
    };
  },
  methods: {
    ...mapActions("news", {
      changePage: "setCurrentPage"
    }),
    nextPage() {
      this.changePage(this.pageNumber + 1);
    },
    prevPage() {
      this.changePage(this.pageNumber - 1);
    },
    id(index) {
      return index + this.pageNumber * this.size;
    }
  },
  computed: {
    ...mapGetters("news", {
      news: "items",
      pageNumber: "getCurrentPage"
    }),
    pageCount() {
      return Math.ceil(this.news.length / this.size);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.news.slice(start, end);
    }
  }
};
</script>

<style>
</style>
