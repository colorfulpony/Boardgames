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
        <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
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
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                        {{ productCategory.title }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                        {{ productCategory.slug }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 w-24 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                        {{ productCategory.description }}
                    </th>
                    <td class="px-6 py-4 text-right">
                        <Link
                            :href="`/product_category/${productCategory.id}/edit`"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</Link
                        >
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
</script>
