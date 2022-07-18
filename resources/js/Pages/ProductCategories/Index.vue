<template>
    <Head>
        <title>Product Categories</title>
        <meta
            type="description"
            content="All Product Categories"
            head-key="description"
        />
    </Head>
    <div class="flex justify-between">
        <h1 class="text-4xl font-bold">Product Categories</h1>

        <div class="flex items-center">
            <Link
                v-if="can.create"
                href="/product_category/create"
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
                    <th scope="col" class="px-6 py-3">Title</th>
                    <th scope="col" class="px-6 py-3">Slug</th>
                    <th scope="col" class="px-6 py-3">Description</th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody
                v-for="productCategory in productCategories.data"
                :key="productCategory.id"
            >
                <tr
                    :class="productCategory.deleted_at ? 'bg-gray-300' : ''"
                    class="bg-white border-b"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {{ productCategory.title }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {{ productCategory.slug }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 w-24 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {{ productCategory.description }}
                    </th>
                    <td class="">
                        <Link
                            v-if="can.edit"
                            :href="`/product_category/${productCategory.id}/edit`"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                            >Edit</Link
                        >
                    </td>
                    <td class="">
                        <button
                            v-if="can.delete && !productCategory.deleted_at"
                            @click="destroy(productCategory.id)"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Delete
                        </button>
                        <button
                            v-if="can.restore && productCategory.deleted_at"
                            @click="restore(productCategory.id)"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Restore
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="mt-10">
        <Paginator :links="productCategories.links" />
    </div>
</template>

<script setup>
import Paginator from "../Shared/Paginator.vue";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";

let props = defineProps({
    productCategories: Object,
    filters: Object,
    can: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    debounce(function (value) {
        Inertia.get(
            "/product_categories",
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
        Inertia.delete(route("product_category.destroy", id));
    }
};

const restore = (id) => {
    if (confirm("Are you sure?")) {
        Inertia.get(route("product_category.restore", id));
    }
};
</script>
