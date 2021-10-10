<template>
<user-layout>
  <template #header>
      Home
  </template>

  <template #content>
      <NewTweet></NewTweet>
      <q-separator class=" q-mt-md"></q-separator>
      <q-infinite-scroll  @load="onLoad"  v-if="tweets">
          <div v-for="tweet in tweets" :key="tweet.id">
            <Tweet
              :tweet="tweet"
              ></Tweet>
              <q-separator></q-separator>
          </div>
          <template v-slot:loading v-if="pagesCount >= newsFeedPageNumber || !pagesCount">
            <div class="row justify-center q-my-md">
              <q-spinner-dots color="primary" size="40px" />
            </div>
        </template>
      </q-infinite-scroll>
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
  const newsFeedPageNumber = computed(() => store.state.newsFeedPageNumber);
  const pagesCount = computed(() => store.state.pagesCount);
  store.commit('resetNewsFeed')
  store.commit('getTweets');

  const tweets = computed(() => store.state.tweets);

 
  return {
      user,
      tweets,
      pagesCount,
      newsFeedPageNumber,
      onLoad(index, done) {
        setTimeout(() =>{
          if(newsFeedPageNumber.value <= pagesCount.value){
            store.commit('getTweets');
          }
        done();
        },1000)
      },
      
  }
}

}
</script>

<style scoped>
</style>