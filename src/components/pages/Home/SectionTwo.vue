<template>
<div>
    <div class="loading" v-if="showloading">
        <img src="../../../assets/img/loading.svg" alt="">
    </div>
    <section class="sectiontwo" v-else>
      <div class="sectiontwo__slider">
          <div class="sectiontwo__content">
        <div class="sectiontwo__content-swiper-container">
            <div class="sectiontwo__content-swiper-container-swiper-wrapper" :style="scroll">
                <div class="sectiontwo__content-swiper-container-swiper-wrapper-swiper-slide" v-for="product in Products.slice(0 , 10)" :key="product.id">
                    <div class="sectiontwo__content-swiper-container-swiper-wrapper-swiper-slide-img">
                        <img :src="product.image" alt="">
                    </div>
                    <div class="sectiontwo__content-swiper-container-swiper-wrapper-swiper-slide-name">{{ product.title }}</div>
                    <div class="sectiontwo__content-swiper-container-swiper-wrapper-swiper-slide-price">
                        <span class="percent">{{ product.id * 10 }}%</span>
                        <span class="off">{{ product.price * 1000}}</span>
                        <p>تومان <span class="price">{{ product.price * 1000}}</span></p>
                    </div>
                    <div class="sectiontwo__content-swiper-container-swiper-wrapper-swiper-slide-timer">
                        <div class="sectiontwo__content-swiper-container-swiper-wrapper-swiper-slide-timer-progressbar">
                            <div class="progress">
                                <div class="progressbar" :style="changeWidth"></div>
                            </div>
                        </div>
                         <div class="sectiontwo__content-swiper-container-swiper-wrapper-swiper-slide-timer-time">
                             <span class="hours"><i class="fal fa-clock"></i> 02:</span><span class="minuts">13:</span><span class="second">{{ second }}</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          <div class="sectiontwo__slider-next" v-on:click="next"><i class="fal fa-chevron-left"></i></div>
          <div class="sectiontwo__slider-prev" v-on:click="prev"><i class="fal fa-chevron-right"></i></div>
      </div>
      <div class="sectiontwo__banner">
          <div class="sectiontwo__banner-img">
              <img src="../../../assets/img/amazingboximg.jpg" alt="">
          </div>
          <div class="sectiontwo__banner-btn">
              <button><i class="fal fa-chevron-left"></i> مشاهده همه</button>
          </div>
      </div>
  </section>
</div>
</template>

<script>

export default {
    name: 'SectionTwo' ,
    components:{
        
    } ,
    data(){
        return{
                curentIndex: 0 ,
                second: 60 ,
                showloading: true
                
        }
    } ,
    methods:{
           next(){
               this.curentIndex+=308;
                if(this.curentIndex >= 100){
                    this.curentIndex = 0;
                }
           } ,
            prev(){
                this.curentIndex -=308;
                if(this.curentIndex < -1800){
                   this.curentIndex = 0;
               }
        } ,
        showAuto(){
            setInterval(() => {
                this.prev();
            }, 5000);
        } ,
        changeSecond(){
            setInterval(() => {
                this.second -=1;
                if(this.second < 10){
                    this.second = `0${this.second}`;
                }
                if(this.second <= 0){
                    this.second = 59;
                }
            }, 1000);
        }
        } ,
        computed:{
            scroll(){
               return `transition: 0.4s ease-in-out;transform: translate3d(${this.curentIndex}px , 0px , 0px);`;
            } ,
            changeWidth(){
                return `width: ${this.second}%;`
            } ,
            Products(){
               return this.$store.state.products;
            }
        } ,
    mounted(){
           this.showAuto();
           this.changeSecond();
           this.$store.dispatch('getProducts');
           this.showloading = false;
    } ,
}
</script>

<style lang="scss" scoped>
@import '../../../assets/color/color.scss';
.loading{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    text-align: center;
    background: rgba(64,64,64, 0.5);
    z-index: 2;
    img{
        margin-top: 10rem;
    }
}
    .sectiontwo{
        padding: 1rem;
        background: $red-color;
        height: auto;
        display: grid;
        grid-template-columns: 4fr 1fr;
        &__content{
            width: 100%;
            height: auto;
            overflow: hidden;
            background-color:  $red-color;
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
                    width: 250%;
                    overflow: hidden;
                    height: auto;
                    z-index: 1;
                    display: flex;
                    transition-property: transform;
                    box-sizing: content-box;
                    &-swiper-slide{
                        width: 30%;
                        margin-right: 0.5%;
                        display: grid;
                        grid-template-rows: 3fr 1fr 1fr 1fr;
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
        &__banner{
            display: grid;
            grid-template-rows: 4fr 1fr;
            &-img{
                padding: 1rem;
                img{
                width: 100%;
                height: auto;
                }
            }
            &-btn{
                margin: 2.2rem auto;
                button{
                    padding: 0.5rem 1.5rem;
                    border: 1px solid $white-color;
                    background: transparent;
                    border-radius: 10px;
                    color: $white-color;
                    font-weight: bold;
                    i{
                        font-weight: bold;
                        padding-right: 1rem;
                    }
                }
            }
        }
        &__slider{
            width: 100%;
            position: relative;
            &-next , &-prev{
                position: absolute;
                padding: 2rem 1rem;
                z-index: 1;
                background: $white-color;
                box-shadow: 1px 1px 10px gray;
                font-size: 1.3rem;
            }
            &-next{
                top: 20%;
                left: 0;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            &-prev{
                top: 20%;
                right: 0;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
            }
        }
        &__banners{
            background: $background-color;
        }
    }
    @media(max-width: 1024px){
        .sectiontwo{
            &__slider{
                width: 100%;
            }
            &__content{
                width: 100%;
            }
            .sectiontwo__content-swiper-container-swiper-wrapper-swiper-slide{
                width: 20%;
                grid-template-rows: 2fr 1fr 1fr 1fr;
                &-price{
                        span.percent{
                        display: none;
                    }
                }
            }
            .swiper-wrapper{
                width: 150%;
            }
            &__banner{
                padding: 0;
            }
        }
    }
    @media(max-width: 768px){
        .sectiontwo{
            &__slider{
                width: 99%;
            }
            &__content{
                width: 100%;
            }
            .sectiontwo__content-swiper-container-swiper-wrapper-swiper-slide{
                width: 20%;
                grid-template-rows: 2fr 1fr 1fr 1fr;
            }
            .swiper-wrapper{
                width: 150%;
            }
            &__banner{
                display: none;
            }
        }
    }
</style>