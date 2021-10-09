<template>
  <div class="messages" style=" min-height:400px">
    <q-item clickable class="flex items-center">
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section class="q-mt-md">
        <q-item-label>
          <span class="font-bold gt-xs">Name</span>
          <span class="text-secondary gt-xs q-ml-xs">@Username</span>
          <p class="text-secondary q-mt-xs">Hi</p>
        </q-item-label>
      </q-item-section>

      <q-item-section side top>
        <span class="text-secondary gt-md">50m</span>
      </q-item-section>
    </q-item>
    <q-separator></q-separator>
    
       
  </div>
  
</template>

<script>

export default {
  setup() {
}
}
</script>