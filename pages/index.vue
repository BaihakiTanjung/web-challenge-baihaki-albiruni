<template>
    <section class="dashboard bg-[#e5e5e5] h-screen">

        <!-- Navbar -->
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">Isys Dashboard</a>
            </div>
            <div class="flex-none gap-2">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHklMjBjb2xvciUyMHN0YXR1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                        </div>
                    </label>
                    <ul tabindex="0"
                        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a @click="handleLogout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- End Navbar -->
        <div class="container mx-auto py-5 px-5">
            <div class="content my-5 flex-col flex gap-5">
                <h1 class="text-4xl font-bold">Dashboard</h1>
                <div class="grid grid-cols-12 gap-3  justify-center">
                    <div v-for="list in cardList" :key="list.id"
                        class="col-span-12 md:col-span-3 card w-96 bg-base-100 shadow-xl gap-5 w-full">
                        <div class="card-body">
                            <div class="flex justify-between">
                                <div class="font-bold text-xl">{{ list.title }}</div>
                                <div class="text-2xl">{{
                                    list.currency ? `Rp ${formatRupiah(list.total)}` : list.total
                                }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-3">
                    <div class="col-span-12 md:col-span-9 ">
                        <div class="card bg-base-100 shadow-xl p-5 w-full overflow-x-auto">
                            <table class="table w-full">
                                <!-- head -->
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- row 1 -->
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                    <!-- row 2 -->
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>
                                    <!-- row 3 -->
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-3">
                        <div class="card bg-blue-500 shadow-xl">
                            <div class="card-body">
                                <div class="flex flex-col text-center my-10 text-white">
                                    <div class="font-bold text-3xl">User Registered</div>
                                    <div class="text-2xl mt-5">1920</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

definePageMeta({
    middleware: ["auth"],
    layout: "default"
})

const handleLogout = async () => {
    await authStore.logout();

    router.push("/login");
}

const cardList = ref([
    {
        id: 1,
        title: "Barang Masuk",
        total: 10,
        currency: false
    },
    {
        id: 2,
        title: "Barang Keluar",
        total: 60,
        currency: false
    },
    {
        id: 3,
        title: "Total Penjualan",
        total: 129000,
        currency: true
    },
    {
        id: 4,
        title: "Total Pendapatan",
        total: 130000,
        currency: true
    },

])

// format currency rupiah
const formatRupiah = (value: number) => {
    const reverse = value.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
    return ribuan?.join('.').split('').reverse().join('');
}

</script>

<style scoped>

</style>