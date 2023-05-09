<template>
  <header class="header">
      <div class="header__cart">
       <router-link :to="{name: 'Cart'}"><i class="fal fa-shopping-cart">
           <span v-show="cartProduct.length > 0">{{ cartProduct.length }}</span>
           </i></router-link> 
      </div>
      <div class="header__profile">
          <router-link :to="{name: 'Login'}"><button v-if="getToken == null">ورود به حساب کاربری<i class="far fa-user"></i></button><button class="header__profile-havetoken" v-else><i class="far fa-user"></i></button></router-link>
      </div>
      <div class="header__search">
          <input type="text" placeholder="جستجو در دیجی کالا">
      </div>
      <div class="header__logo">
         <router-link :to="{name: 'Home'}"><img src="../assets/img/logo.svg" alt="logo"></router-link> 
      </div>
  </header>
</template>

<script>

export default {
    name: 'Header' ,
    computed:{
        cartProduct(){
            return this.$store.state.cart;
        },
        getToken(){
           return this.$store.state.token;
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '../assets/color/color.scss';
    .header{
        position: sticky;
        top: 0px;
        z-index: 4;
        background: $white-color;
        display: grid;
        grid-template-columns: 1fr 7fr 8fr 2fr;
        div{
             padding: 1rem 1rem 1rem;
        }
        &__logo{
           margin-top: 0.5rem;
        }
        &__search{
            text-align: right;
            position: relative;
            input{
                width: 70%;
                padding: 0.57rem 1rem;
                margin-right: 2rem;
                outline: none;
                border: 1px solid $light-color;
                background: $background-color;
                border-radius: 5px 0 0 5px;
                text-align: right;
                &::placeholder{
                    text-align: right;
                }
                
            }
            &::after{
                    content: url('../assets/img/search.svg');
                    background: $background-color;
                    position: absolute;
                    right: 1rem;
                    padding: 0 0.5rem;
                    border-radius: 0 5px 5px 0;
                }
        }
        &__profile{
            button{
                padding: 0.57rem 1rem;
                border-radius: 5px;
                border: 1px solid rgb(197, 197, 197);
                background: transparent;
                color: rgb(138, 138, 138);
                i{
                    margin-left: 0.5rem;
                    font-size: 1.3rem;
                }
            }
            &-havetoken{
                padding: 0.57rem 0!important;
                border: none!important;;
                i{
                    font-size: 1rem;
                }
            }
        }
        &__cart{
            i{
            font-size: 1.5rem;
            transform: rotateY(180deg);
            padding:0 0.9rem;
            margin-top: 0.5rem;
            border-left: 1px solid rgb(197, 197, 197);
            position: relative;
                span{  
                    position: absolute;
                    display: inline-block;
                    width: 30%;
                    height: 60%;
                    border-radius: 20%;
                    background: $red-color;
                    top: 70%;
                    right: 45%;
                    font-size: 0.8rem;
                    text-align: center;
                    color: $white-color;
                    padding-top: 0.3rem;
                    transform: rotateY(180deg);
                    }
            }
            a{
                color: $dark-color;
            }
        }
    }



    @media(max-width: 768px){
        .header{
            grid-template-columns: 1fr 7fr 2fr;
            &__search{
                display: none;
            }
            &__logo{
                text-align: right;
            }
        }
    }
</style>