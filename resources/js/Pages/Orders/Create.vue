<template>
    <Head>
        <title>Create Order</title>
        <meta
            type="description"
            content="Create Order"
            head-key="description"
        />
    </Head>
    <div class="content-center">
        <h1 class="text-4xl font-bold">Create Order</h1>
    </div>
    <div class="h-screen content-center">
        <form @submit.prevent="submit" class="mt-8 max-w-md mx-auto">
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
                    for="tag"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >User
                </label>
                <select
                    v-model="form.user_id"
                    id="tag"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option disabled selected value="0">Choose user</option>
                    <option
                        v-for="user in users"
                        :key="user.id"
                        v-bind:value="user.id"
                    >
                        {{ user.name }}
                    </option>
                </select>
                <div
                    v-if="form.errors.user_id"
                    v-text="form.errors.user_id"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="full_cost"
                    class="block mb-2 text-sm font-medium text-gray-90"
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
                    for="products_id"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Select products</label
                >
                <select
                    name="products_id"
                    multiple
                    v-model="product_ids"
                    id="products_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option
                        v-for="product in products"
                        :key="product.id"
                        v-bind:value="product.id"
                    >
                        {{ product.name }}
                    </option>
                </select>
                <label
                    v-if="form.products_id.length != 0"
                    for="amoutn"
                    class="mt-6 block mb-2 text-sm font-medium text-gray-900"
                    >Amount</label
                >
                <template v-for="product in products" :key="product.id">
                    <template
                        v-for="product_id in product_ids"
                        :key="product_id"
                    >
                        <template v-if="product.id == product_id">
                            <div class="flex justify-between py-5">
                                <span>{{ product.name }}</span>
                                <input
                                    v-model="amounts[product.id]"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    min="0"
                                    max="10000000000"
                                />
                            </div>
                        </template>
                    </template>
                </template>
                <div
                    v-if="form.errors.products_id"
                    v-text="form.errors.products_id"
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
                    modelType="yyyy-MM-dd HH:mm:ss"
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
                    class="block mb-2 text-sm font-medium text-gray-90"
                    >Date of Payment</label
                >
                <Datepicker
                    name="date_of_payment"
                    id="date_of_payment"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    v-model="form.date_of_payment"
                    modelType="yyyy-MM-dd HH:mm:ss"
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

<script>
export default {
    data() {
        return {
            // product_ids: [],
            // amounts: [],
            // order_product_amount: {
            //     product_id: "",
            //     amount: "",
            // },
        };
    },

    // methods: {
    //     order_product_amount_count() {
    //         this.product_ids.forEach((product_id) => {
    //             this.amounts.forEach((amount) => {
    //                 this.order_product_amount.product_id = product_id;
    //                 this.order_product_amount.amount = amount;
    //                 this.form.products_id.push(this.order_product_amount);
    //             });
    //         });
    //         console.log(this.order_product_amount);
    //     },
    // },

    // computed: {
    //     order_product_amount() {
    //         this.product_ids.forEach((product_id) => {
    //             this.amounts.forEach((amount) => {
    //                 return;
    //             });
    //         });
    //     },
    // },
    // updated() {
    //     console.log(this.product_ids)
    //     console.log('asdfasd')
    // },

    // mounted() {
    //     console.log(this.product_ids)
    //     console.log('asdfasd')
    // },
};
</script>

<script setup>
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useForm } from "@inertiajs/inertia-vue3";

const product_ids = ref([]);
const amounts = ref([]);

let form = useForm({
    delivery_adress: "",
    full_cost: "",
    date_of_order: "",
    date_of_payment: "",
    user_id: 0,
    products_id: [],
});

let props = defineProps({
    users: Object,
    products: Object,
});

let order_product_amount_count = (
    product_ids,
    amounts,
    products_id
) => {
    // clear products_id array if click submit button 2 and more times
    if(products_id.length > 0) {
        products_id.splice(0, products_id.length)
    }
    for (var i = 0; i < product_ids.value.length; i++) {
        const order_product_amount = {
            product_id: 0,
            amount: 0,
        };
        order_product_amount.product_id = product_ids.value[i];
        order_product_amount.amount = amounts.value[product_ids.value[i]];
        products_id.push(order_product_amount);
    }
};

let submit = () => {
    order_product_amount_count(
        product_ids,
        amounts,
        form.products_id
    );
    form.post("/order/create");
};
</script>
