<template>
  <Article
    v-if="article"
    :article="article"
    is-post-view
  />
</template>

<script>
import Article from "@/components/article"

export default {
  name: "Post",
  components: {
    Article
  },
  data: function() {
    return {
      article: null
    }
  },
  methods: {
    loadPost() {
      let storage = JSON.parse(localStorage.getItem('articles'));

      this.article = storage.find(item => item.id === Number(this.$route.params.id))
    }
  },
  created() {
    this.loadPost();
  }
}
</script>

<style scoped>

</style>