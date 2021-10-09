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
                    {{name}}
                </router-link>
                <router-link to="/" class="stretched-link hover:underline q-mr-xs text-secondary" >
                    {{username}}
                </router-link>
                <span class=" q-mr-xs text-secondary" >
                    &middot; {{ago(date)}}
                </span>
              </q-item-label>
            </q-item-section>
                 
            <q-item-section side top>
              <q-btn-dropdown class="bg-transparent" unelevated rounded size="xs" dropdown-icon="fas fa-ellipsis-h">
                <q-list>
                  <q-item v-close-popup clickable>
                    <q-item-section>
                      <q-item-label>Not interested in this tweet</q-item-label>
                    </q-item-section>
                    
                  </q-item>

                  <q-item v-close-popup  clickable>
                    <q-item-section>
                      <q-item-label>Unfollow {{username}}</q-item-label>
                    </q-item-section>
                    
                  </q-item>
                  <q-item v-close-popup  clickable>
                    <q-item-section>
                      <q-item-label>Add/Remove {{username}} from Lists</q-item-label>
                    </q-item-section>
                    
                  </q-item>
                  <q-item v-close-popup  clickable>
                    <q-item-section>
                      <q-item-label>Mute {{username}}</q-item-label>
                    </q-item-section>
                    
                  </q-item>
                  <q-item v-close-popup  clickable>
                    <q-item-section>
                      <q-item-label>Block {{username}}</q-item-label>
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
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>

          <q-item style="margin-top:-15px">
              {{content}}
          </q-item>
          <router-link v-if="media_source" to="/">
            <q-img class="rounded-xl q-mt-md"
                :src="media_source"
            />
          </router-link>

          <div class="q-mt-md flex justify-around">
            <q-btn size="sm" unelevated class="bg-transparent text-blue" icon="fas fa-comment">
              <span class="text-secondary q-ml-md">{{comments_count}}</span>
              <q-tooltip anchor="top right" self="top right">
                  Reply
              </q-tooltip>
            </q-btn>

            <q-btn size="sm" unelevated class=" bg-transparent text-blue" icon="fas fa-retweet">
                <span class="text-secondary q-ml-md">{{retweets}}</span>
                <q-tooltip anchor="top right" self="top right">
                    Retweet
                </q-tooltip>
            </q-btn>

            <q-btn size="sm" unelevated class=" bg-transparent text-blue" icon="fas fa-heart">
                <span class="text-secondary q-ml-md">{{likes}}</span>
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

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    media_source: {
      type: String,
      required: false
    },
    likes: {
      type: Number,
      required: true,
    },
    retweets: {
      type: Number,
      required:true
    },
    comments_count: {
      type: Number,
      required: true,
    },
    comments: {
      type: Object,
      required: true,
    }

  },

  setup() {
    function ago(date) {
        return moment(date).fromNow();
    }
    return {
      ago,
    }
  },

}
</script>
