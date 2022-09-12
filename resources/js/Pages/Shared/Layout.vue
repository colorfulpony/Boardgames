<template>
    <Head>
        <title>Boardgames</title>
        <meta
            type="description"
            content="Main info about my site"
            head-key="description"
        />
    </Head>

    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <div class="flex items-center">
                <NavLink class="font-bold text-lg mr-4" href="/user"
                    >My App</NavLink
                >
                <p>Welcome Back, {{ this.username }}</p>
            </div>
            <Nav :cartAmountProps="this.cartAmount" />
        </header>
    </section>

    <section class="p-6">
        <div class="max-w-6xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script>
import NavLink from "./NavLink.vue";
import Nav from "./Nav";
export default {
    components: {
        Nav,
        NavLink,
    },

    data() {
        return {
            cartAmount: 0,
        }
    },

    updated() {
        if (localStorage.getItem("cart")) {
            let cart = localStorage.getItem("cart");
            cart = JSON.parse(cart);
            let cartItemsAmount = 0;
            cart.forEach((productInCart) => {
                cartItemsAmount += productInCart.amount;
            });

            this.cartAmount = cartItemsAmount;
        } else {
            this.cartAmount = 0;
        }
    },

    computed: {
        username() {
            return this.$page.props.auth.user.username;
        },
    },
};
</script>

<style scoped></style>
