<template>
    <nav>
        <ul class="flex items-center space-x-6">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'"
                    >Home</NavLink
                >
            </li>

            <Menu v-if="admin || manager" as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    >
                        Admin Panel
                    </MenuButton>
                </div>

                <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                >
                    <MenuItems
                        class="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                    >
                        <div class="py-1">
                            <MenuItem v-slot="{ active }">
                                <a
                                    href="/posts"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                    >Posts</a
                                >
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <a
                                    href="/posts-tags"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                    >Posts Tags</a
                                >
                            </MenuItem>

                            <MenuItem v-slot="{ active }">
                                <a
                                    href="/orders"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                    >Orders</a
                                >
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <a
                                    href="/product_categories"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                    >Product Categories</a
                                >
                            </MenuItem>

                            <MenuItem v-slot="{ active }">
                                <a
                                    href="/products"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                    >Products</a
                                >
                            </MenuItem>

                            <MenuItem v-slot="{ active }">
                                <a
                                    href="/users"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                    >Users</a
                                >
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>

            <li>
                <NavLink href="/logout" method="post" as="button"
                    >Logout</NavLink
                >
            </li>
        </ul>
    </nav>
</template>
<script>
import NavLink from "./NavLink.vue";
export default {
    components: {
        NavLink,
    },

    computed: {
        admin() {
            return this.$page.props.auth.user.can.admin
        },

        manager() {
            return this.$page.props.auth.user.can.manager
        },

        default() {
            return this.$page.props.auth.user.can.default
        }
    },
};
</script>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
</script>

<style scoped></style>
