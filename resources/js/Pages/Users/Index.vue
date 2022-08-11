<template>
    <Head>
        <title>Users</title>
        <meta type="description" content="All Users" head-key="description" />
    </Head>
    <div class="flex justify-between">
        <h1 class="text-4xl font-bold">Users</h1>

        <div class="flex items-center">
            <Link
                v-if="can.create"
                href="/user/create"
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
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Email</th>
                    <th scope="col" class="px-6 py-3">Status</th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody v-for="user in users.data" :key="user.id">
                <tr class="bg-white border-b">
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        <div class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10">
                                <img
                                    class="w-full h-full rounded-full"
                                    :src="
                                        '../storage/images/users/' +
                                        user.image
                                    "
                                    alt=""
                                />
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {{ user.username }}
                                </p>
                            </div>
                        </div>
                    </th>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        <p class="text-gray-900 whitespace-no-wrap">
                            {{ user.email }}
                        </p>
                    </th>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        <span
                            class="relative inline-block px-3 py-1 font-semibold leading-tight"
                        >
                            <span
                                aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                :class="userRoleClassReturn(user.role)"
                            ></span>
                            <span class="relative">{{
                                userRoleTextReturn(user.role)
                            }}</span>
                        </span>
                    </th>
                    <td class="">
                        <Link
                            v-if="can.edit"
                            :href="`/user/${user.id}/edit`"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                            >Edit</Link
                        >
                    </td>
                    <td class="">
                        <button
                            v-if="can.delete && !user.deleted_at"
                            @click="destroy(user.id)"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Delete
                        </button>
                        <button
                            v-if="can.restore && user.deleted_at"
                            @click="restore(user.id)"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Restore
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="mt-10">
        <Paginator :links="users.links" />
    </div>
</template>

<script>
export default {
    methods: {
        deletedOrAvailableCheck(available, deleted_at) {
            if (!available && !deleted_at) {
                return "bg-gray-300";
            }

            if (!available && deleted_at) {
                return "bg-red-500";
            }

            if (available && deleted_at) {
                return "bg-red-300";
            }

            if (available && !deleted_at) {
                return "";
            }
        },

        userRoleTextReturn(roleId) {
            if (roleId == 1) {
                return "admin";
            }

            if (roleId == 2) {
                return "manager";
            }

            if (roleId == 3) {
                return "user";
            }
        },

        userRoleClassReturn(roleId) {
            if (roleId == 1) {
                return "bg-red-200 text-red-900";
            }

            if (roleId == 2) {
                return "bg-yellow-200 text-yellow-900";
            }

            if (roleId == 3) {
                return "bg-green-200 text-green-900";
            }
        },
    },
};
</script>

<script setup>
import Paginator from "../Shared/Paginator.vue";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";

let props = defineProps({
    users: Object,
    filters: Object,
    can: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    debounce(function (value) {
        Inertia.get(
            "/users",
            { search: value },
            {
                preserveState: true,
                replace: true,
            }
        );
    }, 300)
);

const destroy = (id) => {
    if (confirm("Are you sure?")) {
        Inertia.delete(route("user.destroy", id));
    }
};

const restore = (id) => {
    if (confirm("Are you sure?")) {
        Inertia.get(route("user.restore", id));
    }
};
</script>
