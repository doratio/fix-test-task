<template>
  <div class="blog">
    <d-tabs :list="tags" @change="getTag"></d-tabs>

    <ul class="list">
      <template v-if="subList.length && subList.length > 0">
        <li
          class="list__item"
          v-for="(item, key) in subList"
          :key="key"
        >
          <d-card
            :id="item.id"
            :title="item.title"
            :date="item.date"
            :text="item.text"
            :views="item.views"
            :tag="item.tag"
            :img="item.photo"
          />
        </li>
      </template>
      <li v-else class="list__empty" >
        Нет Данных
      </li>
    </ul>

    <button class="inline-button" @click="getNews">
      Загрузить еще
    </button>
  </div>
</template>

<script>
  import DTabs from '../../components/common/DTabs'
  import DCard from '../../components/common/DCard'

  export default {
    components: {DCard, DTabs},
    data: () => ({
      chip: '',
      tag: '',
      tags: {
        news: 'Новости',
        blog: 'Блог',
        stock: 'Акции'
      }
    }),
    methods: {
      getNews() {
        this.$store.dispatch('get', 'add')
      },
      getTag(tag) {
        this.tag = (tag === 'all') ? '' : tag
      }
    },
    computed: {
      subList() {
        return this.news.filter(el => el.tag.startsWith(this.tag))
      },
      news() {
        return this.$store.getters.list || []
      }
    },
    mounted() {
      this.$store.dispatch('get', 'init')
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variable.scss";
  @import "../../assets/scss/media-mixin.scss";

  .blog {
    background: #ffffff;
    box-sizing: border-box;
    margin: 0 auto;
    padding-bottom: 40px;
    max-width: 1140px;
    min-width: 300px;
    border: $border;

    .list {
      border-top: $border;
      display: flex;
      flex-wrap: wrap;
      padding: 15px 25px;
      width: 100%;


      &__item {
        position: relative;
        box-sizing: border-box;
        margin: 15px;
        width: calc(33.33% - 30px);
        height: 407px;
        list-style-type: none;
        overflow: hidden;
      }

      &__empty {
        margin: 50px auto;
        font-size: rem(20);
      }
    }

    .inline-button {
      @extend %inline-button;
      display: block;
      margin: 0 auto;
    }

    .md-tabs {
      border-bottom: $border;

      & .md-tabs-indicator {
        background: blue;
      }
    }
  }

  @include max-screen (992px) {
    .news {
      .list {
        &__item {
          width: calc(50% - 30px);
        }
      }
    }
  }

  @include max-screen (568px) {
    .news {
      padding-bottom: 10px;
      border: none !important;

      .list {
        padding: 0 !important;

        &__item {
          margin: 5px auto !important;
          width: calc(100% - 30px);
          max-width: 450px;
        }
      }
    }
  }
</style>
