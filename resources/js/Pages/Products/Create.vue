<template>
    <Head>
        <title>Create Product</title>
        <meta
            type="description"
            content="Create Product"
            head-key="description"
        />
    </Head>
    <div class="content-center">
        <h1 class="text-4xl font-bold">Create Product</h1>
    </div>
    <div class="h-screen content-center">
        <form @submit.prevent="submit" class="mt-8 max-w-md mx-auto">
            <input type="hidden" v-model="form.id" name="id" />
            <div class="mb-6">
                <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Name</label
                >
                <input
                    v-model="form.name"
                    name="name"
                    type="text"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.name"
                    v-text="form.errors.name"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="amount"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Amount</label
                >
                <input
                    v-model="form.amount"
                    name="amount"
                    type="text"
                    id="amount"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.amount"
                    v-text="form.errors.amount"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="price"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Price</label
                >
                <input
                    v-model="form.price"
                    name="price"
                    type="text"
                    id="price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.price"
                    v-text="form.errors.price"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="sale"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Sale</label
                >
                <input
                    v-model="form.sale"
                    name="sale"
                    type="text"
                    id="sale"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.sale"
                    v-text="form.errors.sale"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="real_price"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Price With Sale</label
                >
                <input
                    disabled
                    v-model="form.real_price"
                    name="real_price"
                    type="text"
                    id="real_price"
                    class="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div
                    v-if="form.errors.real_price"
                    v-text="form.errors.real_price"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Description</label
                >
                <input
                    v-model="form.description"
                    name="description"
                    type="text"
                    id="description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Image</label
                >
                <input
                    type="file"
                    @change="previewImage"
                    @input="form.image = $event.target.files[0]"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <img v-if="url" :src="url" class="w-full mt-4 h-80" />
                <div
                    v-if="form.errors.image"
                    v-text="form.errors.image"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <div class="flex items-center mb-4">
                    <input
                        v-model="form.available"
                        id="default-checkbox"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900"
                        >Available</label
                    >
                </div>
                <div
                    v-if="form.errors.availabe"
                    v-text="form.errors.availabe"
                    class="text-red-500 text-xs mt-1"
                ></div>
            </div>
            <div class="mb-6">
                <label
                    for="tag"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Select tag</label
                >
                <select
                    v-model="form.product_category_id"
                    id="tag"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option disabled selected value="0">
                        Choose Product Category
                    </option>
                    <option
                        v-for="productCategory in productCategoriesRaw"
                        :key="productCategory.id"
                        v-bind:value="productCategory.id"
                    >
                        {{ productCategory.title }}
                    </option>
                </select>
                <div
                    v-if="form.errors.product_category_id"
                    v-text="form.errors.product_category_id"
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
import { isProxy, toRaw } from "vue";
export default {
    data() {
        return {
            url: null,
        };
    },

    mounted() {
        this.checkRealPrice(this.form.price, this.form.sale);

        this.form.available = false;
        if (this.form.amount > 0) {
            this.form.available = true;
        } else {
            this.form.available = false;
        }
    },

    updated() {
        this.checkRealPrice(this.form.price, this.form.sale);
        if (this.form.amount > 0) {
            this.form.available = true;
        } else {
            this.form.available = false;
        }
    },

    computed: {
        productCategoriesRaw() {
            if (isProxy(this.productCategories)) {
                const rawObject = toRaw(this.productCategories);
                return rawObject;
            }
            return rawObject;
        },
    },

    methods: {
        previewImage(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },

        checkRealPrice(price, sale) {
            this.form.real_price = price - sale;
        },
    },
};
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let form = useForm({
    name: "",
    amount: 0,
    price: 0,
    sale: 0,
    real_price: 0,
    description: "",
    image: null,
    available: "",
    product_category_id: 0,
});

let props = defineProps({
    productCategories: Object,
});

let submit = () => {
    form.post("/product/create");
};
</script>
