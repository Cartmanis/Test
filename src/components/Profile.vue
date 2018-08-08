<template>
<div>
    <h1>Профиль</h1>
    <button @click = 'outLogin' class = 'btn btn-primary' :to = "{name: 'main'}">Выход из профиля</button>
    <hr>
    <img class = 'photo' src = '../resource/photo.jpg' alt = 'Фото'>
    <div class = 'inline-block-resume'>
      <h3>Личная информация</h3>
      <table>
        <tr  v-for = '(item, index) in info' :key = 'index'>
            <td>{{item.name}}</td>
            <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class = 'block-resume'>
      <h3>Образование</h3>
      <table>
        <tr v-for = '(item, index) in education' :key = 'index'>
            <td>{{item.name}}</td>
            <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class = 'block-resume'>
      <h3>Опыт работы</h3>
      <table v-for = '(items, index) in experience' :key = 'index'>
        <tr v-for = '(item, index) in items' :key = 'index'>
            <td>{{item.name}}</td>
            <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class = 'block-resume'>
      <h3>Дополнительная информация</h3>
       <table>
         <tr v-for = '(item, index) in more' :key = 'index'>
           <td>{{item.name}}</td>
           <td>{{item.value}}</td>
         </tr>
       </table>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
      ...mapGetters('profile', {
        info: 'info',
        more: 'more',
        education: 'education',
        experience: 'experience'

      })
    },
    methods: {
      outLogin() {
        localStorage.auth = false;
        const auth = localStorage.auth;
        this.$router.push({name: 'main'});
      }
    }
}
</script>

<style>

</style>
