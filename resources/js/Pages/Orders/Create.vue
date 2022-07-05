<template>
    <Head>
        <title>Create Order</title>
        <meta type="description" content="Create Order" head-key="description" />
    </Head>
    <div class="content-center">
        <h1 class="text-4xl font-bold">Create Order</h1>
    </div>
    <div class="h-screen content-center">
        <form @submit.prevent="submit" class="mt-8 max-w-md mx-auto">
            <input type="hidden" v-model="form.id" name="id" />
            <div class="mb-6">
                <label
                    for="delivery_adress"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Delivery Adress</label
                >
                <input
                    v-model="form.delivery_adress"
                    name="delivery_adress"
                    type="text"
                    id="delivery_adress"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div
                    v-if="form.errors.delivery_adress"
                    v-text="form.errors.delivery_adress"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="full_cost"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Full Cost</label
                >
                <input
                    v-model="form.full_cost"
                    name="full_cost"
                    type="text"
                    id="full_cost"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div
                    v-if="form.errors.full_cost"
                    v-text="form.errors.full_cost"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="date_of_order"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Date of Order</label
                >
                <input
                    v-model="form.date_of_order"
                    name="date_of_order"
                    type="text"
                    id="date_of_order"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div
                    v-if="form.errors.date_of_order"
                    v-text="form.errors.date_of_order"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="date_of_payment"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Date of Payment</label
                >
                <input
                    v-model="form.date_of_payment"
                    name="date_of_payment"
                    type="text"
                    id="date_of_payment"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div
                    v-if="form.errors.date_of_payment"
                    v-text="form.errors.date_of_payment"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <button
                :disabled="form.processing"
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
export default {
    mounted() {
        (this.form.user_id = this.$page.props.auth.user.id)
    },
};
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let form = useForm({
    delivery_adress: "",
    full_cost: "",
    date_of_order: "",
    date_of_payment: "",
    user_id: "",
});

let submit = () => {
    form.post("/order/create");
};
</script>
