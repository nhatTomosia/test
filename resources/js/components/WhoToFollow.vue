<template>
  <q-list class="">
    <h6 class="q-pa-md font-bold">Who to follow</h6>
    <q-item clickable v-for="user in connect" :key="user.id">
      <q-item-section avatar>
        <q-avatar>
          <img :src="user.avatar">
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>
          <span class=" font-bold">{{user.name}}</span>
        </q-item-label>
        <q-item-label caption>
          {{user.username}}
        </q-item-label>
        <q-item-label caption>
          {{user.description}}
        </q-item-label>
        
      </q-item-section>

      <q-item-section v-if="user.followed" side>
        <q-btn rounded unelevated no-caps 
        :class="darkStatus? 'bg-white text-black' : 'bg-dark text-white'">Follow</q-btn>
      </q-item-section>
      <q-item-section v-else side>
        <q-btn rounded unelevated no-caps 
        :class="darkStatus? 'bg-white text-black' : 'bg-dark text-white'">Unfollow</q-btn>
      </q-item-section>

    </q-item>

    <q-item clickable to="/connect" class="">
      <q-item-section class="">
        <q-item-label class="text-primary">
          Show more 
        </q-item-label>
      </q-item-section>

    </q-item>
  </q-list>
</template>

<script>
import { ref, watch, computed } from 'vue'
import {useRoute} from 'vue-router'
import {useQuasar} from 'quasar'
export default {
  props: {
    connect: {
      type: Object,
      required: false,
    }


  },
  setup () {
    const $q = useQuasar()
    const darkStatus = computed(() => $q.dark.isActive)

    return {
      darkStatus,
    }
  }
}
</script>