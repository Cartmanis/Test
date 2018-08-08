<template>
<div>
    <h1>Новости</h1>
    <hr>
     <nav class = 'menu-vertical-drop-down'>
        <ul>
            <router-link  v-for = '(item, index) in news' :key = 'index'
            tag = 'li' :to = "'/news/' + index"
              ><a>{{index + 1}} - {{item.title}}</a>
            </router-link>
        </ul>
      </nav>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters('news', {
        news: 'items'
    })
  }
}
</script>

<style>

</style>
