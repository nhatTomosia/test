<template>
  <q-layout v-if="user" view="lHr LpR fFf">

    <q-header reveal bordered :class="darkStatus? 'bg-dark': 'bg-white'">
      <q-toolbar>
        <q-toolbar-title>
          <div class=" flex justify-between font-bold">
            <slot name="header">
              
            </slot>
            <q-btn @click="dark" rounded unelevated>
              <i class="fas fa-moon"></i>
              <q-tooltip
                transition-show="rotate"
                transition-hide="rotate"
                self="center middle"

              >
                Toggle Light/Dark Mode
              </q-tooltip>
            </q-btn>


          </div>
          
        </q-toolbar-title>
      </q-toolbar>
          
    </q-header>
    
    <q-drawer :width="mediumState ? 300: 400"  :mini-width=70 :breakpoint=200 :mini="miniState" show-if-above side="left" bordered>
      <q-list class=" ml-5 md:ml-5  2xl:ml-32 mr-5">

        <q-item class="">
          <q-btn no-caps unelevated rounded to="/">
            <q-icon name="fab fa-twitter" class="text-blue"></q-icon>
            
          </q-btn>
          
        </q-item>
        
        <q-item class="mt-3" >
          <q-btn no-caps unelevated rounded to="/"  >
            <q-icon name="fas fa-home" :class="link==='/'? 'text-blue'  : ''"></q-icon>
            <span :class="link==='/'? 'font-semibold'  : ''  " class="ml-5 text-xl gt-sm">Home</span>
            
          </q-btn>
          
        </q-item>

        <q-item class="mt-3" >
          <q-btn no-caps unelevated rounded to="/explore"  >
            <q-icon name="fas fa-globe" :class="link==='/explore'? 'text-blue'  : ''"></q-icon>
            <span :class="link==='/explore'? 'font-semibold' : ''  " class="ml-5 gt-sm text-xl">Explore</span>
            
          </q-btn>
          
        </q-item>
        <q-item class="mt-3" >
          <q-btn no-caps unelevated rounded to="/notifications" >
            <q-icon name="fas fa-bell" :class="link==='/notifications'? 'text-blue'  : ''"></q-icon>
            <span :class="link==='/notifications'? 'font-semibold' : ''  " class="ml-5 gt-sm text-xl">Notifications</span>
            
          </q-btn>
          
        </q-item>
        <q-item class="mt-3" >
          <q-btn no-caps unelevated rounded to="/messages"  >
            <q-icon name="fas fa-comment" :class="link==='/messages'? 'text-blue'  : ''"></q-icon>
            <span :class="link==='/messages'? 'font-semibold' : ''  " class="ml-5 gt-sm text-xl">Messages</span>
            
          </q-btn>
          
        </q-item>
        <q-item class="mt-3" >
          <q-btn no-caps unelevated rounded to="/bookmarks" >
            <q-icon name="fas fa-bookmark" :class="link==='/bookmarks'? 'text-blue'  : ''"></q-icon>
            <span :class="link==='/bookmarks'? 'font-semibold' : ''  " class="ml-5 gt-sm  text-xl">Bookmarks</span>
            
          </q-btn>
          
        </q-item>
        <q-item class="mt-3" >
          <q-btn no-caps unelevated rounded to="/lists"  >
            <q-icon name="fas fa-stream" :class="link==='/lists'? 'text-blue'  : ''"></q-icon>
            <span :class="link==='/lists'? 'font-semibold' : ''  " class="ml-5 gt-sm text-xl">Lists</span>
            
          </q-btn>
          
        </q-item>
        <q-item class="mt-3" >
          <q-btn no-caps unelevated rounded :to="{name:'profile', params:{username:user.username}}"  >
            <q-icon name="fas fa-user-circle" :class="link==='/' + user.username ? 'text-blue'  : ''"></q-icon>
            <span :class="link === ('/' + user.username)  ? 'font-semibold' : ''" class="ml-5 gt-sm  text-xl">Profile</span>
                        
          </q-btn>
          
        </q-item>

        <q-btn @click="newTweetPopup" rounded no-caps class="bg-primary mt-3 full-width">
          <span  class=" py-3 font-bold text-white gt-sm">Tweet</span>
          
          <span class = "text-white fab fa-pushed lt-md text-xl"></span>
        </q-btn>
          <q-dialog position="top" v-model="newTweetDialog">
            <q-card style="width:500px; height:300px">
              <div class="q-pa-md" >
                <q-btn icon="fas fa-times" id="closeNewTweet" flat round dense v-close-popup />
              </div>
              <div>
                <NewTweet></NewTweet>
              </div>
              
            </q-card>
            
          </q-dialog>
        <q-item clickable class=" fixed bottom-3 rounded-full">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{user.name}}
            </q-item-label>
            <q-item-label>
              <span :class="darkStatus? 'text-gray-300': 'text-gray-500'">{{user.username}}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-btn-dropdown dropdown-icon="fas fa-ellipsis-h" size="xs" unelevated >
              <q-btn @click="logout"  unelevated no-caps>
                Log out
              </q-btn>
              <q-separator></q-separator>
              <q-btn v-if="user" :to="{name:'profile',params:{username: user.username}}"  unelevated no-caps>
                Profile
              </q-btn>
            </q-btn-dropdown>
          </q-item-section>
            
            
        </q-item>

        
      </q-list>
    </q-drawer>

    <q-drawer v-if="link != '/messages'" :width="mediumState ? 300: 400"  :mini-width=150 :breakpoint=1024 :mini="miniState" show-if-above side="right" bordered>
        <q-input  rounded standout v-model="search" dense class="p-2 q-mr-xl" :placeholder="miniState ? '' : 'Search'">
          <template v-slot:prepend>
            <q-icon name="fas fa-search" size="xs" />
          </template>
          <template v-slot:append>
            <q-icon v-if="search !== ''" size="xs" name="fas fa-times" @click="search = ''" class="cursor-pointer" />
          </template>
        </q-input>

        <q-list class="mt-5 q-ml-md q-mr-xl rounded-xl " :class="darkStatus ? 'bg-grey-10':'bg-gray-100'" >
          <div class="flex q-pa-md justify-between">
          <h6 class=" font-bold">Trends for you</h6>
          <q-btn class=" bg-transparent" unelevated rounded size="sm" icon="fas fa-cog"></q-btn>
          </div>
          <q-item clickable>
            
            <q-item-section>
              <q-item-label caption>
                Vietnam - Trending
              </q-item-label>
              <q-item-label>
                #content
              </q-item-label>
              <q-item-label caption>
                790k tweets
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-btn-dropdown class="bg-transparent" unelevated rounded size="xs" dropdown-icon="fas fa-ellipsis-h">
            <q-list>
              <q-item v-close-popup  clickable>
                <q-item-section>
                  <q-item-label>Not interested in this</q-item-label>
                </q-item-section>
                
              </q-item>

              <q-item v-close-popup  clickable>
                <q-item-section>
                  <q-item-label>This trend is harmfum or spammy</q-item-label>
                </q-item-section>
                
              </q-item>
    
            </q-list>
          </q-btn-dropdown>
            </q-item-section>
          </q-item>


          <q-item clickable class=" rounded-b-xl">
            <q-item-section class="">
              <q-item-label class="text-primary">
                Show more
              </q-item-label>
            </q-item-section>

          </q-item>
        </q-list>

        <WhoToFollow :connect="connect"
         :class="darkStatus ? 'bg-grey-10':'bg-gray-100'" class="mt-5 q-ml-md q-mr-xl rounded-xl">
        </WhoToFollow>

    
        
        <div class=" q-ml-lg q-mr-lg q-mt-sm leading-5 text-xs">
          <router-link class="q-mr-sm text-secondary hover:underline " to="/">Terms of Service</router-link>
          <router-link class="q-mr-sm  text-secondary hover:underline " to="/">Privacy Policy</router-link>
          <router-link class="q-mr-sm text-secondary hover:underline " to="/">Cookie Policy</router-link>
          <router-link class="q-mr-sm text-secondary hover:underline " to="/">Ads Info</router-link>
          <br>
          <router-link to="/" class="q-mr-sm text-secondary hover:underline "> &copy; 2021 Twitter, Inc.</router-link>
        </div>
        <div  class="fixed-bottom  q-ml-lg q-mr-lg q-mt-sm">
          <q-list class="rounded-t-2xl z-top shadow-10" :class="darkStatus? 'bg-dark': 'bg-white'" bordered>
            <q-item clickable @click="toggle" class=" rounded-t-2xl">
              <q-item-section>
                <q-item-label>
                  <span class=" font-bold">Messages</span>
                </q-item-label>
              </q-item-section>
                
              <q-item-section  top side>
                <div class="" >
                  <q-btn size="sm" unelevated flat round icon="fas fa-comment-medical"></q-btn>
                  <q-btn size="sm" unelevated flat round animated :icon="toggled?'fas fa-arrow-down':'fas fa-arrow-up'"></q-btn>
                </div>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
            <Messages :class="toggled ? 'block':'hidden'"></Messages>
          </q-list>
        </div>
    </q-drawer>
    
    <q-page-container>
        <slot name="content">
        
        </slot>
              
    </q-page-container>
  
  </q-layout>
</template>

<script>
import { ref, watch, computed, toRefs } from 'vue'
import { useStore } from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import {useQuasar} from 'quasar'
import WhoToFollow from '../components/WhoToFollow.vue'
import Messages from '../components/Messages.vue'
import NewTweet from '../components/NewTweet.vue'
export default {
  
  components:{
      WhoToFollow,
      Messages,
      NewTweet
  },
  setup () {

    const $q = useQuasar()
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const user = computed(() => store.state.user);
    const connect = computed(() =>store.state.connect);
    const darkStatus = computed(() => $q.dark.isActive)
    function dark() {
      $q.dark.toggle()
    }

    const newTweetDialog = ref(false)
    
    const mini = ref('1024')
    const medium = ref ('1439')
    const toggled = computed(() => store.state.messageToggled)
    function toggle() {
      $('.messages').toggleClass('hidden');
      store.commit('toggleMessage');
    }

    function logout() {
      store.dispatch('logout');
      $q.cookies.remove('authToken');
      $q.cookies.remove('user');
      router.push('/login')
    }

    if(!store.state.authToken) {
      router.push('/login');
    }
    const finished = computed(() => store.state.finishedTweet);
    watch(finished ,(currentValue, oldValue) => { 
        if(finished.value == true) {
          $("#closeNewTweet").click();
          $q.notify({
            message: 'Tweet has been posted!',
            color: 'blue',
            position: 'top'
          });
          
      }
    });
    function newTweetPopup() {
      newTweetDialog.value = true;
      store.commit('finishTweet', false)
    }

    return {
      miniState: computed(() => {
        return $q.screen.width < mini.value
      }),
      mediumState: computed(() => {
        return $q.screen.width < medium.value
      }),
      user,
      logout,
      search: ref(''),
      link: computed(() => route.path),
      dark,
      darkStatus,
      toggle,
      toggled,
      finished,
      newTweetPopup,
      newTweetDialog,
      connect

    }
  }
}
</script>

<style scoped>
.q-layout__section--marginal {
    color: inherit !important;
}
.menu-link {
  font-weight: bolder;
  color: inherit
}
</style>