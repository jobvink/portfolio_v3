<template>
    <div class="flex justify-between mb-4 items-center">
        <div class="prose pr-0 | lg:pr-8">
            <h3>{{ employer }} - {{ job_title }}</h3>
            <h4>
                <span>{{ start_date.format('MMMM YYYY') }}</span>
                <span v-if="end_date">- {{ end_date.format('MMMM YYYY') }}</span>
            </h4>
            <slot></slot>
        </div>
        <img class="hidden | lg:block border-4 border-gray-400 rounded-full z-10"
             v-bind:src="src"
             v-bind:alt="employer">
    </div>
</template>

<script>
export default {
    'props': ['employer', 'job_title', 'start_date', 'end_date', 'src']
}
</script>
