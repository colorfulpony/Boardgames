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
                <h1 class="font-bold text-lg mr-4">My App</h1>
                <p>Welcome Back, {{ this.username }}</p>
            </div>
            <Nav />
        </header>
    </section>

    <section class="p-6">
        <div class="max-w-6xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script>
import Nav from "./Nav";
export default {
    components: {
        Nav,
    },

    computed: {
        username() {
            return this.$page.props.auth.user.username;
        },
    },
};
</script>

<style scoped></style>
