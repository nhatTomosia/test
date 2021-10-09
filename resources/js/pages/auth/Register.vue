<template>
<auth-layout>
  <template #header>
    Join Twitter now
  </template>
  <template #content>
    <q-btn unelevated style="width:300px" class="mt-10"  :class="dark? 'bg-white text-black': 'bg-blue'" no-caps rounded icon="fab fa-google" label="Sign up with Google"></q-btn>
    <br>
    <q-btn unelevated no-caps style="width:300px"  class="mt-5" :class="dark? 'bg-white text-black': 'bg-blue'" rounded icon="fab fa-facebook" label="Sign up with Facebook"></q-btn>
    <br>
    <q-btn unelevated no-caps style="width:300px" @click="register" class="mt-5" :class="dark? 'bg-white text-black': 'bg-blue'"  rounded  label="Sign up with phone or email"></q-btn>
    <p class=" text-secondary mt-5">By signing up, you agree to the <span class=" hover:underline cursor-pointer text-blue">Terms of Service </span>
    and <span class="text-blue hover:underline cursor-pointer">Privacy Policy</span>, including <span class="text-blue cursor-pointer hover:underline">Cookie Use</span>.</p>
    <p>Already have an account? <router-link class="text-blue hover:underline" to="/login">Sign in</router-link></p>

    <q-dialog v-model="registerDialog" persistent>
      
      <q-card class="register" style="min-width:500px">
        <q-card-section class="flex justify-between items-center">
          <div class="text-xl font-bold">Register</div>
          <q-icon size="lg" color="blue" name="fab fa-twitter"></q-icon>
          <q-btn icon="fas fa-times" @click="reset" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <span class=" font-semibold text-lg">Create your account</span>
          <q-input class=" q-mt-lg q-mb-sm" outlined v-model="auth.name" label="Name" autofocus>
          </q-input>
          <p class=" text-red-400 font-bold" v-if="errors.name">{{errors.name}}</p>
          <q-input class=" q-mt-lg q-mb-sm" outlined v-model="auth.username" label="Username" autofocus>
          </q-input>
          <p class=" text-red-400 font-bold" v-if="errors.username">{{errors.username}}</p>
          <q-input class=" q-mt-lg q-mb-sm " type="email" outlined v-model="auth.email" label="Email"  />
          <p class=" text-red-400 font-bold" v-if="errors.email">{{errors.email}}</p>
          <q-input class=" q-mt-lg q-mb-sm" outlined v-model="auth.phone" label="Phone number"  />
          <p class=" text-red-400 font-bold q-mb-lg" v-if="errors.phone">{{errors.phone}}</p>

          <q-btn no-caps class="mt-5 font-bold full-width" 
          :disabled="auth.name.length <3 || auth.phone.length <10  || !auth.email || auth.username.length < 3" :class="dark? 'bg-white text-black': 'bg-blue'" 
          unelevated rounded label="Next" @click="register1"></q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="registerDialog1" persistent>
      <q-card class="register" style="min-width:500px">
        <q-card-section class="flex justify-between items-center">
          <q-btn rounded unelevated @click="registerDialog1=false; registerDialog=true" class=" cursor-pointer fa-lg" icon ="fas fa-arrow-left"></q-btn>
          <q-icon size="lg" color="blue" name="fab fa-twitter"></q-icon>
          <q-btn icon="fas fa-times" @click="auth = []" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section class="">
          
          <span class="font-bold"> Date of Birth</span>
          <p class="text-secondary">
              This will not be publicly visible. Claim your age, even if this account is for a business, pet, or something else.
          </p>
          
          <q-date class=" q-mt-md full-width" outlined v-model="auth.dob" default-year-month="2000/09"  />
          
          <q-btn no-caps class="mt-5 font-bold full-width" :disabled="!auth.dob" :class="dark? 'bg-white text-black': 'bg-blue'" 
          unelevated rounded label="Next" @click="register2"></q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="registerDialog2" persistent>
      <q-card class="register" style="min-width:500px">
        <q-card-section class="flex justify-between items-center">
           <q-btn rounded unelevated @click="registerDialog2=false; registerDialog1=true" class=" cursor-pointer fa-lg" icon ="fas fa-arrow-left"></q-btn>
          <q-icon size="lg" color="blue" name="fab fa-twitter"></q-icon>
          <q-btn icon="fas fa-times" @click="reset" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="">
          <span class=" font-semibold text-lg">Enter your password</span>
          <q-input class=" q-mt-lg q-mb-sm" :type="isPwd ? 'password' : 'text'" outlined v-model="auth.password" label="Password" autofocus >
            <template v-slot:append>
              <q-icon
                size="xs"
                :name="isPwd ? 'fas fa-eye' : 'fas fa-eye-slash'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template> 
          </q-input>
          <p class=" text-red-400 font-bold" v-if="errors.password">{{errors.password}}</p>
          <q-input class=" q-mt-lg q-mb-sm" :type="isPwd1 ? 'password' : 'text'" outlined v-model="auth.password_confirmation" label="Confirm your password">
            <template v-slot:append>
              <q-icon
                size="xs"
                :name="isPwd1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                class="cursor-pointer"
                @click="isPwd1 = !isPwd1"
              />
            </template> 
          </q-input>
          <p class=" text-red-400 font-bold q-mb-lg" v-if="errors.password_confirmation">{{errors.password_confirmation}}</p>
          <q-btn no-caps class="mt-5 font-bold full-width" :disabled="!auth.password || !auth.password_confirmation" :class="dark? 'bg-white text-black': 'bg-blue'" 
          unelevated rounded label="Register" @click="register3"></q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </template>
</auth-layout>
</template>

<script>
import {ref, reactive, watch, watchEffect, onUpdated} from 'vue'
import {useStore} from 'vuex'
import {useQuasar} from 'quasar'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore();
    const $q = useQuasar();
    const router = useRouter();
    const auth = reactive({
      name: '',
      username:'',
      dob: '',
      phone:'',
      email:'',
      password: '',
      password_confirmation:'',

    });

    const errors = reactive({
      name: '',
      username:'',
      dob: '',
      phone:'',
      email:'',
      password: '',
      password_confirmation:'',

    });

    const registerDialog = ref(false);
    const registerDialog1 = ref(false);
    const registerDialog2 = ref(false);
    function reset() {
      auth.name = ''
      auth.username =''
      auth.dob = ''
      auth.phone = ''
      auth.email = ''
      auth.password =  ''
      auth.password_confirmation =''
    }
    const dark  = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);
    function googleRegister() {

    }
    function facebookRegister() {

    }
    function register() {
      registerDialog.value = true;
      
    }
    function register1() {
      axios.post('/api/register',auth).then(response => {
        registerDialog.value = false;
        registerDialog1.value = true;
        
      }).catch(error => {
        if(error.response.data.errors.name) {
        errors.name = error.response.data.errors.name.toString()
        }
        if(error.response.data.errors.phone){
        errors.phone = error.response.data.errors.phone.toString()
        }
        if(error.response.data.errors.email){
        errors.email = error.response.data.errors.email.toString()
        }
        if(error.response.data.errors.username){
        errors.username = error.response.data.errors.username.toString()
        }
      });
      watch(auth , (currentValue, oldValue) => {
          errors.name = '';
          errors.phone = '';
          errors.email = '';
          errors.username = '';
        })
      
      
    }
    function register2() {
      axios.post('/api/register1',auth).then(response => {
        registerDialog1.value = false;
        registerDialog2.value = true;
      }).catch(error => {
        
      });     
    }

    function register3() {
      axios.post('/api/register2',auth).then(response => {
        $q.cookies.set('authToken', response.data, {expires: '1m'});
        store.commit('setAuthToken',response.data);
        store.commit('setUser',response.data);
        router.push('/');
      }).catch(error => {
          errors.password = error.response.data
      });
      
    }
    return {
      isPwd:ref(true),
      isPwd1:ref(true),
      dark,
      auth,
      errors,
      reset,
      registerDialog,
      registerDialog1,
      registerDialog2,
      register,
      register1,
      register2,
      register3,
      facebookRegister,
      googleRegister,
    }
  },
}
</script>

<style scoped>
 @media screen and (max-width:500px) {
   .register {
   width:100% ! important
}}

</style>