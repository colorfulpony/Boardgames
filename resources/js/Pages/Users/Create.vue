<template>
    <Head>
        <title>Create User</title>
        <meta type="description" content="Create User" head-key="description" />
    </Head>
    <div class="content-center">
        <h1 class="text-4xl font-bold">Create User</h1>
    </div>
    <div class="h-screen content-center">
        <form @submit.prevent="submit" class="mt-8 max-w-md mx-auto">
            <input type="hidden" v-model="form.id" name="id" />
            <div class="mb-6">
                <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Username</label
                >
                <input
                    v-model="form.username"
                    name="username"
                    type="text"
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.username"
                    v-text="form.errors.username"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Password</label
                >
                <input
                    v-model="form.password"
                    name="password"
                    type="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.password"
                    v-text="form.errors.password"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >First Name</label
                >
                <input
                    v-model="form.first_name"
                    name="first_name"
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.first_name"
                    v-text="form.errors.first_name"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Last Name</label
                >
                <input
                    v-model="form.last_name"
                    name="last_name"
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.last_name"
                    v-text="form.errors.last_name"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Email</label
                >
                <input
                    v-model="form.email"
                    name="email"
                    type="text"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.email"
                    v-text="form.errors.email"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
             <div class="mb-6">
                <label
                    for="image"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Image</label
                >
                <input
                    type="file"
                    @change="previewImage"
                    @input="form.image = $event.target.files[0]"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <img v-if="url" :src="url" class="w-full mt-4 h-80" />
                <div
                    v-if="form.errors.image"
                    v-text="form.errors.image"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="country"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Country</label
                >
                <input
                    v-model="form.country"
                    name="country"
                    type="text"
                    id="country"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.country"
                    v-text="form.errors.country"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="city"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >City</label
                >
                <input
                    v-model="form.city"
                    name="city"
                    type="text"
                    id="city"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.city"
                    v-text="form.errors.city"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="street"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Street</label
                >
                <input
                    v-model="form.street"
                    name="street"
                    type="text"
                    id="street"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.street"
                    v-text="form.errors.street"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="email_verified_at"
                    class="block mb-2 text-sm font-medium text-gray-90"
                    >Email Verified At</label
                >
                <Datepicker
                    name="email_verified_at"
                    id="email_verified_at"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    v-model="form.email_verified_at"
                    modelType="yyyy-MM-dd HH:mm:ss"
                    autoApply
                />
                <div
                    v-if="form.errors.email_verified_at"
                    v-text="form.errors.email_verified_at"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="role"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Select User Role</label
                >
                <select
                    v-model="form.role"
                    id="role"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option disabled selected value="0">
                        Choose User Role
                    </option>
                    <option v-bind:value="3">
                        Default
                    </option>
                    <option v-bind:value="2">
                        Manager
                    </option>
                    <option v-bind:value="1">
                        Admin
                    </option>
                </select>
                <div
                    v-if="form.errors.role"
                    v-text="form.errors.role"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <button
                :disabled="form.processing"
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: null,
        }
    },

    methods: {
        previewImage(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
    }
}
</script>


<script setup>
import { ref } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

let form = useForm({
    username: "",
    first_name: "",
    last_name: "",
    image: "",
    email: "",
    country: "",
    city: "",
    street: "",
    role: 0,
    email_verified_at: "",
    password: "",
});

let submit = () => {
    form.post("/user/create");
};
</script>
