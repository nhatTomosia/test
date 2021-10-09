<template>
    <user-layout>
        <template #header>
            <span class="font-bold">Notifications</span>
        </template>

        <template #content>
            <q-tabs v-model="tab" align="justify" class=" text-teal" active-color="primary"
                indicator-color="primary"
                no-caps >
                <q-tab name="all" label="All"></q-tab>
                <q-tab name="mention" label="Mention"></q-tab>
            </q-tabs>
            <q-separator></q-separator>
            <q-tab-panels v-model="tab" >
                <q-tab-panel name="all">
                    <q-list>
                        <q-item clickable>
                            <q-item-section avatar>
                                <q-avatar>
                                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                Content
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-tab-panel >

                <q-tab-panel name="mention">
                    <q-list>
                        <q-item clickable>
                            <q-item-section avatar>
                                <q-avatar>
                                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                Content
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-tab-panel>
            </q-tab-panels>
        </template>
    </user-layout>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        return {
            tab: ref('all')
        }
    }
}
</script>