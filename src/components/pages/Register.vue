<template>
  <section>
      <form class="register">
          <div class="register__header">
              <h3>فرم ثبت نام</h3>
          </div>
          <div class="register__name">
              <div class="register__name-label"><label> : نام</label></div>
              <div class="register__name-input">
                  <input type="text" v-model="userdata.name">
              </div>
          </div>
          <div class="register__familly">
              <div class="register__familly-label"><label> : نام خانوادگی</label></div>
              <div class="register__familly-input">
                  <input type="text" v-model="userdata.familly">
              </div>
          </div>
          <div class="register__mobaile">
              <div class="register__mobaile-label"><label> : تلفن همراه</label></div>
              <div class="register__mobaile-input">
                  <input type="text" placeholder="09********" v-model="userdata.mobaile">
              </div>
          </div>
          <div class="register__username">
              <div class="register__username-label"><label> : نام کاربری</label></div>
              <div class="register__username-input">
                  <input type="text" placeholder="لطفا ایمیل خود را وارد نمایید" v-model="userdata.email">
              </div>
          </div>
          <div class="register__password">
              <div class="register__username-label"><label> : رمز عبور</label></div>
              <div class="register__username-input">
                  <input type="password" placeholder="********" v-model="userdata.password">
              </div>
          </div>
          <!-- <div class="register__reapetpassword">
              <div class="register__username-label"><label> : تکرار رمز عبور</label></div>
              <div class="register__username-input">
                  <input type="password"  placeholder="********" >
              </div>
          </div> -->
          <div class="register__submit">
              <input type="submit" value="ثبت نام" v-on:click.prevent="sendData">
             <router-link :to="{name: 'Login'}"><p class="register__submit-login">قبلا ثبت نام کرده اید</p></router-link>
          </div>

      </form>
  </section>
</template>

<script>
export default {
    name: 'Register' , 
    data(){
        return{
            userdata:{
                name: null ,
                email: null , 
                password : null ,
                familly : null , 
                mobaile : null 
            }
        }
    } , 
    methods:{
        sendData(){
            this.$store.dispatch('registerUser' , this.userdata);
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
        z-index: 3;
        padding: 1rem;
        .register{
            background: $white-color;
            border-radius: 10px;
            margin: auto;
            width: 70%;
            text-align: center;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            &__header{
                padding-top: 1rem;
            }
            &__username , &__password , &__name , &__familly , &__mobaile{
                &-label{
                    width: 50%;
                    margin: auto;
                    text-align: right;
                    padding-bottom: 0.5rem;
                }
                input{
                    width: 50%;
                    padding: 0.4rem;
                    outline: none;
                    border: 1px solid $border-color;
                    border-radius: 5px;
                    text-align: right;
                }
            }
            &__submit{
                padding: 0.5rem 0 0.5rem 0;
                input{
                    width: 30%;
                    padding: 0.4rem;
                    outline: none;
                    border: 1px solid $border-color;
                    border-radius: 5px;
                    background: $green-color;
                    color: $white-color;
                }
                a{
                    text-decoration: none;
                    color: $primary-color;
                    p{
                        padding-top: 1rem;
                    }
                }
            }
        }
    }
</style>