<template>
    <Head>
        <title>Products</title>
        <meta
            type="description"
            content="All Products"
            head-key="description"
        />
    </Head>
    <div class="flex justify-between">
        <h1 class="text-4xl font-bold">Products</h1>

        <div class="flex items-center">
            <Link
                v-if="can.create"
                href="/product/create"
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
        <table
            class="w-full text-sm text-left text-gray-500 "
        >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 "
            >
                <tr>
                    <th scope="col" class="px-6 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Price</th>
                    <th scope="col" class="px-6 py-3">Sale</th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody v-for="product in products.data" :key="product.id">
                <tr
                    :class="product.available ? 'bg-gray-200' : ''"
                    class="bg-white border-b "
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                        {{ product.name }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                        {{ product.price }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 w-24 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                        {{ product.sale }}
                    </th>
                    <td class="px-6 py-4 text-right">
                        <Link
                            v-if="can.edit"
                            :href="`/product/${product.id}/edit`"
                            class="font-medium text-blue-600  hover:underline"
                            >Edit</Link
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="mt-10">
        <Paginator :links="products.links" />
    </div>
</template>

<!-- <script>
export default {
    mounted() {
        console.log(this.props.can)
    },
}
</script> -->


<script setup>
import Paginator from "../Shared/Paginator.vue";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";

let props = defineProps({
    products: Object,
    filters: Object,
    can: Object
});

let search = ref(props.filters.search);

watch(
    search,
    debounce(function (value) {
        Inertia.get(
            "/products",
            { search: value },
            {
                preserveState: true,
                replace: true,
            }
        );
    }, 300)
);
</script>
