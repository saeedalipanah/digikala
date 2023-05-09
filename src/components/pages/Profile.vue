<template>
<div>
    <div class="loading" v-if="showloading">
        <img src="../../assets/img/loading.svg" alt="">
    </div>
<section class="profile" v-else>
      <div class="profile__userimg">
          <div class="profile__userimg-img">
              <i class="fal fa-user-circle"></i>
              <h3 class="profile__userimg-name">{{ userData.name }} {{ userData.familly }}</h3>
          </div>
          <div class="profile__userimg-user">
          <div class="profile__userimg-user-interest">
              <h4 class="profile__userimg-user-interest-header">
                  علاقه مندی ها
              </h4>
              <div class="profile__userimg-user-interest-info" v-for="interest in Interests" :key="interest.id">
                  <div class="profile__userimg-user-interest-info-title">
                      <p>{{ interest.title }}</p>
                      <p>هزار تومان {{ interest.price*1000 }}</p>
                  </div>
                  <div class="profile__userimg-user-interest-info-img">
                      <img :src="interest.image" alt="">
                  </div>
              </div>
          </div>
          <div class="profile__userimg-user-register">
              <h4 class="profile__userimg-user-register-header">
                  اطلاعات شخصی
              </h4>
              <table>
  <tr>
    <td>{{ userData.email }} : ایمیل</td>
    <td>نام خانوادگی: {{ userData.familly }}</td>
    <td>نام: {{ userData.name }}</td>
  </tr>
  <tr>
    <td>{{ userData.mobaile }} : تلفن تماس</td>
    <td>آدرس : </td>
    <td>شهر محل سکونت : </td>
  </tr>
</table>
<router-link :to="{name: 'Register'}"><p>ویرایش اطلاعات شخصی</p></router-link>
          </div>
      </div>
      <div class="profile__userimg-buys">
          <h4 class="profile__userimg-buys-header">خرید های من</h4>
          <table>
  <tr>
    <th>تعداد</th>
    <th>تاریخ ثبت سفارش</th> 
    <th>شماره سفارش</th>
  </tr>
  <tr v-for="buy in buys.slice(0 , 4)" :key="buy.id">
    <td>{{ buy.id }}</td>
    <td>{{ buy.date }}</td>
    <td>{{ buy.userId* 12014478 }}</td>
  </tr>
</table>
      </div>
      <div class="profile__logout">
          <button v-on:click="logOut">خروج</button>
      </div>
      </div>
  </section>
</div>
  
</template>

<script>
import axios from 'axios';
export default {
    name: 'Profile' ,
    data(){
        return{
            buys: null ,
            showloading: true
        }
    } ,
    methods:{
       logOut(){
           this.$store.commit('logOut');
       }  
    } ,
    computed:{
        Interests(){
            return this.$store.state.interest;
        } ,
        userData(){
           return this.$store.state.registerdata;
        }
    } ,
    mounted(){
        axios.get('https://fakestoreapi.com/carts')
        .then((Buys)=>{ 
            this.buys = Buys.data;
            this.showloading = false;
        })
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
    .profile{
        padding: 1rem;
        &__userimg{
            background: $white-color;
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            &-img{
                i{
                    font-size: 5rem;
                    color: $border-color;
                }
            }
            &-name{
                padding: 1rem 0 1rem 0;
                border-bottom: 1px solid $light-color;
            }
            &-user{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
            &-register{
                a{
                    text-decoration: none;
                }
                &-header{
                    text-align: right;
                    color: $border-color;
                    padding: 1rem 0 1rem 0;
                    font-size: 0.8rem;
                }
                table{
                    border-spacing: 0;
                    width: 100%;
                    text-align: right;
                    tr{
                      td{
                          padding: 1rem;
                          border: 1px solid $border-color;
                          font-size: 0.7rem;
                      }  
                    }
                }
                p{
                    width: 20%;
                    padding-top: 1rem;
                    margin: auto;
                    font-size: 0.7rem;
                    color: $primary-color;
                    border-bottom: 1px dashed $primary-color;
                }
            }
            &-interest{
                &-header{
                    text-align: right;
                    color: $border-color;
                    padding: 1rem 0 1rem 0;
                    font-size: 0.8rem;
                }
                &-info{
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    font-size: 0.9rem;
                    &-title{
                        p{
                            padding-right: 1rem;
                        }
                        text-align: right;
                        border: 1px solid $border-color;
                        p:nth-child(1){
                            border-bottom: 1px solid $light-color;
                        }
                    }
                    &-img{
                        border: 1px solid $border-color;
                        img{
                            width: 20%;
                        }
                    }
                }
            }
        }
        &-buys{
            &-header{
                text-align: right;
                color: $border-color;
                padding: 0 0 1rem 0;
                font-size: 0.8rem;
            }
            table{
                border-spacing: 0;
                    width: 100%;
                    tr{
                      td, th{
                          padding: 1rem;
                          border: 1px solid $border-color;
                          font-size: 0.7rem;
                      }  
                    }
            }
        }
        }
        &__logout{
            text-align: start;
            padding-top: 1rem;
            button{
                padding: 0.5rem 2rem;
                border: none;
                color: white;
                border-radius: 5px;
                background: $red-color;
            }
        }
        @media(max-width: 1024px){
            div.profile__userimg-user-register{
                p{
                    width: 40%;
                }
            }
        }
        @media(max-width: 768px){
            div.profile__userimg-user-register{
                p{
                    width: 20%;
                }
            }
            div.profile__userimg-user{
                grid-template-columns: 1fr;
            }
        }
    }
</style>