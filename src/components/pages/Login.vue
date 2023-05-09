<template>
  <section>
      <form class="Login">
          <div class="Login__header">
              <h3>فرم ورود</h3>
          </div>
          <div class="Login__username">
              <div class="Login__username-label"><label> : نام کاربری</label></div>
              <div class="Login__username-input">
                  <input type="text" placeholder="لطفا ایمیل خود را وارد نمایید" v-model="userdata.email">
              </div>
          </div>
          <div class="Login__password">
              <div class="Login__username-label"><label> : رمز عبور</label></div>
              <div class="register__username-input">
                  <input type="password" placeholder="********" v-model="userdata.password">
              </div>
          </div>
          <div class="Login__submit">
              <input type="submit" value="ورود" v-on:click.prevent="setToken">
             <router-link :to="{name: 'Register'}"><p>تاکنون ثبت نام نکرده اید</p></router-link> 
          </div>
      </form>
  </section>
</template>

<script>
export default {
    name: "log" ,
    data(){
        return{
            userdata:{
                email: null , 
                password: null
            }
        }
    } ,
    methods:{
        setToken(){
            this.$store.dispatch('setToken' , this.userdata);
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
        .Login{
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
            &__username , &__password {
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
                padding: 0 0 1rem 0;
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