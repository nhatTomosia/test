<template>
    <router-view/>
</template>

<script>
import { useQuasar } from 'quasar'
import {useStore} from 'vuex'


export default {
    setup() {
        const $q = useQuasar();
        const store = useStore();
        $q.addressbarColor.set('blue')
        let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(matched){
            $q.dark.set(true);
        }
        const authToken = $q.cookies.get('authToken');
        if(authToken){
            store.commit('setAuthToken', authToken);
            store.commit('setUser', authToken);
        }
        
        

    }
}
</script>