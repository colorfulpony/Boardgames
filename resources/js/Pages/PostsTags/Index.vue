<template>
    <Head>
        <title>Post Tags</title>
        <meta
            type="description"
            content="All Post Tags"
            head-key="description"
        />
    </Head>
    <div class="flex justify-between">
        <h1 class="text-4xl font-bold">Tags</h1>

        <div class="flex items-center">
            <Link
                href="/posts-tag/create"
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
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody v-for="tag in tags.data" :key="tag.id">
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                        {{ tag.title }}
                    </th>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                        {{ tag.slug }}
                    </th>
                    <td class="px-6 py-4 text-right">
                        <Link
                            :href="`/posts-tag/${tag.id}/edit`"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</Link
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mt-10">
        <Paginator :links="tags.links" />
    </div>
</template>

<script setup>
import Paginator from "../Shared/Paginator.vue";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";

let props = defineProps({
    tags: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    debounce(function (value) {
        Inertia.get(
            "/posts-tags",
            { search: value },
            {
                preserveState: true,
                replace: true,
            }
        );
    }, 300)
);
</script>
