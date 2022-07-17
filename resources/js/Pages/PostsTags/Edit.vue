<template>
    <Head>
        <title>Edit Post Tag</title>
        <meta
            type="description"
            content="Edit Post Tag"
            head-key="description"
        />
    </Head>
    <div class="content-center">
        <h1 class="text-4xl font-bold">Edit Posts Tag</h1>
    </div>
    <div class="h-screen content-center">
        <form @submit.prevent="submit" class="mt-8 max-w-md mx-auto">
            <input type="hidden" v-model="form.id" name="id" />
            <div class="mb-6">
                <label
                    for="title"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Title</label
                >
                <input
                    v-model="form.title"
                    name="title"
                    type="text"
                    id="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.title"
                    v-text="form.errors.title"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="slug"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Slug</label
                >
                <input
                    v-model="form.slug"
                    name="slug"
                    type="text"
                    id="slug"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.slug"
                    v-text="form.errors.slug"
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
import { useForm } from "@inertiajs/inertia-vue3";

let props = defineProps({
    postsTag: Object,
});

let form = useForm(props.postsTag);

let submit = () => {
    form.post("/posts-tag/update");
};
</script>
