<template>
  <md-card>
    <md-card-media>
      <img class="md-card-media__content" :src="img" alt="Фотография">
    </md-card-media>
    <md-card-content>
      <header class="card-header">
        <div class="info">
          <md-chip class="tag" :class="chipClass">{{tags[tag]}}</md-chip>
          <span class="info__date">{{date}}</span>
        </div>

        <span class="card-header__title">{{title}}</span>
      </header>

      <p class="card-content">{{text}}</p>

      <footer class="card-footer">
        <div class="card-footer__inner">
          <nuxt-link class="card-footer__link" :to="link">Читать далее</nuxt-link>
          <div class="views">
            <md-icon class="views__icon" md-src="/img/views.svg"></md-icon>
            <span class="views__count">{{views}}</span>
          </div>
        </div>
      </footer>
    </md-card-content>
  </md-card>
</template>

<script>
  export default {
    name: 'DCard',
    props: {
      id: Number,
      title: String,
      tag: String,
      views: Number,
      date: String,
      text: String,
      img: String
    },
    data: () => ({
      tagsEnum: {
        news: 'news',
        blog: 'blog',
        stock: 'stock'
      },
      tags: {
        news: 'Новости',
        blog: 'Блог',
        stock: 'Акции'
      }
    }),
    computed: {
      chipClass() {
        switch (this.tag) {
          case this.tagsEnum.news:
            return 'tag--blue'
          case this.tagsEnum.blog:
            return 'tag--green'
          case this.tagsEnum.stock:
            return 'tag--red'
        }
      },
      link() {
        return `/blog/${this.id}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variable.scss";
  @import "../../assets/scss/rem-mixin.scss";

  .md-card {
    position: relative;
    margin: 0;
    color: $gray;
    padding-top: 155px;
    box-shadow: none;
    overflow: hidden;
    border-radius: 0;
  }

  .md-card-media {
    background: #dddddd;
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 155px;
    width: 100%;
    overflow: hidden;
  }

  .md-card-content {
    position: relative;
    border: $border;
    border-top-style: none;
    padding: 20px 20px 0 20px;
    font-size: rem(16);
    overflow: hidden;
    width: 100%;
    height: calc(407px - 155px);

    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 45px;
      left: 0;
      pointer-events: none;
      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), #fefefe 90%);
      width: 100%;
      height: 100px;
      display: block;
    }
  }

  .card-header {
    &__title {
      font-size: rem(20);
      line-height: 1.5;
      color: $title;
    }
  }

  .card-content {
    line-height: 1.5;
  }

  .info {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 25px;
    user-select: none;

    .tag {
      text-transform: uppercase;
      font-size: rem(12);
      font-weight: bold;
      height: 26px;
      padding: 0 19px;
      display: flex;
      align-items: center;
      line-height: 1;

      &--blue {
        background: $blue;
        color: $blue-text;
      }

      &--green {
        background: $green;
        color: $green-text;
      }

      &--red {
        background: $red;
        color: $red-text;
      }
    }

    &__date {
      font-size: rem(14);
    }
  }

  .card-footer {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    padding: 0 20px;
    background: white;

    &__inner {
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__link {
      @extend %link;
    }
  }

  .views {
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;

    &__count {
      font-size: rem(14);
    }

    &__icon {
      display: inline-flex;
    }
  }
</style>
