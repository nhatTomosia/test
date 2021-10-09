<template>

  <q-toolbar>
    <q-toolbar-title>
      <q-item>
        <q-item-section avatar>
          <q-avatar size="md">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <span class=" text-sm font-bold">Name</span>
          <span class=" block text-sm text-secondary">@username</span>
        </q-item-section>
        <q-item-section side top>
          <q-btn rounded unelevated icon = "fas fa-info-circle"></q-btn>
        </q-item-section>
      </q-item>
    </q-toolbar-title>
  </q-toolbar>
  <q-separator></q-separator>
    <q-item clickable class="full-width q-pt-xl q-pb-lg">
      <q-item-section class=" text-center">
        <q-item-label>
          <span class=" font-bold">Name</span>
          <span class=" q-ml-md text-secondary">@username</span>
        </q-item-label>
        <q-item-label>
          <span class="font-bold">1</span> <span class="text-secondary" > Following</span>
          <span class="q-ml-md font-bold">0</span> <span class="text-secondary " >Followers</span>
        </q-item-label>
        <q-item-label>
          <span class = " text-secondary"><span class=" fas fa-calendar q-mr-xs"></span> Joined September 2021</span>
        </q-item-label>
        </q-item-section>
    </q-item>
  <q-separator></q-separator>
  <div class="q-pa-md">
    <q-infinite-scroll  reverse>
      <!-- <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner color="primary" name="dots" size="40px" />
        </div>
      </template> -->

    <div class = "full-width">
      <q-chat-message
        :text="['hey, how are you?']"
        sent
        bg-color="primary"
        text-color="white"
        stamp="7 minutes ago"
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
        stamp="4 minutes ago"
        bg-color="grey-2"

      />
    </div>
    </q-infinite-scroll>
  </div>
  <div class=" absolute-bottom row p-2 flex items-center border-t">
    <div class="col-1 flex justify-center">
      <q-btn flat padding="xs" rounded  unelevated icon="fas fa-image" size="xs" ></q-btn>
    </div>
    <div class="col-1 flex justify-center">
      <q-btn padding="xs" rounded flat unelevated icon="fas fa-film" size="xs"></q-btn>
    </div>
    <div class="col-9 flex justify-center ">
      <q-input autogrow clearable rounded outlined placeholder="Start a new message" v-model="message.content" class="full-width"></q-input>
    </div>
    <div class="col-1 flex justify-center">
      <q-btn padding="md" rounded flat unelevated icon="fas fa-paper-plane" size="sm"></q-btn>
    </div>
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  setup() {
    const message = reactive({
      content:''
    })

    return {
      message
    }
  },
}
</script>