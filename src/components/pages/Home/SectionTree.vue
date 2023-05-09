<template>
  <section class="sectiontree">
      <div class="sectiontree__box1">
          <img src="../../../assets/img/banner-tree.jpg" alt="">
      </div>
      <div class="sectiontree__box2">
          <img src="../../../assets/img/banner-four.jpg" alt="">
      </div>
      <div class="sectiontree__box3">
          <img src="../../../assets/img/banner-five.jpg" alt="">
      </div>
      <div class="sectiontree__box4">
          <img src="../../../assets/img/banner-six.jpg" alt="">
      </div>
  </section>
</template>

<script>
export default {
    name: 'SectionTree' ,
}
</script>

<style lang="scss" scoped>
@import '../../../assets/color/color.scss';
    .sectiontree{
        padding: 2rem 0.5rem 0.5rem 1rem;
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
        grid-gap: 1rem;
         div{
             img{
                 width: 100%;
                 height: auto;
                 border-radius: 5px;
             }
            border-radius: 5px;
        }
    }
</style>