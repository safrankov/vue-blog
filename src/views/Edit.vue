<template>
  <div>
    <h1>Редактировать статью</h1>

    <form class="form">
      <label class="form__item">
        <span class="form__label-text">
          Заголовок статьи
        </span>
        <input v-model="article.title" class="form__text-input" type="text" placeholder="Введите заголовок">
      </label>

      <label class="form__item">
        <span class="form__label-text">
          Текст статьи
        </span>
        <textarea v-model="article.text" class="form__text-input form__text-input--textarea" placeholder="Введите текст статьи"></textarea>
      </label>

      <label class="form__item">
        <span class="form__label-text">
          Краткое описание статьи
        </span>
        <textarea v-model="article.description" class="form__text-input form__text-input--textarea form__text-input--textarea-mini" placeholder="Введите краткое описание"></textarea>
      </label>

      <div class="form__columns">
        <div class="form__item">
          <button @click.prevent="editArticle" class="button button--primary button--large">Сохранить</button>
        </div>

        <div class="form__item">
          <button @click.prevent="deleteArticle" class="button button--danger button--large">Удалить статью</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data: function() {
    return {
      article: null,
      storage: null
    }
  },
  methods: {
    editArticle() {
      let articleData = {
        title: this.article.title,
        text: this.article.text,
        description: this.article.description,
        id: this.article.id
      }

      const articleIndex = this.storage.findIndex(item => item.id === this.article.id);
      this.storage.splice(articleIndex, 1, articleData);
      localStorage.setItem('articles', JSON.stringify(this.storage));
      this.$router.push(`/post/${this.$route.params.id}`);
    },

    deleteArticle() {
      const articleIndex = this.storage.findIndex(item => item.id === this.article.id);
      this.storage.splice(articleIndex, 1);
      localStorage.setItem('articles', JSON.stringify(this.storage));
      this.$router.push('/');
    }
  },
  created() {
    this.storage = JSON.parse(localStorage.getItem('articles'));
    this.article = this.storage.find(item => item.id === Number(this.$route.params.id));
  }
}
</script>

<style lang="scss" scoped>

</style>