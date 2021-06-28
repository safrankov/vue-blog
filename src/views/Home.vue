<template>
  <div class="blog">
    <template v-if="articles">
      <Article
        v-for="(article, index) in posts"
        :key="index + '_article'"
        :article="article"
      />
      <button
        @click.prevent="showMore"
        :disabled="isShowEnd"
        class="button button--primary"
      >
        {{ isShowEnd ? 'Всё.' : 'Показать ещё' }}
      </button>
    </template>
    <template v-else>
      <span>Статей нет…</span>
    </template>
  </div>
</template>

<script>
import Article from "@/components/article";

export default {
  name: 'Home',
  data: function() {
    return {
      articles: [],
      articlesToShow: 1
    }
  },
  components: {
    Article
  },
  computed: {
    posts() {
      return this.articles.slice(0, this.articlesToShow);
    },
    isShowEnd() {
      return this.articles.length <= this.articlesToShow;
    }
  },
  created() {
    this.articles = JSON.parse(localStorage.getItem('articles'));
    if (this.articles) {
      this.articles.reverse()
    }
  },
  methods: {
    showMore() {
      this.articlesToShow = this.articlesToShow + 1;
    }
  }
}
</script>
