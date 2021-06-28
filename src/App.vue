<template>
  <div id="app">
    <div class="container">
      <div class="blog">
        <div class="blog__header">
          <router-link class="blog-name" to="/">Блог</router-link>
          <router-link v-if="isAddPage()" to="/add" class="button button--primary">Написать статью</router-link>
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    isAddPage() {
      return this.$route.path !== '/add'
    }
  }
}
</script>

<style lang="scss">
  @import "~/src/assets/global.scss";

  .blog {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .blog-name {
    font-size: 42px;
    text-decoration: none;
    color: #000;
  }
</style>
