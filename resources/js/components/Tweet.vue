<template>
  <div class="row q-pa-md ">
      <div class="col-1">
          <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
      </div>

      <div class="col-11 relative-position">
          <q-item class="">
            <q-item-section class="">
              <q-item-label>
                <router-link to="/" class="font-bold hover:underline q-mr-xs">
                    {{tweet.user.name}}
                </router-link>
                <router-link to="/" class="stretched-link hover:underline q-mr-xs text-secondary" >
                    {{tweet.user.username}}
                </router-link>
                <span class=" q-mr-xs text-secondary" >
                    &middot; {{ago(tweet.updated_at)}}
                </span>
              </q-item-label>
            </q-item-section>
                 
            <q-item-section side top>
              <q-btn-dropdown class="bg-transparent" unelevated rounded size="xs" dropdown-icon="fas fa-ellipsis-h">
                <q-list>
                  <div v-if="tweet.user.id != user.id">
                    <q-item v-close-popup clickable>
                      <q-item-section>
                        <q-item-label>Not interested in this tweet</q-item-label>
                      </q-item-section>
                      
                    </q-item>

                    <q-item v-close-popup  clickable>
                      <q-item-section>
                        <q-item-label>Unfollow {{tweet.user.username}}</q-item-label>
                      </q-item-section>
                      
                    </q-item>
                    <q-item v-close-popup  clickable>
                      <q-item-section>
                        <q-item-label>Add/Remove {{tweet.user.username}} from Lists</q-item-label>
                      </q-item-section>
                      
                    </q-item>
                    <q-item v-close-popup  clickable>
                      <q-item-section>
                        <q-item-label>Mute {{tweet.user.username}}</q-item-label>
                      </q-item-section>
                      
                    </q-item>
                    <q-item v-close-popup  clickable>
                      <q-item-section>
                        <q-item-label>Block {{tweet.user.username}}</q-item-label>
                      </q-item-section>
                      
                    </q-item>
                  
                    <q-item v-close-popup  clickable>
                      <q-item-section>
                        <q-item-label>Embed Tweet</q-item-label>
                      </q-item-section>
                      
                    </q-item>
                    <q-item v-close-popup  clickable>
                      <q-item-section>
                        <q-item-label>Report Tweet</q-item-label>
                      </q-item-section>
                    </q-item>
                  </div>
                  <q-item @click="deleteTweet" v-close-popup v-else  clickable>
                    <q-item-section>
                      <q-item-label>Delete Tweet</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>

          <q-item style="margin-top:-15px">
              {{tweet.content}}
          </q-item>
          <router-link v-if="tweet.media_source" to="/">
            <q-img class="rounded-xl q-mt-md"
                :src="tweet.media_source"
            />
          </router-link>

          <div class="q-mt-md flex justify-around">
            <q-btn size="sm" unelevated class="bg-transparent text-blue" icon="fas fa-comment">
              <span class="text-secondary q-ml-md">{{tweet.comments_count}}</span>
              <q-tooltip anchor="top right" self="top right">
                  Reply
              </q-tooltip>
            </q-btn>

            <q-btn size="sm" unelevated class=" bg-transparent text-blue" icon="fas fa-retweet">
                <span class="text-secondary q-ml-md">{{tweet.retweets}}</span>
                <q-tooltip anchor="top right" self="top right">
                    Retweet
                </q-tooltip>
            </q-btn>

            <q-btn size="sm" unelevated class=" bg-transparent text-blue" icon="fas fa-heart">
                <span class="text-secondary q-ml-md">{{tweet.likes}}</span>
                <q-tooltip anchor="top right" self="top right">
                    Like
                </q-tooltip>
            </q-btn>

            <q-btn size="sm" unelevated no-caps class="bg-transparent text-blue" icon="fas fa-share">
                <q-tooltip anchor="top right" self="top right">
                    Share
                </q-tooltip>
            </q-btn>
          </div>
      </div>
  </div>
</template>
<script>
import moment from 'moment'
import {computed} from 'vue'
import {useStore} from 'vuex';
import {useQuasar} from 'quasar'
export default {
  props: {
    tweet: {
      type: Object,
      required: true,
    },

  },

  setup(props) {
    const $q = useQuasar()
    const store = useStore();
    const user = computed(() => store.state.user);
    const darkStatus = computed(() => $q.dark.isActive)
    const deleteTweet = () => {
      $q.dialog({
          dark: darkStatus.value,
          title: 'Confirm',
          message: 'Are you sure you want to delete this Tweet?',
          cancel: true,
          }).onOk(() => {
            axios.post('/api/delete-tweet', props.tweet).then(response => {
            store.commit('deleteTweet', props.tweet);
            $q.notify({
                message: 'Tweet has been deleted!',
                color: 'blue',
                position: 'top',
            });    
          })
          })
      
    }

    function ago(date) {
        return moment(date).fromNow();
    }
    return {
      user,
      deleteTweet,
      ago,
    }
  },

}
</script>
