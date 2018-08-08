<template>
  <div class="wrapper">
      <header>
        <nav class="menu-drop-down">
          <ul>
              <router-link v-for = '(item, index) in itemsMenu' :key = 'index'
                tag = 'li' :to = 'item.url'
                ><a>{{item.text}}</a>
              </router-link>
          </ul>
        </nav>
      </header>
      <router-view></router-view>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters('menu', {
        itemsMenu: 'items'
    })
  }
}
</script>

<style>

</style>
