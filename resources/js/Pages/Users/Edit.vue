<template>
    <Head>
        <title>User Product</title>
        <meta type="description" content="Edit User" head-key="description" />
    </Head>
    <div class="content-center">
        <h1 class="text-4xl font-bold">Edit User</h1>
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
                    for="current_password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Last Password</label
                >
                <input
                    v-model="form.current_password"
                    name="current_password"
                    type="password"
                    id="current_password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.current_password"
                    v-text="form.errors.current_password"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="new_password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >New Password</label
                >
                <input
                    v-model="form.new_password"
                    name="new_password"
                    type="password"
                    id="new_password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.new_password"
                    v-text="form.errors.new_password"
                    class="text-red-500 text-new_password mt-1"
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
                    accept="image/*"
                    @change="previewImage"
                    @input="form.image = $event.target.files[0]"
                    @value="this.form.image"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <img
                    v-if="url || this.image"
                    :src="url || this.image"
                    class="w-full h-full mt-4"
                />
                <div
                    v-if="form.errors.image"
                    v-text="form.errors.image"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="street"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Address</label
                >
                <VueGoogleAutocomplete
                    :ref="this.fullAddress"
                    id="map"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder=""
                    :v-text="this.$props.fullAddress"
                    v-on:placechanged="getAddressData"
                    :country="['ua']"
                >
                </VueGoogleAutocomplete>
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
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Date of Payment</label
                >
                <Datepicker
                    name="email_verified_at"
                    id="email_verified_at"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
                    <option v-bind:value="3">Default</option>
                    <option v-bind:value="2">Manager</option>
                    <option v-bind:value="1">Admin</option>
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
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
    data() {
        return {
            url: null,
            address: "",
        };
    },

    methods: {
        previewImage(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },

        getAddressData: function (addressData, placeResultData, id) {
            this.address = addressData;
            this.form.country = addressData.country;
            this.form.city = addressData.locality;
            this.form.street = addressData.route;
        },
    },
};
</script>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useForm } from "@inertiajs/inertia-vue3";

let props = defineProps({
    user: Object,
    image: String,
    fullAddress: String
});

let form = useForm({
    id: props.user.id,
    username: props.user.username,
    current_password: "",
    new_password: "",
    first_name: props.user.first_name,
    last_name: props.user.last_name,
    image: props.user.image,
    email: props.user.email,
    country: props.user.country,
    city: props.user.city,
    street: props.user.street,
    email_verified_at: props.user.email_verified_at,
    role: props.user.role,
});

let submit = () => {
    form.post("/user/update");
};
</script>
