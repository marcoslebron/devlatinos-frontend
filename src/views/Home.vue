<template lang="pug">
.home-page-wrapper
  BlogPost( v-if="!user" :post="welcomeScreen" )

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
// import Arrow from "../assets/Icons/arrow-right-light.svg";
@Options({
  components: { BlogPost, BlogCard },
})
export default class Home extends Vue {
  show = false;
  welcomeScreen = {
    title: "Welcome!",
    blogPost:
      "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
    welcomeScreen: true,
    photo: "coding",
  };
}
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
