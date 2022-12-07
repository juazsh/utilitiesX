<template>
  <div class="header">
    <router-link :to="{name: 'home'}"><h1> UtilitiesX </h1></router-link>
  </div>
</template>

<script>
export default {
  name: 'UtilityHeader',
};
</script>

<style scoped>
.header{
  width: 100%;
  height: 40px;
  text-align: left;
}
.header a{
  text-decoration: none;
}
.header h1{
  font-family: 'La Belle Aurore', cursive;
  font-size: 2.3em;
  margin:0;
  padding-left: 2%;
  color: #2c3e50;
}
</style>
