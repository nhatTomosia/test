<template>
    <user-layout>
        <template #header>
            Messages
        </template>

        <template #content>
            <div class="row">
                <div class="col-4 gt-sm" >
                    <div class=" justify-center">
                        <q-input rounded outlined v-model="search" dense class="p-2 full-width" placeholder="Search for people and groups">
                            <template v-slot:prepend>
                                <q-icon name="fas fa-search" size="xs" />
                            </template>
                            <template v-slot:append>
                                <q-icon v-if="search !== ''" size="xs" name="fas fa-times" @click="search = ''" class="cursor-pointer" />
                            </template>
                        </q-input>
                    </div>
                    <q-separator></q-separator>
                    <Messages ></Messages>
                </div>
                
                <div class=" col-12 col-md-8 border-l">
                    <div class="relative-position" style=" height:92vh">
                    <MessageDetail></MessageDetail>
                    </div>
                </div>
            </div>
            
        </template>
    </user-layout>
</template>

<script>
import Messages from '../../components/Messages.vue'
import MessageDetail from '../../components/MessageDetail.vue'
import {ref} from 'vue'
export default {
    components: {
        Messages,
        MessageDetail,
    },
    setup() {
        return {
            search: ref('')
        }
    }
}
</script>