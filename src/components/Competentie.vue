<template>
    <div class="p-2">
        <img class="w-40 block m-auto p-8" v-bind:src="src" v-bind:alt="competentie">
        <div class="prose">
            <h3 class="font-bold">{{ competentie }}</h3>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['src', 'competentie',]
}
</script>
