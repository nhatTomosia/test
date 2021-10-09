<template>
<user-layout>
  <template #header>
      Home
  </template>

  <template #content>
      <NewTweet></NewTweet>
      <q-separator class=" q-mt-md"></q-separator>
      <q-list>    
        <q-infinite-scroll v-if="tweets">
          <div v-for="tweet in tweets" :key="tweet.id">
            <Tweet
              :username="tweet.user.username"
              :name="tweet.user.name"
              :date="tweet.updated_at"
              :content="tweet.content"
              :likes="tweet.likes"
              :media_source="tweet.media_source"
              :retweets="tweet.retweets"
              :comments_count="tweet.comments_count"
              :comments="tweet.comments"
              ></Tweet>
              <q-separator></q-separator>
          </div>
      </q-infinite-scroll>
    </q-list>
  </template>
</user-layout>
</template>

<script>
import {ref, reactive, computed, watch} from 'vue'
import Tweet from '../../components/Tweet.vue'
import NewTweet from '../../components/NewTweet.vue'
import {useStore} from 'vuex'
export default {
  components: {
    Tweet,
    NewTweet
  },

setup() {
  const store = useStore();
  const user = computed(() =>store.state.user);
  store.commit('fetchFollowers', user.value);
  store.commit('fetchFollowings',user.value);
  store.commit('getTweets',user.value);
  store.commit('getConnect',user.value);
  const tweets = computed(() =>store.state.tweets);
  return {
      user,
      tweets,
  }
}
}
</script>

<style scoped>
</style>