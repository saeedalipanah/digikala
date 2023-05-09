<template>
  <div id="app">
    <Header />
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
import Footer from './components/pages/Footer.vue';
export default {
  name: "App",
  components: {
    Header ,
    Nav ,
    Footer
  },
};
</script>

<style lang="scss">
@import './assets/color/color.scss';
*{
  font-family: 'Vazir';
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  background: $light-color;
}
</style>
