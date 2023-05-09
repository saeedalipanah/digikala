<template>
    <section class="sectionseven">
        <div class="sectionseven__content">
            <div class="sectionseven__content-header">
                 <h4>بیش از هزاران کالا در دسته بندی های مختلف</h4>
            </div>
            <div class="sectionseven__content-items">
                <div class="sectionseven__content-items-item">
                    <i class="fab fa-creative-commons-by sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                        محصولات بومی و محلی
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 4000
                    </p>
                </div>
                <div class="sectionseven__content-items-item">
                    <i class="fal fa-archway sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                       ورزش و سفر
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 5000
                    </p>
                </div>
                <div class="sectionseven__content-items-item">
                    <i class="fal fa-books sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                        کتاب،لوازم التحریر و هنر
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 6000
                    </p>
                </div>
                <div class="sectionseven__content-items-item">
                    <i class="far fa-home sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                        خانه و آشپزخانه
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 7000
                    </p>
                </div>
                <div class="sectionseven__content-items-item">
                    <i class="fal fa-heartbeat sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                        زیبایی و سلامت
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 8000
                    </p>
                </div>
                <div class="sectionseven__content-items-item">
                    <i class="fal fa-gift-card sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                       کالاهای سوپرمارکتی
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 9000
                    </p>
                </div>
                <div class="sectionseven__content-items-item">
                    <i class="fal fa-baby-carriage sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                       اسباب بازی،کودک و نوزاد
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 1000
                    </p>
                </div>
                <div class="sectionseven__content-items-item">
                    <i class="far fa-tshirt sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                        مد و پوشاک
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 2000
                    </p>
                </div>
                <div class="sectionseven__content-items-item">
                    <i class="far fa-hammer sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                        خودرو،ابزار و تجهیزات 
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 3000
                    </p>
                </div>
                <div class="sectionseven__content-items-item">
                    <i class="far fa-laptop sectionseven__content-items-item-icon"></i>
                    <p class="sectionseven__content-items-item-des">
                        کالای دیجیتال
                    </p>
                    <p class="sectionseven__content-items-item-number">
                        کالا 3000
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionSeven' ,
}
</script>

<style lang="scss" scoped>
@import '../../../assets/color/color.scss';
    .sectionseven{
        padding: 0.2rem 1rem;
        &__content{
            padding: 1rem 2rem 1rem 2rem;
            background: $white-color;
            border-radius: 10px;
            &-header{
            text-align: center;
            padding: 1rem 0 2rem 0;
            h4{
                color: #979797;
            }
        }
        &-items{
            display: grid;
            grid-template-columns: repeat(10 , 1fr);
            text-align: center;
            &-item{
                i{
                    color: $primary-color;
                    font-size: 2rem;
                }
                &-des{
                    font-size: 0.8rem;
                    padding-top: 1rem;
                }
                &-number{
                    padding-top: 1rem;
                    font-size: 0.8rem;
                    color: $primary-color;
                }
            }
        }
        }
        @media(max-width: 1024px){
            display: none;
        }
    }
</style>