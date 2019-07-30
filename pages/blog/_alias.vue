<template>
    <article class="article">
      <header class="header">
        <div class="header-info">
          <h1 class="header-info__title">{{article.title}}</h1>
          <div class="header-info__tag">
            <md-chip class="tag" :class="chipClass">{{tags[article.tag]}}</md-chip>
          </div>
        </div>
      </header>
      <div class="content">
        <img class="content__media" :src="article.photo" alt="image">
        {{article.text}}
      </div>
      <footer class="footer">
        <div class="views">
          <md-icon class="views__icon" md-src="/img/views.svg"></md-icon>
          <span class="views__count">{{article.views}}</span>
        </div>
        <div class="date">
          <md-icon class="date__icon" md-src="/img/date.svg"></md-icon>
          <span class="date__value">{{article.date}}</span>
        </div>
      </footer>
    </article>
</template>

<script>
  export default {
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
      article() {
        return this.$store.getters.article(this.$route.params.alias) || {}
      },
      chipClass () {
        switch (this.article.tag) {
          case this.tagsEnum.news:
            return 'tag--blue'
          case this.tagsEnum.blog:
            return 'tag--green'
          case this.tagsEnum.stock:
            return 'tag--red'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/rem-mixin";
  @import "../../assets/scss/media-mixin";
  @import "../../assets/scss/variable";

  .article {
    margin: 0 auto;
    background: white;
    max-width: 1140px;
    min-width: 300px;
    padding: 30px 15px;
  }

  .header-info {
    position: relative;
    display: inline-block;

    &__title {
      font-size: rem(45);
      line-height: 1;
      color: $title;
      display: inline;
    }

    &__tag {
      position: relative;
      display: inline-block;
      width: 120px;
      height: 26px;
      margin: 5px 0;
    }

    .tag {
      position: absolute;
      top: 7px;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: bold;
      height: 26px;
      padding: 0 19px;
      display: inline-flex;
      align-items: center;

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
  }

  .content {
    font-size: rem(16);
    margin-top: 20px;
    color: $gray;

    &:after {
      content: "";
      clear: both;
      display: block;
    }

    &__media {
      width: 50%;
      float: left;
      margin: 0 20px 20px 0;
    }
  }

  .footer {
    position: relative;
    height: 100%;
    padding: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: $title;
    font-size: rem(20);
  }

  .views {
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;

    &__icon {
      margin-right: 5px;
      display: inline-flex;
    }
  }

  .date {
    margin-left: 20px;
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;

    &__icon {
      margin-right: 5px;
      display: inline-flex;
    }
  }

  @include max-screen (720px) {
    .header-info {
      &__title {
        font-size: rem(25);
      }

      &__tag {
        display: block;
        margin: 0;
      }

      .tag {
        position: relative;
      }
    }

    .content {
      &__media {
        width: 100%;
        margin: 20px 0;
      }
    }
  }
</style>
