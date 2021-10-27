<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-icon">
        <div class="footer-icon-logo"><img src="../assets/others/logo.png" alt="" /></div>
        <div class="footer-icon-links">
          <i class="fab fa-twitter" aria-hidden="true"></i>
          <i class="fab fa-facebook" aria-hidden="true"></i>
          <i class="fab fa-instagram" aria-hidden="true"></i>
          <i class="fab fa-youtube" aria-hidden="true"></i>
        </div>
      </div>
      <div class="footer-site-map">
        <ul class="footer-site-map-desc">
          <li>SHOP</li>
          <li>レディース</li>
          <li>メンズ</li>
          <li>キッズ</li>
          <li>ホーム</li>
        </ul>
        <ul class="footer-site-map-desc">
          <li>企業情報</li>
          <li>採用情報</li>
          <li>グループについて</li>
          <li>企業責任</li>
          <li>プレス</li>
          <li>ＩＲ情報</li>
        </ul>
        <ul class="footer-site-map-desc">
          <li>Corporate governance</li>
          <li>ヘルプ</li>
          <li>カスタマーサービス</li>
          <li>店舗検索</li>
          <li>法規&amp;プライバシー</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>©2020 IMAGINARY ONLINE</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'sectio-footer',
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #f4f4f4;
    &-inner {
      display: flex;
      padding: 4rem 2rem 1rem;
      justify-content: space-between;
    }
    &-icon {
      &-logo {
        width: 10rem;
      }
      &-links {
        font-size: 1.8rem;
        display: flex;
        justify-content: space-around;
      }
    }
    &-site-map {
      display: flex;
    }
    &-bottom {
      text-align: center;
      margin: 0;
      padding: 0.5rem 0;
    }
  }
</style>
