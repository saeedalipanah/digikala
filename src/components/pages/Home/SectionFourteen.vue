<template>
  <section class="sectionFourteen">
      <div class="sectionFourteen__content">
          <div class="sectionFourteen__content-bigslider">
          <div class="sectionFourteen__content-bigslider-header">
              <div class="sectionFourteen__content-bigslider-header-large"></div>
              <div class="sectionFourteen__content-bigslider-header-small">
                  <h4>برندهای ویژه</h4>
              </div>
          </div>
          <div class="sectionFourteen__content-bigslider-content">
        <div class="sectionFourteen__content-bigslider-content-swiper-container">
            <div class="sectionFourteen__content-bigslider-content-swiper-container-swiper-wrapper" :style="scroll">
                <div class="sectionFourteen__content-bigslider-content-swiper-container-swiper-wrapper-swiper-slide" v-for="(img , index) in imgarray" :key="index">
                    <div class="sectionFourteen__content-bigslider-content-swiper-container-swiper-wrapper-swiper-slide-img">
                        <img :src="img.src" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div class="sectionFourteen__content-bigslider-next" v-on:click="next"><i class="fal fa-chevron-left"></i></div>
            <div class="sectionFourteen__content-bigslider-prev" v-on:click="prev"><i class="fal fa-chevron-right"></i></div>
      </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'SectionFourteen' ,
    data(){
        return{
                curentIndex: 0 ,
                imgarray:[
                    {src:'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000018250.jpg?x-oss-process=image/quality,q_80'} ,
                    {src:'https://dkstatics-public.digikala.com/digikala-adservice-banners/2315.png?x-oss-process=image/quality,q_80'} ,
                    {src:'https://dkstatics-public.digikala.com/digikala-adservice-banners/19b71eef2e7e8d0765a81e6e33b12b3640bbd990_1596466061.png?x-oss-process=image/quality,q_80'},
                    {src:'https://dkstatics-public.digikala.com/digikala-adservice-banners/1078.png?x-oss-process=image/quality,q_80'} ,
                    {src:'https://dkstatics-public.digikala.com/digikala-adservice-banners/1086.png?x-oss-process=image/quality,q_80'}
                ]
        }
    } ,
    methods:{
           next(){
               this.curentIndex-=269;
                if(this.curentIndex <= -800){
                    this.curentIndex = 0;
                }
           } ,
           prev(){
                this.curentIndex -=308;
                if(this.curentIndex < -670){
                   this.curentIndex = 0;
               }
        } ,
        } ,
        computed:{
            scroll(){
               return `transition: 0.4s ease-in-out;transform: translate3d(${this.curentIndex}px , 0px , 0px);`;
            } ,
        } ,
    mounted(){
          async function getProducts(){
              let response = await fetch('https://fakestoreapi.com/products');
              let data = response.json();
              return data;
           } 
           getProducts().then((products)=>{
               this.products = products;
           })
           this.showPrpgressbar();
    } 
}
</script>

<style lang="scss" scoped>
@import '../../../assets/color/color.scss';
    .sectionFourteen{
         padding: 0.5rem 1rem 1rem 1rem;
        &__content{
            background: $white-color;
            border-radius: 10px;
            &-bigslider{
            position: relative;
            padding: 1rem;
            height: auto;
            &-header{
                display: grid;
                grid-template-columns: 4fr 1fr;
                grid-gap: 1rem;
                &-large{
                    border-bottom: 1px solid #efefef;
                    border-radius: 0 !important;
                }
                &-small{
                    border-bottom: 1px solid $red-color;
                    border-radius: 0 !important;
                    text-align: right;
                    color: #959595;
                    padding: 0 0 1rem 0;
                }
            }
            &-content{
            width: 100%;
            height: auto;
            overflow: hidden;
            &-swiper-container{
                height: auto;
                width: 100%;
                margin-top: 1rem;
                margin-left: auto;
                margin-right: auto;
                position: relative;
                overflow: hidden;
                list-style: none;
                padding: 0;
                z-index: 1;
                &-swiper-wrapper{
                    position: relative;
                    width: 200%;
                    overflow: hidden;
                    height: auto;
                    z-index: 1;
                    display: flex;
                    transition-property: transform;
                    box-sizing: content-box;
                    &-swiper-slide{
                        width: 13%;
                        margin-right: 0.5%;
                        border-radius: 10px;
                        background-color: #fff;
                        &-img{
                            text-align: center;
                            padding: 2rem 0.5rem;
                            img{
                                width: 40%;
                                height: auto;
                            }
                        }
                        &-name{
                            padding: 0.5rem;
                            font-size: 0.9rem;
                            text-align: left;
                        }
                        &-price{
                            padding: 0.5rem;
                            .percent{
                                background: $red-color;
                                padding: 0 0.3rem;
                                border-radius: 10px;
                                color: $white-color;
                            }
                            .off{
                                padding-left: 0.3rem;
                                text-decoration: line-through;
                                color: #c5c4c4;
                            }
                            p{
                                margin-top: 1rem;
                                span.price{
                                font-weight: bold;
                            }
                            }
                        }
                        &-timer{
                            padding: 0 0.5rem;
                            color: #979797;
                            font-size: 0.9rem;
                            margin-top: 1rem;
                            &-time{
                                margin-top: 2rem;
                            }
                            .progress{
                                width: 100%;
                                padding-top: 0.2rem;
                                border-radius: 10px;
                                background: #efefef;
                                position: relative;
                                .progressbar{
                                    background: $red-color;
                                    padding-top: 0.2rem;
                                    position: absolute;
                                    top: 0;
                                    border-radius: 10px;     
                                }
                            }
                        }
                    }
                }
            }
        }
        &-next , &-prev{
                position: absolute;
                padding: 2rem 1rem;
                z-index: 1;
                background: $white-color;
                box-shadow: 1px 1px 10px gray;
                font-size: 1.3rem;
            }
            &-next{
                top: 40%;
                left: 0;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            &-prev{
                top: 40%;
                right: 0;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
            }
        }
        }
    }
</style>