<template>
    <section class="login">
        <div class="h-screen grid justify-center content-center bg-[#E5E5E5]">

            <div class="card rounded-none w-[28rem] bg-base-100 shadow-xl">
                <div class="absolute">
                    <img height="100" width="100" src="@/assets/images/header-login.png" alt="" srcset="">
                </div>
                <div class="px-8 py-5">
                    <div class="flex justify-center mt-10">
                        <img width="100" height="100" src="@/assets/images/logo.png" alt="" srcset="">
                    </div>
                    <div class="flex flex-col gap-4 my-32">
                        <h1 class="text-2xl font-bold">Login</h1>
                        <p class="font-bold text-sm">Please sign to continue.</p>
                        <div class="flex flex-col gap-2 mt-3">
                            <label for="userId">User ID</label>
                            <input
                                class="input w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-80 focus:border-blue-400"
                                type="text" id="userId" v-model="form.username" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="password">Password</label>
                            <input
                                class="input w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-80 focus:border-blue-400"
                                type="password" id="password" v-model="form.password" />
                        </div>

                        <div class="flex justify-end">
                            <button class="btn bg-[#6338A1] rounded-full px-8" @click="handleLogin">Login</button>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        Don't have an account? <span class="text-[#ED4915] font-bold ml-1">Sign Up</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const form = reactive({
    username: 'kminchelle',
    password: '0lelplR',
})

const handleLogin = async () => {
    await authStore.login(form)
    router.push('/')
}
</script>

