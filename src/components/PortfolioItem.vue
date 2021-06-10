<template>
    <div class="bg-purple-200 cursor-pointer">
        <div class="p-4">
            <img class="w-full h-52 object-cover"
                 v-bind:src="image"
                 v-bind:alt="title">
        </div>
        <div class="pt-2 px-4 pb-8">
            <h3 class="font-bold text-xl mt-2">{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'description', 'image'],
}
</script>
