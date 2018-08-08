<template>
<div>
    <h3>{{currentNews.title}}</h3>
    <p>
      <router-link class = 'btn btn-primary' :to = "{name: 'news'}">Назад к списку новостей</router-link>
    </p>
    <p>
      <a class = 'btn btn-success' :href= "currentNews.url" target="_blank">Подробнее на сайте {{currentNews.source.name}}</a>
    </p>
     <hr>
    <div>
      <p class ='alert alert-success'>{{currentNews.description}}</p>
      <img :src= "currentNews.urlToImage" :alt="currentNews.title">
    </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  computed: {
    id() {
       return this.$route.params.id;
    },
    currentNews() {
        return this.$store.getters['news/getOneNews'](+this.id);
    }
  }
}
</script>

<style>

</style>
