<template>
<div>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionTree></SectionTree>
    <SectionFour></SectionFour>
    <SectionFive></SectionFive>
    <SectionSix></SectionSix>
    <SectionSeven></SectionSeven>
    <SectionEight></SectionEight>
    <SectionNine></SectionNine>
    <SectionTen></SectionTen>
    <SectionEleven></SectionEleven>
    <SectionTwelve></SectionTwelve>
    <SectionThirteen></SectionThirteen>
    <SectionFourteen></SectionFourteen>
</div>
</template>

<script>
import SectionOne from './SectionOne.vue';
import SectionTwo from './SectionTwo.vue';
import SectionTree from './SectionTree.vue';
import SectionFour from './SectionFour.vue';
import SectionFive from './SectionFive.vue';
import SectionSix from './SectionSix.vue';
import SectionSeven from './SectionSeven.vue';
import SectionEight from './SectionEight.vue';
import SectionNine from './SectionNine.vue';
import SectionTen from './SectionTen.vue';
import SectionEleven from './SectionEleven.vue';
import SectionTwelve from'./SectionTwelve.vue';
import SectionThirteen from './SectionThirteenvue.vue';
import SectionFourteen from './SectionFourteen.vue';
export default {
    components:{
        SectionOne ,
        SectionTwo ,
        SectionTree , 
        SectionFour ,
        SectionFive ,
        SectionSix ,
        SectionSeven ,
        SectionEight , 
        SectionNine ,
        SectionTen ,
        SectionEleven ,
        SectionTwelve ,
        SectionThirteen ,
        SectionFourteen
    } ,
    mounted(){
        console.log(this.$store.state.registerdata);
    }
}
</script>

<style lang="scss" scoped>
</style>