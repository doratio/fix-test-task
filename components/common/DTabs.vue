<template>
  <md-tabs @md-changed="getTag">
    <md-tab
      v-for="(value, key) in allList"
      :key="key"
      :id="key"
      :md-label="value"
    />
  </md-tabs>
</template>

<script>
  export default {
    name: 'DTabs',
    props: {
      list: Object
    },
    computed: {
      allList() {
        return {...{all: 'Все'}, ...this.list}
      }
    },
    methods: {
      getTag(value) {
        this.$emit('change', value)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/rem-mixin";
  @import "../../assets/scss/media-mixin";

  .md-tabs.md-theme-default .md-tabs-indicator {
    background: #5594fe;
    bottom: -1px;
  }

  .md-tab-nav-button.md-theme-default.md-active {
    color: #5594fe;
  }

  .md-tab-nav-button.md-theme-default:hover {
    color: #5594fe;
  }

  .md-tabs .md-button {
    font-size: rem(20);
    font-weight: 400;
    text-transform: none;
  }

  .md-tabs .md-button:before {
    content: none;
  }

  @include max-screen (568px) {
    .md-tabs .md-button {
      font-size: rem(16);
    }
  }
</style>
