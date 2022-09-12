<template>
    <Head>
        <title>All Products</title>
        <meta
            type="description"
            content="All Products"
            head-key="description"
        />
    </Head>
    <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <Link
                    href="/user"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    <svg
                        class="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                        ></path>
                    </svg>
                    Home
                </Link>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg
                        class="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span
                        class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
                    >
                        <Link href="/user/products">All Products</Link></span
                    >
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg
                        class="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span
                        class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
                        >{{ product.name }}</span
                    >
                </div>
            </li>
        </ol>
    </nav>
    <main class="w-full flex flex-col lg:flex-row">
        <!-- Gallery -->
        <section
            class="h-fit flex-col gap-8 mt-16 sm:flex sm:flex-row sm:gap-4 sm:h-full sm:mt-24 sm:mx-2 md:gap-8 md:mx-4 lg:flex-col lg:mx-0 lg:mt-36"
        >
            <picture
                class="relative flex items-center bg-orange sm:bg-transparent"
            >
                <button
                    class="bg-white w-10 h-10 flex items-center justify-center pr-1 rounded-full absolute left-6 z-10 sm:hidden"
                    id="previous-mobile"
                >
                    <svg
                        width="12"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                        id="previous-mobile"
                    >
                        <path
                            d="M11 1 3 9l8 8"
                            stroke="#1D2026"
                            stroke-width="3"
                            fill="none"
                            fill-rule="evenodd"
                            id="previous-mobile"
                        />
                    </svg>
                </button>
                <img
                    :src="this.image"
                    alt="sneaker"
                    class="block sm:rounded-xl xl:w-[70%] xl:rounded-xl m-auto pointer-events-none transition duration-300 lg:w-3/4 lg:pointer-events-auto lg:cursor-pointer lg:hover:shadow-xl"
                    id="hero"
                />
                <button
                    class="bg-white w-10 h-10 flex items-center justify-center pl-1 rounded-full absolute right-6 z-10 sm:hidden"
                    id="next-mobile"
                >
                    <svg
                        width="13"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                        id="next-mobile"
                    >
                        <path
                            d="m2 1 8 8-8 8"
                            stroke="#1D2026"
                            stroke-width="3"
                            fill="none"
                            fill-rule="evenodd"
                            id="next-mobile"
                        />
                    </svg>
                </button>
            </picture>
        </section>

        <!-- Text -->
        <section
            class="w-full p-6 lg:mt-36 lg:pr-20 lg:py-10 2xl:pr-40 2xl:mt-40"
        >
            <h1 class="text-very-dark mb-4 font-bold text-3xl lg:text-4xl">
                {{ product.name }}
            </h1>
            <p class="text-dark-grayish mb-6 text-base sm:text-lg">
                {{ product.description }}
            </p>

            <div
                class="flex items-center justify-between mb-6 sm:flex-col sm:items-start"
            >
                <div class="flex items-center gap-4">
                    <h3 class="text-very-dark font-bold text-3xl inline-block">
                        ${{ product.real_price }}
                    </h3>
                    <span
                        class="inline-block h-fit py-0.5 px-2 font-bold bg-pale-orange text-orange rounded-lg text-sm"
                        >${{ product.sale }}</span
                    >
                </div>
                <p
                    class="text-dark-grayish w-fit line-through decoration-dark-grayish decoration-1 my-auto"
                >
                    ${{ product.price }}
                </p>
            </div>

            <div class="flex flex-col gap-5 mb-16 sm:flex-row lg:mb-0">
                <div
                    class="w-full h-10 text-sm bg-light py-2 flex items-center justify-between rounded-lg font-bold relatives sm:w-80"
                >
                    <div
                        v-on:click="countAmount('minus')"
                        id="minus"
                        class="plus-minus"
                    >
                        <div
                            class="w-3 h-1 bg-orange absolute"
                            id="minus"
                        ></div>
                        <svg
                            width="12"
                            height="4"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <defs>
                                <path
                                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                                    id="a"
                                />
                            </defs>
                            <use
                                fill="#FF7E1B"
                                fill-rule="nonzero"
                                xlink:href="#a"
                            />
                        </svg>
                    </div>
                    <input
                        v-model="this.form.amount"
                        type="number"
                        id="amount"
                        min="1"
                        class="select-none max-w-20"
                    />
                    <div
                        v-on:click="countAmount('plus')"
                        id="plus"
                        class="plus-minus"
                    >
                        <svg
                            width="12"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            id="plus"
                        >
                            <defs>
                                <path
                                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                                    id="b"
                                />
                            </defs>
                            <use
                                fill="#FF7E1B"
                                fill-rule="nonzero"
                                xlink:href="#b"
                                id="plus"
                            />
                        </svg>
                    </div>
                </div>
                <button
                    @click.prevent="addToCart(product.id)"
                    class="w-full h-10 bg-orange py-2 flex items-center justify-center gap-4 text-xs rounded-lg font-bold text-light shadow-md shadow-orange hover:brightness-125 transition select-none"
                    id="add-cart"
                >
                    <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                    >
                        <path
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill="hsl(223, 64%, 98%)"
                            fill-rule="nonzero"
                        />
                    </svg>
                    Add to cart
                </button>
                <button @click="submit()">Trapapa</button>
            </div>
        </section>
    </main>
</template>

<script>
import { ref } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    data() {
        return {
            form: useForm({
                product_id: 0,
                amount: 1,
            }),
        };
    },

    props: {
        product: Object,
        product_category_id: Object,
        image: String,
    },

    methods: {
        countAmount(val) {
            if (val == "plus" || val == "minus") {
                let amountAdd = this.form.amount;
                if (val == "plus") {
                    amountAdd += 1;
                } else if (val == "minus") {
                    if (amountAdd <= 1 || amountAdd == 1) return;
                    amountAdd -= 1;
                }

                this.form.amount = amountAdd;
            }
        },

        submit() {
            this.form.post("/user/cart", {
                preserveState: true,
                preserveScroll: true,
                onSuccess: (val) => {
                    this.$emit("cartAmount", val.props.flash.cartAmount);
                },
            });
        },

        addToCart(productId) {
            if (this.$page.props.auth.user.autorized) {
                let cart = localStorage.getItem("cart");
                let newProduct = [
                    {
                        id: productId,
                        amount: this.form.amount,
                    },
                ];

                if (cart) {
                    cart = JSON.parse(cart);
                    this.form.product_id = newProduct[0].id;
                    this.form.amount = newProduct[0].amount;

                    cart.forEach((productInCart) => {
                        if (productInCart.id === productId) {
                            productInCart.amount += this.form.amount;
                            newProduct = null;
                        }
                    });

                    cart.push.apply(cart, newProduct);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    let cartItemsAmount = 0;
                    cart.forEach((productInCart) => {
                        cartItemsAmount += productInCart.amount;
                    });

                    this.submit("/user/cart");
                } else {
                    localStorage.setItem("cart", JSON.stringify(newProduct));
                    this.$page.props.cartAmount = newProduct[0].amount;

                    this.form.product_id = newProduct[0].id;
                    this.form.amount = newProduct[0].amount;
                    this.submit("/user/cart");
                }
                this.form.amount = 1;
            }

            if (!this.$page.props.auth.user.autorized) {
                let cart = localStorage.getItem("cart");
                let newProduct = [
                    {
                        id: productId,
                        amount: this.form.amount,
                    },
                ];

                if (cart) {
                    cart = JSON.parse(cart);

                    cart.forEach((productInCart) => {
                        if (productInCart.id === productId) {
                            productInCart.amount += this.form.amount;
                            newProduct = null;
                        }
                    });

                    cart.push.apply(cart, newProduct);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    let cartItemsAmount = 0;
                    cart.forEach((productInCart) => {
                        cartItemsAmount += productInCart.amount;
                    });

                    this.$page.props.cartAmount = cartItemsAmount;
                } else {
                    localStorage.setItem("cart", JSON.stringify(newProduct));
                    this.$page.props.cartAmount = newProduct[0].amount;
                }
                this.form.amount = 1;
            }
        },
    },
};
</script>
