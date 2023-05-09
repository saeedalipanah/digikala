<template>
    <section class="sectionone">
      <div class="sectionone__banners">
          <img src="../../../assets/img/banner-one.jpg" alt="banner-one">
          <img src="../../../assets/img/banner-two.jpg" alt="banner-two">
      </div>
      <div class="sectionone__slider">
      <transition name="left">
          <div class="sectionone__slider-images" v-for="i in [currentIndex]" :key="i">
              <img :src="currentImg" alt="slider-img">
          </div>
          </transition>
          <div class="sectionone__slider-navigation-next" v-on:click="nextImg"><i class="fal fa-chevron-right"></i></div>
          <div class="sectionone__slider-navigation-prev" v-on:click="prevImg"><i class="fal fa-chevron-left"></i></div>
          <div class="sectionone__slider-paginations">
              <span v-for="(tag , index) in images.length" :key="index" :class="{active:currentIndex == index}" v-on:click="jump(index)"></span>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'SectionOne' , 
    data(){
        return{
            images: ['https://dkstatics-public.digikala.com/digikala-adservice-banners/75bf27e991aab5c0c29667148cb6ed475e1e82b5_1640794684.jpg?x-oss-process=image/quality,q_80' , 'https://dkstatics-public.digikala.com/digikala-adservice-banners/66ae00d7271f4983d166cb54d46645b88171680c_1640449133.jpg?x-oss-process=image/quality,q_80' ,'https://dkstatics-public.digikala.com/digikala-adservice-banners/2b35b2b6f0ca55228cf70dc851b1c4446ca821df_1640887080.jpg?x-oss-process=image/quality,q_80'] 
            , currentIndex: 0 ,
        }
    } ,
    mounted(){
        this.autoSow();
    } ,
    methods:{
        nextImg(){
            this.currentIndex += 1;
            if(this.currentIndex > this.images.length-1 ){
                this.currentIndex = 0;
            }
        } ,
        prevImg(){
            this.currentIndex -= 1;
            if(this.currentIndex < 0){
                this.currentIndex = this.images.length-1;
            }
        } ,
        autoSow(){
            setInterval(() => {
                this.nextImg();
            }, 5000);
        } ,
        jump(index){
            this.currentIndex = index;
        }
    } ,
    computed:{
            currentImg(){
                return this.images[ this.currentIndex ];
            }
        }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/color/color.scss';
    .sectionone{
        padding: 1rem 1rem 0.5rem 1rem;
        display: grid;
        grid-template-columns: 2fr 4fr;
        grid-template-rows: 1fr ;
        grid-gap: 0.5rem;
        overflow: hidden;
        &__banners{
            img{
                width: 100%;
                height: auto;
                border-radius: 10px;
            }
        }
            &__slider{
                position: relative;
                overflow: hidden;
                border-radius: 10px;
                img{
                   width: 100%;
                   height: auto;
                   border-radius: 10px;
                   position: absolute;
                }
                &-navigation-prev{
                display: inline-block;
                position: absolute;
                bottom: 40%;
                left: 0;
                padding: 1rem;
                font-size: 2rem;
                color: $white-color;
                text-shadow: 0rem 0rem 0.5rem black;
                transition: transform 0.5s;
                &:hover{
                    transform: translate(-3px);  
                }
            }
            &-navigation-next{
                display: inline-block;
                position: absolute;
                bottom: 40%;
                right: 0;
                padding: 1rem;
                font-size: 2rem;
                color: $white-color;
                text-shadow: 0rem 0rem 0.5rem black;
                transition: transform 0.5s;
                &:hover{
                    transform: translate(3px);
                }
            }
            &-paginations{
                position: absolute;
                left: 50%;
                bottom: 5%;
                span{
                    background: $background-color;
                    height: 0.7rem;
                    width: 0.7rem;  
                    display: inline-block;
                    border-radius: 50%;
                    margin-right: 1rem;
                    &:hover{
                        transform: scale(1.2);
                    }
                }
            }
            }
            .active{
                 background: $primary-color;  
            }
            .left-enter-active{
                animation : leftinanimation 0.4s ease-in-out;
            }
            .left-leave-active{
                animation : leftoutanimation 0.4s ease-in-out;
            }
            @keyframes leftinanimation{
                from{
                    transform: translateX(100%);
                }
                to{
                    transform: translateX(0);
                }
            }
            @keyframes leftoutanimation{
                from{
                    transform: translateX(0);
                }
                to{
                    transform: translateX(-100%);
                }
            }
    }
</style>