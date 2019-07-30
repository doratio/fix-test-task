<template>
  <div class="app">
    <md-toolbar>
      <md-button class="md-back" v-if="haveBack" @click="back">
        <img src="/img/back.svg" alt="назад">
      </md-button>
      <span class="md-title">{{title}}</span>
    </md-toolbar>

    <main class="content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  export default {
    data: () => ({
      title: 'Тестовое задание от FIX',
    }),
    methods: {
      back () {
        this.$router.go(-1)
      }
    },
    computed: {
      haveBack() {
        return this.$route.fullPath !== '/'
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/reset.scss";
  @import "../assets/scss/rem-mixin.scss";
  @import "../assets/scss/media-mixin.scss";
  @import "../assets/scss/variable.scss";

  html {
    font-family: 'Roboto', sans-serif;
    font-size: rem(15);
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .app {
    min-height: 100vh;
    background: #eeeeee;
    padding-bottom: 20px;
  }

  .md-toolbar {
    background: white;
  }

  .content {
    margin-top: 20px;
  }

  .nuxt-progress {
    height: 10px !important;
    background-color: $blue-button !important;
  }

  @include max-screen (568px) {
    .md-title {
      margin: 0 auto !important;
      font-size: 18px !important;
    }
    .md-back {
      display: none !important;
    }

    .inline-button {
      margin: 10px auto !important;
    }

    .app {
      padding: 0;
    }

    .content {
      margin: 0;
    }
  }
</style>

