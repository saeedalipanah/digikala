<template>
  <section class="sectionfive">
      <div class="sectionfive__box1">
          <img src="../../../assets/img/banner-seven.jpg" alt="">
      </div>
      <div class="sectionfive__box2">
          <img src="../../../assets/img/banner-eight.jpg" alt="">
      </div>
  </section>
</template>

<script>
export default {
    name: 'SectionFive' ,
}
</script>

<style lang="scss" scoped>
    .sectionfive{
        padding: 2rem 0.5rem 0.5rem 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        border-radius: 5px;
        div{
            img{
                width: 100%;
                height: auto;
                border-radius: 5px;
            }
        }
    }
</style>