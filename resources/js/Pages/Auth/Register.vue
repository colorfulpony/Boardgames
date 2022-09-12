<template>
    <div class="grid h-screen place-items-center">
        <form
            @submit.prevent="submit"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                >
                    Name
                </label>
                <input
                    v-model="form.name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name"
                    id="name"
                    type="name"
                    placeholder="Name"
                />
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                >
                    Email
                </label>
                <input
                    v-model="form.email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    v-model="form.password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
                <!-- <p class="text-red-500 text-xs italic">
                    Please choose a password.
                </p> -->
            </div>
            <div class="flex items-center justify-between">
                <button
                    type="submit"
                    class="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
                    :disabled="form.processing"
                >
                    Register
                </button>
                <Link class="hover:underline" href="login">Login</Link>
            </div>
        </form>
    </div>
</template>

<script>
export default {

};
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let form = useForm({
    email: "",
    password: "",
    name: "",
});

let submit = () => {
    form.post("/register");
};
</script>
