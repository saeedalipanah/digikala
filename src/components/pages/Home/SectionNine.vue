<template>
  <section class="sectionnine">
      <div class="sectionnine__item">
          <img src="../../../assets/img/banner-nine.jpg" alt="">
      </div>
      <div class="sectionnine__item">
          <img src="../../../assets/img/banner-ten.jpg" alt="">
      </div>
      <div class="sectionnine__item">
          <img src="../../../assets/img/banner-eleven.jpg" alt="">
      </div>
      <div class="sectionnine__item">
          <img src="../../../assets/img/banner-twelve.jpg" alt="">
      </div>
  </section>
</template>

<script>
export default {
    name: 'SectionNine',
}
</script>

<style lang="scss" scoped>
    .sectionnine{
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
        grid-gap: 1rem;
        &__item{
            img{
                width: 100%;
                height: auto;
                border-radius: 10px;
            }
        }
    }
</style>