<template>
  <div class="home">
    <div class="content">
      <h1> UtilitiesX </h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {},
};
</script>

<style scoped>
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.content{
  display: block;
}
.content h1{
  font-size: 12em;
  font-family: 'La Belle Aurore', cursive;
}
</style>
