<template>
  <div class="float-menu">
    <i class="fa-lightbulb"
       :class="[isActive ? 'fa-solid' : 'fa-regular']"
       @click.self="toggleMenu"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'FloatMenu',
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.float-menu{
  display: block;
  position: absolute;
  right: 3%;
  top: 2%;
}
.float-menu i{
  font-size: 2em;
  cursor: pointer;
}
</style>
