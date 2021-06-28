<template>
  <div class="article">
    <article>
      <h1 class="article__title">
        <template v-if="isPostView">{{ article.title }}</template>
        <router-link v-else :to="`post/${article.id}`">{{ article.title }}</router-link>
      </h1>

      <div v-if="isPostView" class="article__body" v-html="article.text"></div>
      <div v-else class="article__body" v-html="article.description"></div>

      <div v-if="isPostView" class="article__meta">
        <router-link :to="`/edit/${article.id}`" class="button button--warning">Редактировать</router-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: {
      default: null,
      type: Object
    },
    isPostView: {
      default: false,
      type: Boolean
    }
  },
  data: function() {
    return {
      commentText: "",
    }
  }
}
</script>

<style lang="scss" scoped>
  .article {
    &__title {
      margin-bottom: 10px;
    }

    &__body {
      margin-bottom: 20px;
    }

    &__meta {
      margin-bottom: 20px;
    }
  }
</style>