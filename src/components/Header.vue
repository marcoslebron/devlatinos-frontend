<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Header extends Vue {
  mobile = null;
  mobileNav = false;
  windownWidth = null;

  toggleMobileNav(): void {
    this.mobileNav = !this.mobileNav;
  }
}
</script>

<template lang="pug">
header
  nav.container.mx-auto.flex.flex-row.justify-between.py-4
    .brand
      h3 Dev Latinos
    .nav-links.py-2
      ul.flex.justify-between.space-x-4
        li Home
        li Blogs
        li Crea un Articulo
        li Iniciar/Registrarse
  img.menu-icon(src="../assets/menu.svg" @click="toggleMobileNav" )
  transition(name="fade")
    ul.mobile-menu(v-show="mobileNav")
      li Home
      li Blogs
      li Crea un Articulo
      li Iniciar/Registrarse
</template>

<style scoped>
.menu-icon {
  cursor: pointer;
  position: absolute;
  width: auto;
  height: 25px;
  top: 32px;
  right: 25px;
}
</style>
