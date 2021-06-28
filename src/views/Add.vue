<template>
  <div>
    <h1>Добавить статью</h1>

    <form class="form">
      <label class="form__item">
        <span class="form__label-text">
          Заголовок статьи
        </span>
        <input v-model="title" class="form__text-input" type="text" placeholder="Введите заголовок">
      </label>

      <label class="form__item">
        <span class="form__label-text">
          Текст статьи
        </span>
        <textarea v-model="text" class="form__text-input form__text-input--textarea" placeholder="Введите текст статьи"></textarea>
      </label>

      <label class="form__item">
        <span class="form__label-text">
          Краткое описание статьи
        </span>
        <textarea v-model="description" class="form__text-input form__text-input--textarea form__text-input--textarea-mini" placeholder="Введите краткое описание"></textarea>
      </label>

      <div class="form__item">
        <button @click.prevent="addArticle" class="button button--primary button--large">Запостить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Add",
  data: function() {
    return {
      title: "",
      text: "",
      description: ""
    }
  },
  methods: {
    addArticle() {
      let article = {
        title: this.title,
        text: this.text,
        description: this.description,
        id: null
      }

      let storage = JSON.parse(localStorage.getItem('articles'));

      if (storage) {
        article.id = storage.length + 1;
        storage.push(article);
        localStorage.setItem('articles', JSON.stringify(storage))
      } else {
        article.id = 1;
        localStorage.setItem('articles', JSON.stringify([article]))
      }

      this.$router.push('post/' + article.id);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>