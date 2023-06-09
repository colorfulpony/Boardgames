<template>
    <Head>
        <title>Edit Post</title>
        <meta type="description" content="Edit Post" head-key="description" />
    </Head>
    <div class="content-center">
        <h1 class="text-4xl font-bold">Edit Post</h1>
    </div>

    <div class="h-screen content-center">
        <form @submit.prevent="submit" class="mt-8 max-w-md mx-auto">
            <div class="mb-6">
                <label
                    for="title"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                    >Title</label
                >
                <input
                    v-model="form.title"
                    name="title"
                    type="text"
                    id="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                    class="block mb-2 text-sm font-medium text-gray-900 "
                    >Slug</label
                >
                <input
                    v-model="form.slug"
                    name="slug"
                    type="text"
                    id="slug"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
                <div
                    v-if="form.errors.slug"
                    v-text="form.errors.slug"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                    >Description</label
                >
                <input
                    v-model="form.description"
                    name="description"
                    type="text"
                    id="description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
                <div
                    v-if="form.errors.description"
                    v-text="form.errors.description"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="image"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                    >Image</label
                >
                <input
                    type="file"
                    @change="previewImage"
                    @input="form.image = $event.target.files[0]"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <img
                    v-if="url || this.image"
                    :src="url || this.image"
                    class="w-full mt-4 h-80"
                />
                <div
                    v-if="form.errors.image"
                    v-text="form.errors.image"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <div class="flex items-center mb-4">
                    <input
                        v-model="form.is_published"
                        id="default-checkbox"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "
                    />
                    <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 "
                        >Published</label
                    >
                </div>
                <div
                    v-if="form.errors.is_published"
                    v-text="form.errors.is_published"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="tag"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                    >Select tag</label
                >
                <select
                    v-model="form.posts_tag_id"
                    id="tag"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                    <option disabled selected value="0">Choose tag</option>
                    <option
                        v-for="tag in tagsTitlesRaw"
                        :key="tag.id"
                        v-bind:value="tag.id"
                    >
                        {{ tag.title }}
                    </option>
                </select>
                <div
                    v-if="form.errors.posts_tag_id"
                    v-text="form.errors.posts_tag_id"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <button
                :disabled="form.processing"
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import { isProxy, toRaw } from "vue";
export default {
    data() {
        return {
            url: null,
        };
    },

    mounted() {
        this.checkIsPublished();
    },

    updated() {
        this.checkIsPublished();
    },

    methods: {
        checkIsPublished() {
            if (this.form.is_published) {
                this.form.is_published = true;
            } else {
                this.form.is_published = false;
            }
        },

        previewImage(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
    },

    computed: {
        tagsTitlesRaw() {
            if (isProxy(this.tagsTitles)) {
                const rawObject = toRaw(this.tagsTitles);
                return rawObject;
            }
            return rawObject;
        },
    },
};
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let props = defineProps({
    post: Object,
    tagsTitles: Object,
    image: String,
});

let form = useForm(props.post);

let submit = () => {
    form.post("/post/update");
};
</script>
