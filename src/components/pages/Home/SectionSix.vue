<template>
  <section class="sectionsix">
      <div class="sectionsix__smallslider">
          <div class="sectionsix__smallslider-header">
              <p>پیشنهادهای لحظه ای برای شما</p>
              <p class="progress"><span class="progressbar" :style="changeWidth"></span></p>
          </div>
          <div class="sectionsix__smallslider-content">
              <div class="sectionsix__smallslider-content-wrapper" :style="scroll">
                  <div class="sectionsix__smallslider-content-wrapper-slide" v-for="product in Products.slice(0 , 4)" :key="product.id">
                      <div class="sectionsix__smallslider-content-wrapper-slide-img">
                        <img :src="product.image" alt="">
                    </div>
                    <div class="sectionsix__smallslider-content-wrapper-slide-name">{{ product.title }}</div>
                         <span class="percent">{{ product.id * 10 }}%</span>
                         <span class="off">{{ product.price * 1000}}</span>
                         <p>تومان <span class="price">{{ product.price * 1000}}</span></p>
                  </div>
              </div>
          </div>
      </div>
      <div class="sectionsix__bigslider">
          <div class="sectionsix__bigslider-header">
              <div class="sectionsix__bigslider-header-large"></div>
              <div class="sectionsix__bigslider-header-small">
                  <h4>کفش های روزمره</h4>
              </div>
          </div>
          <div class="sectionsix__bigslider-content">
        <div class="sectionsix__bigslider-content-swiper-container">
            <div class="sectionsix__bigslider-content-swiper-container-swiper-wrapper" :style="scroll">
                <div class="sectionsix__bigslider-content-swiper-container-swiper-wrapper-swiper-slide" v-for="product in Products.slice(0 , 5)" :key="product.id">
                    <div class="sectionsix__bigslider-content-swiper-container-swiper-wrapper-swiper-slide-img">
                        <img :src="product.image" alt="">
                    </div>
                    <div class="sectionsix__bigslider-content-swiper-container-swiper-wrapper-swiper-slide-name">{{ product.title }}</div>
                    <div class="sectionsix__bigslider-content-swiper-container-swiper-wrapper-swiper-slide-price">
                        <span class="percent">{{ product.id * 10 }}%</span>
                        <span class="off">{{ product.price * 1000}}</span>
                        <p>تومان <span class="price">{{ product.price * 1000}}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div class="sectionsix__bigslider-next" v-on:click="next"><i class="fal fa-chevron-left"></i></div>
            <div class="sectionsix__bigslider-prev" v-on:click="prev"><i class="fal fa-chevron-right"></i></div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'SectionSix' ,
    data(){
        return{
                curentIndex: 0 ,
                progressbar: 0
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
                if(this.curentIndex < -1800){
                   this.curentIndex = 0;
               }
        } ,
        showAuto(){
            setInterval(() => {
                this.next();
            }, 10000);
        } ,
        changeProgressbar(){
            this.progressbar +=1;
            if(this.progressbar >=100){
                this.progressbar = 0;
            }
        } ,
        showPrpgressbar(){
            setInterval(() => {
                this.changeProgressbar();
            }, 100);
        }
        } ,
        computed:{
            scroll(){
               return `transition: 0.4s ease-in-out;transform: translate3d(${this.curentIndex}px , 0px , 0px);`;
            } ,
            changeWidth(){
                return `width: ${this.progressbar}%;transition: 0.1s ease-in-out`;
            } ,
            Products(){
                return this.$store.state.products;
            }
        } ,
    mounted(){
           this.showAuto();
           this.showPrpgressbar();
           this.$store.dispatch('getProducts');
    } 
}
</script>

<style lang="scss" scoped>
@import '../../../assets/color/color.scss';
    .sectionsix{
        padding: 1rem ;
        display: flex;
        grid-gap: 1rem;
        &__smallslider{
            width: 20%;
            padding: 1rem;
            border: 1px solid $primary-color;
            &-header{
                text-align: center;
                color: $dark-color;
                p.progress{
                    width: 90%;
                    background: #efefef;
                    margin: 1rem auto;
                    position: relative;
                    padding: 0.02rem;
                    border-radius: 5px;
                    span.progressbar{
                        background: $red-color;
                        position: absolute;
                        width: 0;
                        top: 0;
                        left: 0;
                        padding: 0.02rem;
                    }
                }
            } 
            &-content{
                width: 100%;
                overflow: hidden;
                &-wrapper{
                overflow: hidden;
                width: 645%;
                display: flex;
                &-slide{
                    width: 17%;
                    display: grid;
                    grid-template-rows: 2fr 1fr;
                    &-img{
                        text-align: center;
                        img{
                            width: 40%;
                            height: auto;
                        }
                    }
                    &-name{
                        width: 90%;
                        text-align: center;
                        font-size: 0.9rem;
                    }
                    .percent{
                        width: 10%;
                        background: $red-color;
                        padding: 0 0.3rem;
                        border-radius: 10px;
                        color: $white-color;
                        margin-top: 4rem;
                    }
                    .off{
                        padding-left: 0.3rem;
                        text-decoration: line-through;
                        color: #c5c4c4;
                        width: 30%;
                            }
                    p{
                        text-align: left;
                        width: 50%;
                        .price{
                            font-weight: bold;
                        }
                    }
                }
            }
            }
        }
        div{
            border-radius: 5px;
            background: $white-color;
        }
        &__bigslider{
            position: relative;
            padding: 1rem;
            width: 80%;
            height: auto;
            &-header{
                display: grid;
                grid-template-columns: 4fr 1fr;
                grid-gap: 1rem;
                &-large{
                    width: 100%;
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
            background-color:  $green-color;
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
                        display: grid;
                        grid-template-rows: fr 1fr 1fr 1fr;
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
                padding: 1.5rem 1rem;
                z-index: 1;
                background: $white-color;
                box-shadow: 1px 1px 10px gray;
                font-size: 1.3rem;
            }
            &-next{
                top: 30%;
                left: 0;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            &-prev{
                top: 30%;
                right: 0;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
            }
        }
    }
    @media(max-width: 1024px){
            span.percent{
                display: none;
            }
    }
    @media(max-width: 768px){
        div.sectionsix__bigslider-header-small{
            h4{
                font-size: 0.8rem;
            }
        }
    }
</style>