<template>
  <div class="float-menu">
    <i class="fa-lightbulb"
       :class="[isActive ? 'fa-solid' : 'fa-regular']"
       @click.self="toggleMenu"
    ></i>
    <ul  :class="[showMenu ? 'menu':'menu-close']">
      <li>
        <router-link :to="name = 'utilities'">
          <p>Currency Observation</p>
          <p>Excel to JSON</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FloatMenu',
  data() {
    return {
      isActive: false,
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.float-menu{
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
}
.float-menu i{
  font-size: 2em;
  cursor: pointer;
  padding-top: 8%;
  margin-right: 8px;
}
.menu{
  height: 100vh;
  margin: 0;
  padding: 0;
  text-align: left;
  background: #2c3e50;
  width: 300px;
  overflow-y: hidden;
  max-width: 300px; /* approximate max height */
  transition-property: max-width;
  transition-duration: .8s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.menu-close{
  max-width: 0;
}
.menu li{
  display: block;
  list-style: none;
  cursor: pointer;
  padding: 8px;
  margin: 8px;
}
.menu li a{
  color: white;
text-decoration: none;
}
</style>
