<template>
  <section class="sectiontwelve">
      <div class="sectiontwelve__item">
          <img src="../../../assets/img/banner-thirteen.jpg" alt="">
      </div>
      <div class="sectiontwelve__item">
          <img src="../../../assets/img/banner-fourteen.jpg" alt="">
      </div>
  </section>
</template>

<script>
export default {
    name: 'SectionTwelve' ,
}
</script>

<style lang="scss" scoped>
    .sectiontwelve{
        padding: 0.5rem 1rem 1rem 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
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