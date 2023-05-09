import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import Swal from 'sweetalert2';
import router from '../router.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    state(){
        return{
            products: null , 
            cart: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [] , 
            token: localStorage.getItem('token')? localStorage.getItem('token'): null ,
            registerdata: localStorage.getItem('userdata')? JSON.parse(localStorage.getItem('userdata')): null ,
            interest: [{category: "men's clothing" ,
            description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day." ,
            id: 3 ,
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" ,
            price: 55.99 ,
            title: "Mens Cotton Jacket"}] ,
        }
    } ,
    getters:{
        totalProducts(state){
           return state.cart.reduce((product , element)=>{
               return product += element.countity;
            } , 0)
        } ,
        totalPrice(state){
            return state.cart.reduce((price , element)=>{
               return price += element.countity*element.price;
            } , 0)
        } 
    } ,
    mutations:{
        getProducts(state , response){
            state.products = response;
        } ,
        addTocart(state , product){
           let find = state.cart.find((element)=>{
                return element.id == product.id;
            });
            if(find){
                find.countity++;
            }
            else{
                state.cart.push({...product , countity: 1});
            }
            localStorage.setItem('cart' , JSON.stringify(state.cart));
        } , 
        removeProduct(state , product){
             state.cart = state.cart.filter((element)=>{
                return element.id != product.id;
            })
            localStorage.setItem('cart' , JSON.stringify(state.cart));
        } ,
        removeTotal(state){
            state.cart.splice(0 , state.cart.length);
            localStorage.clear();
            Swal.fire({
                icon: 'error',
                title: 'محصولات از سبد خرید حذف شدند',
                showConfirmButton: false,
                timer: 1500
              })

        } ,
        addTointerest(state , interest){
           let find = state.interest.find((element)=>{
                return element.id == interest.id;
            });
            if(find){
                return;
            }
            else{
                state.interest.push(interest);
            }
            console.log(state.interest);
        } , 
        setToken(state , userdata){
            localStorage.setItem('token' , userdata.data.token);
            state.token = userdata.data.token;
        } ,
        registerUser(state , userdata){
            localStorage.setItem('userdata' , JSON.stringify(userdata));
            state.registerdata = userdata;
            console.log(state.registerdata);
        } , 
        logOut(state){
            state.token = null ;
            localStorage.removeItem('token');
            router.replace({name: 'Home'});
        }
    } ,
    actions:{
        getProducts(context){
            axios.get('https://fakestoreapi.com/products').then((response)=>{
                context.commit('getProducts' , response.data);
            });
        } ,
        addTocart(context , product){
            context.commit('addTocart' , product);
            Swal.fire({
                icon: 'success',
                title: 'محصول به سبد خرید اضافه شد',
                showConfirmButton: false,
                timer: 1500
              })
        } ,
        removeProduct(context , product){
            context.commit('removeProduct' , product);
            Swal.fire({
                icon: 'error',
                title: 'محصول از سبد خرید حذف شد',
                showConfirmButton: false,
                timer: 1500
              })
        } , 
        addTointerest(context , interest){
            context.commit('addTointerest' , interest);
            Swal.fire({
                icon: 'success',
                title: 'محصول به علاقه مندی ها اضافه شد',
                showConfirmButton: false,
                timer: 1500
              })
        } ,
        registerUser(context , userdata){
            axios.post('https://api.freerealapi.com/auth/register' , userdata)
            .then(()=>{
                context.commit('registerUser' , userdata);
                    Swal.fire({
                        icon: 'success',
                        title: "ثبت نام با موفقیت انجام شد لطفا مجددا وارد شوید",
                        showConfirmButton: false,
                        timer: 3000
                      })
                      router.replace({name: 'Login'});          
            })
        } ,
        setToken(context , userdata){
            console.log(userdata);
            axios.post('https://api.freerealapi.com/auth/login' , userdata)
            .then((token)=>{
                context.commit('setToken' , token);
                Swal.fire({
                    icon: 'success',
                    title: "خوش آمدید",
                    showConfirmButton: false,
                    timer: 3000
                  })
                  router.replace({name: 'Home'})
            })
        }
    } 
});

export default store;