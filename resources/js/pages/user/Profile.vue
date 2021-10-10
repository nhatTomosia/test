<template>
    <user-layout>
        <template #header>
            <div class="row">
                <div class="col-2 flex align-center">
                    <q-btn rounded @click="router.go(-1)" unelevated size="sm" icon="fas fa-arrow-left"></q-btn>
                </div>
                <div class="col-8 offset-2">
                    <div class="row">
                        <div class="col-12"><span class="font-bold text-sm">{{user.name}}</span></div>
                        <span class=" text-xs text-secondary q-mb-xs">{{tweets.count}} tweets</span>
                    </div>
                </div>
            </div>
        </template>

        <template #content>
            <q-img height="250px"  src="https://placeimg.com/500/300/nature"></q-img>
            <q-avatar :size="miniState? '70px':'100px'" style="margin-top:-50px" class="q-ml-md">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="q-pa-md  left-5" v-if="user">
                <span class=" font-bold text-lg">{{user.name}}</span>
                <p class=" leading-3 text-secondary ">{{user.username}}</p>
                <p class = " text-secondary leading-3"><span class=" fas fa-calendar q-mr-xs"></span> Joined {{date(user.created_at)}}</p>
                <span class="font-bold">{{followings_count}}</span> <span class="text-secondary" > Following</span>
                <span class="q-ml-md font-bold">{{followers_count}}</span> <span class="text-secondary " >Followers</span>
            </div>
            
            <q-tabs
                v-model="tab"
                align="justify"
                class="text-teal"
                active-color="primary"
                indicator-color="primary"
                no-caps
            >
                <q-tab name="tweets" label="Tweets" />
                <q-tab name="with-replies" label="Tweets & Replies" />
                <q-tab name="media"  label="Media" />
                <q-tab name="likes"  label="Likes" />
                
            </q-tabs>
            <q-separator></q-separator>
            <q-tab-panels swipeable  v-model="tab" animated>
                <q-tab-panel name="tweets">
                    <WhoToFollow></WhoToFollow>
                    <q-separator></q-separator>
                    <q-list>
                        
                        <q-infinite-scroll>
                            <div v-for="tweet in tweets.detail" :key="tweet.id">
                                <Tweet
                                :tweet="tweet"
                                ></Tweet>
                                <q-separator></q-separator>
                            </div>
                        </q-infinite-scroll>
                    </q-list>
                </q-tab-panel>

                <q-tab-panel name="with-replies">
                    <WhoToFollow></WhoToFollow>
                    <q-separator></q-separator>
                    <div v-for="tweet in tweets.detail" :key="tweet.id">
                        <Tweet
                        :tweet="tweet"
                        ></Tweet>
                        <q-separator></q-separator>
                    </div>
                </q-tab-panel>

                <q-tab-panel name="media">
                    
                </q-tab-panel>
                <q-tab-panel name="likes">
                    <Tweet 
                    :tweet="tweet"
                    ></Tweet>
                    <q-separator></q-separator>
                </q-tab-panel>
            </q-tab-panels>
        </template>
    </user-layout>
</template>

<script>
import {computed,ref } from 'vue'
import {useQuasar} from 'quasar'
import WhoToFollow from '../../components/WhoToFollow.vue'
import Tweet from '../../components/Tweet.vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import moment from 'moment'

export default {
    components: {
        WhoToFollow,
        Tweet,
    },
    setup() {
        const tweets = ref([]);
        const $q = useQuasar();
        const router = useRouter();
        const store = useStore();
        const user = computed(() =>store.state.user);
        function date(date) {
            return moment(date).format("MMM YYYY");
        }

        const followers = computed(() =>store.state.user.followers);
        const followings = computed(() =>store.state.user.followings);
        const followers_count =computed(() => store.state.user.followers.length);
        const followings_count =computed(() => store.state.user.followings.length);
        
        axios.post('/api/tweets',user.value).then(response => {
            tweets.value = response.data;
        });
        
        return {
            miniState: computed(() => {
                return $q.screen.width < 1024
            }),
            tab: ref('tweets'),
            router,
            tweets,
            user,
            date,
            followings_count,
            followings,
            followers,
            followers_count,
        }
    }
}
</script>

<style scoped>
.q-tab-panel {
    padding: 0!important;
}
</style>