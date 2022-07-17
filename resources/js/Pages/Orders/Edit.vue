<template>
    <Head>
        <title>Edit Order</title>
        <meta type="description" content="Edit Order" head-key="description" />
    </Head>
    <div class="content-center">
        <h1 class="text-4xl font-bold">Edit Order</h1>
    </div>
    <div class="h-screen content-center">
        <form @submit.prevent="submit" class="mt-8 max-w-md mx-auto">
            <input type="hidden" v-model="form.id" name="id" />
            <div class="mb-6">
                <label
                    for="delivery_adress"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Delivery Adress</label
                >
                <input
                    v-model="form.delivery_adress"
                    name="delivery_adress"
                    type="text"
                    id="delivery_adress"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Full Cost</label
                >
                <input
                    v-model="form.full_cost"
                    name="full_cost"
                    type="text"
                    id="full_cost"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Date of Order</label
                >
                <Datepicker
                    name="date_of_order"
                    id="date_of_order"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    v-model="form.date_of_order"
                    :flow="flow"
                    modelType="yyyy-MM-dd HH:mm:ss"
                    :format="format"
                    autoApply
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
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Date of Payment</label
                >
                <Datepicker
                    name="date_of_payment"
                    id="date_of_payment"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    v-model="form.date_of_payment"
                    :flow="flow"
                    modelType="yyyy-MM-dd HH:mm:ss"
                    :format="format"
                    autoApply
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
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useForm } from "@inertiajs/inertia-vue3";

const flow = ref(["year", "month", "calendar"]);

let format = (date) => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

let props = defineProps({
    order: Object,
});

let form = useForm(props.order);

let submit = () => {
    form.post("/order/update");
};
</script>
