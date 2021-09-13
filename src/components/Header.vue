<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import menuIcon from "~/assets/menu.svg";

@Component({
  components: {
    menuIcon,
  },
})
export default class Header extends Vue {
  mobile = null;
  mobileNav = null;
  windownWidth = null;

  toggleMobileNav(): void {}
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
  menuIcon.menu-icon(@click="toggleMobileNav")
  transition(name="fade")
    ul.mobile-menu
        
</template>

<style scoped></style>
