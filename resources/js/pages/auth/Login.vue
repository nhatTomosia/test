<template>
<auth-layout>
  <template #header>
    Sign in to Twitter
  </template>
  <template #content>
    <q-btn @click="googleLogin" unelevated style="width:300px" class="mt-10"  :class="dark? 'bg-white text-black': 'bg-blue'" no-caps rounded icon="fab fa-google" label="Sign in with Google"></q-btn>
    <br>
    <q-btn @click ="facebookLogin" unelevated no-caps style="width:300px"  class="mt-5" :class="dark? 'bg-white text-black': 'bg-blue'" rounded icon="fab fa-facebook" label="Sign in with Facebook"></q-btn>
    <br>
    <q-btn unelevated @click="loginDialog=true" no-caps style="width:300px"  class="mt-5" :class="dark? 'bg-white text-black': 'bg-blue'"  rounded  label="Sign in with phone or email"></q-btn>
    <p class="mt-5">Don't have an account? <router-link class="text-blue hover:underline" to="/register">Sign up</router-link></p>
    <q-dialog v-model="loginDialog" persistent>
      <q-card ref="hello" >
        <q-card-section class="flex justify-between items-center">
          <div class="text-xl font-bold">Login</div>
          <q-icon size="lg" color="blue" name="fab fa-twitter"></q-icon>
          <q-btn icon="fas fa-times" @click="reset" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="">
          <span class=" font-semibold text-lg">To get started, first enter your phone, email, or @username</span>
          <q-input class=" q-mt-lg q-mb-sm" outlined v-model="auth.credentials" label="Phone, email or username" autofocus @keyup.enter="login" />
          <p class=" text-red-400 font-bold" v-if="errors.credentials">{{errors.credentials}}</p>
          <q-btn no-caps class=" text-blue mt-16 full-width bg-transparent" unelevated rounded label="Forgot password?"></q-btn> 
          <q-btn no-caps class="mt-5 font-bold full-width" :disabled="auth.credentials < 4" :class="dark? 'bg-white text-black': 'bg-blue'" 
          unelevated rounded label="Next" @click="login"></q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="loginDialog1" persistent>
      <q-card id="login1" style="min-width:500px">  
        <q-card-section class="flex justify-between items-center">
          <div class="text-xl font-bold">Login</div>
          <q-icon size="lg" color="blue" name="fab fa-twitter"></q-icon>
          <q-btn icon="fas fa-times" @click="reset" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="">
          <span class=" font-semibold text-lg">Enter your password</span>
          <q-input class=" q-mt-lg q-mb-sm"  outlined v-model="auth.password"
            :type="isPwd ? 'password' : 'text'"
           label="Password" autofocus @keyup.enter="login1">
            <template v-slot:append>
              <q-icon
                size="xs"
                :name="isPwd ? 'fas fa-eye' : 'fas fa-eye-slash'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template> 
          </q-input>
            <p class=" text-red-400" v-if="errors.password">{{errors.password}}</p>
          <q-btn no-caps class=" text-blue mt-16 full-width bg-transparent" unelevated rounded label="Forgot password?"></q-btn>
          <q-btn no-caps class="mt-5 font-bold full-width" @click="login1" :disabled="auth.password.length < 8" :class="dark? 'bg-white text-black': 'bg-blue'" unelevated rounded label="Login"></q-btn>  
        </q-card-section>
      </q-card>
    </q-dialog>
  </template>
</auth-layout>
</template>

<script>
import {ref, reactive, watch} from 'vue'
import {useQuasar} from 'quasar'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  setup() {
    const $q = useQuasar()
    const router = useRouter();
    const store = useStore();
    const auth = reactive({
      credentials: '',
      password: ''
    });
    const errors = reactive({
      credentials: '',
      password: ''
    })
    
    const loginDialog = ref(false);
    const loginDialog1 = ref(false);

    function reset() {
      auth.credentials ='';
      auth.password = '';
    }
    const dark  = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);
    function googleLogin() {

    }
    function facebookLogin() {

    }
    function login() {
        axios.post('/api/login',auth).then(response => {
          loginDialog.value=false;
          loginDialog1.value=true;

        }).catch(error => {
          errors.credentials = error.response.data
        })
     
    }
    function login1() {
      axios.post('/api/login1',auth).then(response => { 
          $q.cookies.set('authToken', response.data, {expires: '30d'});
          axios.get('/api/user', {
                headers:{
                'Authorization': `Bearer ${response.data}`
                }
          }).then(res => {
            store.commit('loginUser',res.data);
            store.commit('setAuthToken', response.data);
            store.dispatch('fetchUserDetail', response.data);
            router.push('/');
            
          })              
          
  
        }).catch(error => {
          errors.password = error.response.data
        })     
    }
    return {
      dark,
      isPwd:ref(true),
      auth,
      errors,
      reset,
      loginDialog,
      loginDialog1,
      login,
      login1,
      facebookLogin,
      googleLogin,
    }
  },
}
</script>

<style scoped>
 @media screen and (max-width:500px) {
   #login1 {
   width:100% ! important
}}

</style>