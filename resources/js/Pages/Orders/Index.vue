<template>
    <Head>
        <title>All Orders</title>
        <meta type="description" content="Orders" head-key="description" />
    </Head>
    <div class="flex justify-between">
        <h1 class="text-4xl font-bold">Orders</h1>

        <div class="flex items-center">
            <Link
                v-if="can.create"
                href="/order/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
                >Create</Link
            >

            <input
                v-model="search"
                type="text"
                placeholder="Search..."
                class="border px-2 rounded-lg h-9"
            />
        </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="h-auto px-6 py-3">
                        Delivery Adress
                    </th>
                    <th scope="col" class="px-6 py-3">Username</th>
                    <th scope="col" class="px-6 py-3">Products</th>
                    <th scope="col" class="px-6 py-3">Full Cost</th>
                    <th scope="col" class="px-6 py-3">Date of Order</th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody
                class="content-center"
                v-for="order in orders.data"
                :key="order.id"
            >
                <tr
                    :class="order.deleted_at ? 'bg-red-300' : ''"
                    class="bg-white border-b"
                >
                    <th
                        scope="row"
                        class="h-auto px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {{ order.delivery_adress }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {{ order.username }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        <button @click="showProducts(order.id)">
                            Products({{ order.products.length }})
                        </button>
                    </th>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {{ order.full_cost }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 w-24 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {{ order.date_of_order }}
                    </th>
                    <td class="">
                        <Link
                            v-if="can.edit"
                            :href="`/order/${order.id}/edit`"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                            >Edit</Link
                        >
                    </td>
                    <td class="">
                        <button
                            v-if="can.delete && !order.deleted_at"
                            @click="destroy(order.id)"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Delete
                        </button>
                        <button
                            v-if="can.restore && order.deleted_at"
                            @click="restore(order.id)"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Restore
                        </button>
                    </td>
                </tr>
                <tr
                    v-if="
                        this.order_products_is_visible_id == order.id &&
                        order.products.length != 0
                    "
                >
                    <table class="text-sm text-left text-gray-500">
                        <thead class="bg-blue-600 text-xs text-white uppercas">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Image</span>
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Full Price
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            v-for="product in order.products"
                            :key="product.id"
                        >
                            <tr class="border-b border-blue-400 bg-blue-500">
                                <th
                                    scope="row"
                                    class="w-20 py-4 px-6 font-medium text-blue-50 whitespace-nowrap"
                                >
                                    <img
                                        :src="
                                            '../storage/images/product/' +
                                            product.image
                                        "
                                        alt=""
                                    />
                                </th>
                                <th
                                    scope="row"
                                    class="py-4 px-6 font-medium text-blue-50 whitespace-nowrap"
                                >
                                    {{ product.name }}
                                </th>
                                <th
                                    scope="row"
                                    class="py-4 px-6 font-medium text-blue-50 whitespace-nowrap"
                                >
                                    {{ product.real_price }}
                                </th>
                                <th
                                    scope="row"
                                    class="py-4 px-6 font-medium text-blue-50 whitespace-nowrap"
                                >
                                    {{ product.pivot.amount }}
                                </th>
                                <td
                                    scope="row"
                                    class="py-4 px-6 font-medium text-blue-50 whitespace-nowrap"
                                >
                                    <Link
                                        v-if="can.edit"
                                        :href="`/product/${product.id}/edit`"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                        >Edit</Link
                                    >
                                </td>
                                <td class="">
                                    <button
                                        v-if="can.delete"
                                        @click="deleteProduct(order.id, product.id)"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="mt-10">
        <Paginator :links="orders.links" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            order_products_is_visible_id: null,
            image_path: "storage/images/product/",
        };
    },

    // mounted() {
    //     console.log(this.orders.data[9].products[0].pivot.amount)
    // },

    methods: {
        showProducts(orderId) {
            if (this.order_products_is_visible_id != orderId) {
                this.order_products_is_visible_id = orderId;
            } else {
                this.order_products_is_visible_id = null;
            }
        },
    },
};
</script>

<script setup>
import Paginator from "../Shared/Paginator.vue";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";
import { abort } from "process";

let props = defineProps({
    orders: Object,
    filters: Object,
    can: Object,
    productsAmount: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    debounce(function (value) {
        Inertia.get(
            "/orders",
            { search: value },
            {
                preserveState: true,
                replace: true,
            }
        );
    }, 300)
);

const destroy = (id) => {
    if (confirm("Are you sure?")) {
        Inertia.delete(route("order.destroy", id));
    }
};

const deleteProduct = (orderId, productId) => {
    if (confirm("Are you sure?")) {
        Inertia.delete(route("order_product.destroy", [orderId, productId]));
    }
};

const restore = (id) => {
    if (confirm("Are you sure?")) {
        Inertia.get(route("order.restore", id));
    }
};
</script>
