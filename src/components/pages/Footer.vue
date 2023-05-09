<template>
  <footer class="footer">
      <div class="footer__top">
          <div class="footer__top-left">
              <button v-on:click="goToTop"> <i class="fal fa-chevron-up"></i>بازگشت به بالا</button>
          </div>
          <div class="footer__top-right">
              <div class="footer__top-right-logo">
                  <img src="../../assets/img/logo2.svg" alt="">
              </div>
              <span class="footer__top-right-call">تلفن پشتیبانی: 00000000-021 </span>
              <span class="footer__top-right-call">00000000-021 </span>
              <span class="footer__top-right-call">هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</span>
          </div>
      </div>
      <div class="footer__center">
          <div class="footer__center-item">
              <i class="far fa-home footer__center-item-icon"></i>
              <p>ضمانت اصل بودن کالا</p>
          </div>
          <div class="footer__center-item">
              <i class="fal fa-box footer__center-item-icon"></i>
              <p>هفت روز ضمانت بازگشت کالا</p>
          </div>
          <div class="footer__center-item">
              <i class="fal fa-phone-volume footer__center-item-icon"></i>
              <p>پشتیبانی 24 ساعته</p>
          </div>
          <div class="footer__center-item">
              <i class="fal fa-money-bill-alt footer__center-item-icon"></i>
              <p>امکان پرداخت در محل</p>
          </div>
          <div class="footer__center-item">
              <i class="fal fa-truck footer__center-item-icon"></i>
              <p>امکان تحویل اکسپرس</p>
          </div>
      </div>
      <div class="footer__bottom">
          <div class="footer__bottom-item">
              <p>با ما همراه باشید</p>
              <div class="footer__bottom-item-socials">
                  <span><i class="fab fa-linkedin"></i></span>
                  <span><i class="fab fa-twitter"></i></span>
                  <span><i class="fab fa-instagram"></i></span>
              </div>
              <p>از جدیدترین تخفیف ها با خبرشوید</p>
            <form>
                <input type="submit" value="ثبت">
                <input type="text" placeholder="آدرس ایمیل خود را وارد کنید">
            </form>
          </div>
          <div class="footer__bottom-item">
              <p>راهنمای خرید از دیجی کالا</p>
              <ul>
                  <li>نحوه ثبت سفارش</li>
                  <li>رویه ارسال سفارش</li>
                  <li>شرایط استفاده</li>
                  <li>شیوه های پرداخت</li>
              </ul>
          </div>
          <div class="footer__bottom-item">
              <p>خدمات به مشتریان</p>
              <ul>
                  <li>پاسخ به پرسش های متداول</li>
                  <li>رویه بازگرداندن کالا</li>
                  <li>شرایط استفاده</li>
                  <li>حریم خصوصی</li>
                  <li>گزارش باگ</li>
              </ul>
          </div>
          <div class="footer__bottom-item">
              <p>با دیجی کالا</p>
              <ul>
                  <li>اتاق خبر دیجی کالا</li>
                  <li>فروش در دیجی کالا</li>
                  <li>فرصت های شغلی</li>
                  <li>تماس با دیجی کالا</li>
                  <li>درباره دیجی کالا</li>
              </ul>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer' , 
    methods:{
        goToTop(){
            window.scrollTo({
                top: 0 , 
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/color/color.scss';
    .footer{
        background: $white-color;
        border-top: 1px solid $border-color;
        padding: 1rem;
        &__top{
            display: grid;
            grid-template-columns: 1fr 3fr;
            grid-gap: 1rem;
            padding-top: 1rem;
            &-left{
                button{
                    padding: 0.7rem 2rem;
                    background: transparent;
                    border-radius: 5px;
                    border: 1px solid $border-color;
                    color: $dark-color;
                    font-weight: bold;
                    i{
                        padding-right: 1rem;
                    }
                }
            }
             &-right{
                    &-logo{
                        text-align: right;
                        img{
                            width: 12%;
                            padding-bottom: 1rem;
                        }
                    }
                    text-align: right;
                    &-call{
                        padding: 0 2rem;
                        font-size: 0.9rem;
                        &:nth-child(2){
                            padding-right: 0;
                        }
                        &:nth-child(3){
                            border-left: 1px solid $border-color;
                            border-right: 1px solid $border-color;
                        }
                    }
                }
        }  
        &__center{
            display: grid;
            grid-template-columns: repeat(5 , 1fr);
            padding: 2rem 0 1rem 0;
            grid-gap: 1rem;
            border-bottom: 1px solid $border-color;
            text-align: center;
            &-item{
                &-icon{
                    color: $primary-color;
                    font-size: 2rem;
                }
                p{
                    font-size: 0.9rem;
                }
            }
        }
        &__bottom{
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            grid-gap: 1rem;
            &-item{
                padding: 1rem 0 1rem 0;
                text-align: center;
                p{
                    font-weight: bold;
                    padding-bottom: 1rem;
                }
                ul{
                    list-style-type: none;
                    li{
                        padding-bottom: 1rem;
                        color: #adadad;
                    }
                }
                &:nth-child(4){
                    text-align: right;
                }
                &:nth-child(1){
                    text-align: right;
                    padding-right: 3rem;
                }
                &-socials{
                    padding-bottom: 3rem;
                }
                span{
                    padding-left: 2rem;
                    color: #adadad;
                    font-size: 1.5rem;
                }
                input[type="text"]{
                    width: 80%;
                    padding: 0.7rem;
                    background: $light-color;
                    outline: none;
                    border: none;
                    border-radius: 10px;
                }
                input::placeholder{
                    text-align: right;
                    font-size: 1rem;
                }
                input[type="submit"]{
                    margin-right: 0.5rem;
                    padding: 0.7rem 1.2rem;
                    color: white;
                    background: #dfdfdf;
                    border-radius: 10px;
                    border: none;
                }
            }
        }
        @media(max-width: 1024px){
            .footer{
                &__top{
                    &-right{
                        &-call{
                            padding: 0 1rem;
                        }
                    }
                }
            }
            div.footer__bottom-item{
                form{
                    input[type="text"]{
                        width: 60%;
                    }
                }
            }
        }
        @media(max-width: 768px){
            .footer{
                &__top{
                    &-right{
                        &-call{
                            &:nth-child(4){
                                display: none;
                            }
                            &:nth-child(3){
                                border-left: none; 
                            }
                        }
                    }
                }
            }
        }
    }
</style>