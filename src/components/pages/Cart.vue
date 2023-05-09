<template>
  <section>
    <div class="emptycart" v-if="cartProduct.length == 0">
      <img src="../../assets/img/emptycart.png" alt="">
      <p>!سبد خرید شما خالی است</p>
    </div>
      <div class="cart" v-else>
        <div class="cart__header">
          <h3> <span> {{ cartProduct.length }} </span>سبد خرید</h3>
        </div>
        <div class="cart__info" v-for="product in cartProduct" :key="product.id">
          <div class="cart__info-data">
            <div class="cart__info-data-name">
              <p>{{ product.title }}</p>
            </div>
            <div class="cart__info-data-cunt">تعداد موجود در انبار : {{ product.rating.count }} عدد</div>
            <div class="cart__info-data-desc">
              <div class="cart__info-data-desc-price">قیمت : {{ Math.round(product.price * product.countity)*1000 }}<span> تومان</span> </div>
              <div class="cart__info-data-desc-remove">
                <span>حذف</span> <i class="fas fa-trash-alt" v-on:click="removeProduct(product)"></i>
              </div>
              <div class="cart__info-data-desc-add">
                  <div class="cart__info-data-desc-add-decress" v-on:click="product.countity <= 1?product.countity = 1: product.countity--"><i class="fal fa-minus" :class="{textcolor : product.countity <= 1}"></i></div>
                  <div class="cart__info-data-desc-add-number">{{ product.countity }}</div>
                  <div class="cart__info-data-desc-add-incress" v-on:click="product.countity++"><i class="fal fa-plus"></i></div>
              </div>
            </div>
          </div>
          <div class="cart__info-img">
            <img :src="product.image" alt="">
          </div>
        </div>
        <div class="cart__total">
          <div class="cart__total-price">قیمت کل سبد خرید شما <span>{{ Math.round(totalPrice)*1000 }}</span> تومان</div>
          <div class="cart__total-number">تعداد کل کالاها {{ totalProducts }} عدد</div>
          <div class="cart__total-remove">
            <button v-on:click="removeTotal">حذف کل سبد خرید</button>
          </div>
          <div class="cart__total-peyment">
            <button v-on:click="goTopeyment">ادامه فرایند خرید</button>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Cart' ,
    computed:{
      cartProduct(){
        return this.$store.state.cart;
      } ,
      totalProducts(){
        return this.$store.getters.totalProducts;
      } ,
      totalPrice(){
        return this.$store.getters.totalPrice;
      }
    } , 
    methods:{
      removeProduct(product){
        this.$store.dispatch('removeProduct' , product);
      } ,
      removeTotal(){
        console.log('object');
        this.$store.commit('removeTotal');
      } ,
      goTopeyment(){
        this.$router.push({name: 'Peyment'});
      }
    } , 
    mounted(){
      window.scrollTo({
        top: 0 , 
        behavior: 'smooth'
      });
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/color/color.scss';
  section{
    padding: 1rem;
    .emptycart{
      background: $white-color;
      border-radius: 10px;
      padding: 1rem 1rem 2rem 1rem;
      text-align: center;
      img{
        width: 20%;
      }
      p{
        font-size: 1.2rem;
      }
    }
    .cart{
      background: $white-color;
      border-radius: 10px;
      padding: 1rem;
      &__header{
        padding: 0 1rem 0.5rem 0;
        text-align: right;
        border-bottom: 1px solid $border-color;
        color: $red-color;
        position: relative;
        span{
          display: inline-block;
          width: 1.5%;
          font-size: 0.8rem;
          border-radius: 20%;
          background: $red-color;
          color: $white-color;
          text-align: center;
          margin-right: 0.5rem;
        }
        h3::after{
          content: '';
          position: absolute;
          right: 0;
          bottom: -0.18rem;
          display: block;
          width: 10%;
          border-bottom: 3px solid $red-color;
          border-radius: 10px;
        }
      }
      &__total{
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        &-remove{
          text-align: center;
          z-index: 2;
          button{
            padding: 0.5rem 1rem;
            background: $red-color;
            border: none;
            border-radius: 5px;
            color: $white-color;
          }
        }
        &-peyment{
          text-align: end;
          button{
            padding: 0.5rem 1rem;
            background: $green-color;
            border: none;
            border-radius: 5px;
            color: $white-color;
          }
        }
        &-number{
          text-align: center;
        }
         &-price{
           text-align: start;
           span{
             font-weight: bold;
           }
         }
      }
      &__info{
        padding: 1rem;
        display: grid;
        grid-template-columns: 4fr 1fr;
        grid-gap: 1rem;
        border-bottom: 1px solid $border-color;
        div{
          // border: 1px solid black;
          padding-bottom: 1.5rem;
        }
        &-img{
          text-align: center;
          img{
          width: 40%;
          height: auto;
        }
        }
        &-data{
          &-name , &-cunt{
            text-align: right;
          }
          &-desc{
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            &-price{
              margin-top: 0.5rem;
              font-weight: bold;
              span{
                font-size: 0.8rem
              }
            }
            &-remove{
              text-align: right;
              margin-top: 0.5rem;
              z-index: 2;
              i{
                color: #ababab;
                font-size: 1.2rem;
                transition: 0.5s;
                &:hover{
                  color: $red-color;
                }
              }
              span{
                font-size: 0.8rem; 
              }
            }
            &-add{
              display: flex;
              justify-content: end;
                div{
                  padding: 0.5rem 1rem 0.5rem 1rem;
                  border: 1px solid $light-color;
                }
              &-decress{
                border-right: none !important;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
              }
              &-number{
                border-left: none!important;
                border-right: none!important;
              }
              &-incress{
                border-left: none!important;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
              }
            }
          }
        }
      }
    }
    .textcolor{
      color: $border-color;
    }
    @media(max-width: 1024px){
      div.cart__header{
        span{
          display: inline-block;
          width: 3%;
        }
        h3::after{
          width: 15%;
        }
      }
      div.cart__total-price , div.cart__total-number{
        font-size: 0.8rem;
      }
    }
    @media(max-width: 768px){
      div.cart__header{
        span{
          display: inline-block;
          width: 3%;
        }
        h3::after{
          width: 18%;
        }
      }
      div.cart__total-price , div.cart__total-number{
        font-size: 0.6rem;
      }
    }
  }
</style>