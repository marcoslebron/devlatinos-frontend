<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PostShow } from "@/types";
export default defineComponent({
  name: "Blog",
  props: {
    post: { type: Object as PropType<PostShow>, required: true },
  },
  // setup() {},
});
</script>
<template lang="pug">
.blog-wrapper(:class="{ 'no-user': !user }")
  .blog-content
    div
      h2(v-if='post.welcomeScreen') {{ post.title }}
      h2(v-else='') {{ post.blogTitle }}
      p(v-if='post.welcomeScreen') {{ post.blogPost }}
      p.content-preview(v-else='' v-html='post.blogHTML')
      router-link.link.link-light(v-if='post.welcomeScreen' to='#')
        | Login/Register
        arrow.arrow.arrow-light
      router-link.link(v-else='' :to="{ name: 'ViewBlog', params: { blogid: this.post.blogID } }")
        | View The Post
        arrow.arrow
  .blog-photo
    img(v-if='post.welcomeScreen' :src='require(`../assets/blogPhotos/${post.photo}.jpg`)' alt='')
    img(v-else='' :src='post.blogCoverPhoto' alt='')

</template>
<style lang="scss" scoped></style>
