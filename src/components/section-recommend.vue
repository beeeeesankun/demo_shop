<template>
  <div class="recommend">
    <titleParts class="recommend-title" titleEn="recommend for" titleJa="あなたへのおすすめ"></titleParts>
    <Carousel></Carousel>
  </div>
</template>

<script>
  import Carousel from './carousel.vue';
  import titleParts from './title-parts.vue';

  export default {
    name: 'recommend',
    components: {
      Carousel,
      titleParts,
    },
  };
</script>

<style lang="scss" scoped>
  .recommend {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
  }
</style>
