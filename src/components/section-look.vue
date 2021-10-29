<template>
  <div class="look">
    <div class="look-inner">
      <titleParts class="look-title" titleEn="look for" titleJa="商品を探す"></titleParts>
      <div class="look-filter">
        <selectBox class="look-filter-box" :ChoicesItems="category" tgt="categoryId" choseTitle="カテゴリー"></selectBox>
        <selectBox class="look-filter-box" :ChoicesItems="items" tgt="itemsId" choseTitle="探すアイテム"></selectBox>
      </div>
      <itemCardArea></itemCardArea>
    </div>
  </div>
</template>

<script>
  import titleParts from './title-parts.vue';
  import selectBox from './select-box.vue';
  import itemCardArea from './item-card.vue';

  export default {
    name: 'look',
    data() {
      return {
        category: ['woman', 'man', 'kids'],
        items: ['アウター', 'ボトムス', 'セーター', 'シャツ', 'インナー', 'グッズ'],
      };
    },
    components: {
      titleParts,
      selectBox,
      itemCardArea,
    },
  };
</script>

<style lang="scss" scoped>
  .look {
    padding: 80px 0;
    background: #f5f5f5;
    &-inner {
      max-width: 1200px;
      margin: 0 auto;
    }
    &-filter {
      display: flex;
      &-box {
        width: 50%;
      }
    }
  }
</style>
