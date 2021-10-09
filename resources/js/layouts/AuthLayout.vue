<template>
    <div class="row">
        <div class="col-md-6 gt-sm">
            <q-img class="" style="height:95vh; width:100%" src="storage/AdminResources/auth.jpg"></q-img>
        </div>
        
        <div class="col-md-6 q-pa-lg">
            <i class=" mt-10 fab fa-4x fa-twitter"></i>
            <p class="mt-28 text-5xl font-bold">Happening Now</p>
            <div class=" mt-10 font-bold text-3xl">
                <slot name="header">
                    
                </slot>
            </div>
            <div class=" mt-5">
                <slot name="content">
                    
                </slot>
            </div>
        </div>
    </div>
    <div class="row mt-3 mx-10 text-secondary flex justify-center text-xs">
    <span class="mr-3 hover:underline cursor-pointer">About</span>
    <span class="mr-3 hover:underline cursor-pointer">Help center</span>
    <span class="mr-3 hover:underline cursor-pointer">Terms of service</span>
    <span class="mr-3 hover:underline cursor-pointer">Privacy Policy</span>
    <span class="mr-3 hover:underline cursor-pointer">Cookie Policy</span>
    <span class="mr-3 hover:underline cursor-pointer">Advertisements</span>
    <span class="mr-3 hover:underline cursor-pointer">Blog</span>
    <span class="mr-3 hover:underline cursor-pointer">Status</span>
    <span class="mr-3 hover:underline cursor-pointer">Career</span>
    <span class="mr-3 hover:underline cursor-pointer">Developers</span>
    <span class="mr-3 hover:underline cursor-pointer">Brand Assets</span>
    <span class="mr-3 hover:underline cursor-pointer">Marketing</span>
    <span class="mr-3 hover:underline cursor-pointer">Business</span>
    <span class="mr-3 hover:underline cursor-pointer">Brand Assets</span>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import {useRoute, useRouter} from 'vue-router'
export default {
    setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    if(store.state.authToken) {
      router.push('/');
    }
    },
}
</script>