<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {Ids} from '@/data/api/api'
export default {
  name: 'App',
  created(){
    Ids().then((res)=>{console.log(res)});
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #232626;
  font-size: 14px;
}
</style>
