<template>
    <div class="row q-pa-md">
          <div class="col-1">
              <q-avatar class="">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
          </div>
          <div class="col-11 q-pl-lg">
              <q-input autogrow :rules="[val => val.length <= 280 || 'Your tweet is too long!']" class=" overflow-hidden-y" v-model="tweet.content" placeholder="What's happening?"></q-input>
              <div class="flex justify-between q-mt-md ">
                  <div>
                      <q-btn padding="7px" size="sm" unelevated class=" bg-transparent text-blue" icon="fas fa-image">
                          <q-tooltip>
                              Images
                          </q-tooltip>
                      </q-btn>
                      <q-btn padding="7px" size="sm" unelevated class=" bg-transparent text-blue" icon="fas fa-film">
                          <q-tooltip>
                              Videos
                          </q-tooltip>
                      </q-btn>
                      <q-btn padding="7px" size="sm" unelevated class=" bg-transparent text-blue" icon="fas fa-poll">
                          <q-tooltip>
                              Polls
                          </q-tooltip>
                      </q-btn>
                      <q-btn padding="7px" size="sm" unelevated class=" bg-transparent text-blue" icon="fas fa-grin">
                          <q-tooltip>
                              Emoji
                          </q-tooltip>
                      </q-btn>
                      <q-btn padding="7px" size="sm" unelevated class=" bg-transparent text-blue" icon="fas fa-calendar">
                          <q-tooltip>
                              Schedule
                          </q-tooltip>
                      </q-btn>
                      
                      
                  </div>
                  <div>
                      <q-circular-progress
                      :max="280"
                      class="q-mr-md"
                      show-value
                      size="md"
                      :value="tweetLength"
                      color="blue"
                      track-color="grey-3"
                      />
                      <q-btn unelevated no-caps class=" bg-primary text-white" 
                      padding="5px 20px" @click="newTweet" :disabled="tweetLength <1 || tweetLength>280" rounded><span class="font-bold"> Tweet</span></q-btn>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
import {ref, reactive, computed} from 'vue'
import {useStore} from 'vuex'
export default {
    setup() {
        const store = useStore();
        const finished = computed(() => store.state.finishedTweet);
        const user = computed(() => store.state.user);
        const tweet = reactive({
            content:'',
            user_id: user.value.id,
            media_source:''   
        });
        const tweetLength = computed(() => tweet.content.length)
        function newTweet() {
            axios.post('/api/new-tweet',tweet).then(response => {
                store.commit('addTweets',response.data);
                tweet.content='';
                tweet.media_source = '';
                store.commit('finishTweet',true);
            }).then(store.commit('finishTweet', false))
            
        }

        return {
            tweet,
            newTweet,
            tweetLength,
            finished,
        }
    },
}
</script>