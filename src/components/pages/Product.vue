<template>
<div>
    <div class="loading" v-if="showloading">
          <img src="../../assets/img/loading.svg" alt="">
      </div>
      <section class="product" v-else>
    <div class="product__info">
        <div class="product__info-name">{{ product.title }}</div>
        <div class="product__info-desc">{{ product.description }}</div>
        <div class="product__info-price">
            <p>قیمت : {{product.price * 1000}} تومان</p>
        </div>
        <div class="product__info-cart">
            <div class="product__info-cart-addtocart">
                <button v-on:click="addTocart(product)"><i class="fal fa-shopping-cart"></i>افزودن به سبد خرید</button>
            </div>
            <div class="product__info-cart-interest">
                <button v-on:click="addTointerest(product)"><i class="fal fa-heart"></i>افزودن به علاقه مندی</button>
            </div>
            <div class="product__info-cart-cunt">
                <p>تعداد موجود در انبار : {{product.rating.count}} عدد</p>
            </div>
        </div>
    </div>
    <div class="product__img">
        <img :src="product.image" alt="">
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Product' ,
    data(){
        return{
            product: null ,
            showloading: true
        } 
    } ,
    mounted(){
            axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
            .then((product)=>{
                this.showloading = false;
                this.product = product.data;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            });
    } , 
    methods:{
        addTocart(product){
            this.$store.dispatch('addTocart' , product);
        } ,
        addTointerest(product){
            this.$store.dispatch('addTointerest' , product);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/color/color.scss';
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
    .product{
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 1rem;
        padding: 1rem;
        &__img{
            background: $white-color;
            border-radius: 10px;
            text-align: center;
            padding: 1rem;
            img{
                width: 80%;
                height: auto;
            }
        }
        &__info{
            background: $white-color;
            border-radius: 10px;
            padding: 2rem;
            div{
                padding: 1rem;
            }
            &-name{
                border-bottom: 1px solid $border-color;
            }
            &-desc{
                border-bottom: 1px solid $border-color;
            }
            &-cart{
                display: grid;
                grid-template-columns: repeat(3 , 1fr);
                &-addtocart{
                    button{
                        padding: 0.5rem 2rem;
                        background: $red-color;
                        border: none;
                        color: $white-color;
                        border-radius: 5px;
                    }
                    i{
                        padding-right: 0.5rem;
                        font-size: 1.2rem;
                    }
                }
                &-interest{
                    button{
                        padding: 0.5rem 2rem;
                        background: $green-color;
                        border: none;
                        color: $white-color;
                        border-radius: 5px;
                    }
                    i{
                        padding-right: 0.5rem;
                        font-size: 1.2rem;
                    }
                }
                &-cunt{
                    p{
                        display: inline-block;
                        padding: 0.3rem 1rem;
                        border: 1px solid $border-color;
                        border-radius: 5px;
                        margin-top: 0.3rem;
                        background: $light-color;
                    }
                }
            }
        }
        @media(max-width: 1024px){
            div.product__info-cart{
                &-addtocart , &-interest{
                    button{
                        padding: 0.5rem 1rem;
                        font-size: 0.7rem;
                    }
                    i{
                        padding-right: 0.5rem;
                        font-size: 1rem;
                    }
                }
                &-cunt{
                    p{
                        padding: 0.3rem;
                        font-size: 0.7rem;
                        margin-top: 0.3rem;
                        background: transparent;
                        border: 1px solid $light-color;
                        
                    }
                }
        }
    }
    @media(max-width: 768px){
            div.product__info-cart{
                 grid-template-columns: repeat(2 , 1fr);
                &-addtocart , &-interest{
                    button{
                        padding: 0.5rem 1rem;
                        font-size: 0.8rem;
                    }
                    i{
                        display: none;
                    }
                }
                &-cunt{
                    p{
                        display: none;
                    }
                }
        }
    }
    }
</style>