<template>
    <nav>
        <ul class="flex space-x-6">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">Home</NavLink>
            </li>

            <li>
                <NavLink href="/posts" :active="$page.component === ('Posts/Index' || 'Posts/Edit' || 'Posts/Create')">Posts</NavLink>
            </li>
            <li>
                <NavLink href="/posts-tags" :active="$page.component === ('PostsTags/Index' || 'PostsTags/Edit' || 'PostsTags/Create')">Posts Tags</NavLink>
            </li>

            <li>
                <NavLink href="/orders" :active="$page.component === ('Orders/Index' || 'Orders/Edit' || 'Orders/Create')">Orders</NavLink>
            </li>

            <li>
                <NavLink href="/product_categories" :active="$page.component === ('ProductCategories/Index' || 'ProductCategories/Edit' || 'ProductCategories/Create')">Product Categories</NavLink>
            </li>

            <li>
                <NavLink href="/products" :active="$page.component === ('Products/Index' || 'Products/Edit' || 'Products/Create')">Products</NavLink>
            </li>

            <li>
                <NavLink href="/logout" method="post" as="button">Logout</NavLink>
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
};
</script>
<style scoped></style>
