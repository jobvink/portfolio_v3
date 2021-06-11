<template>
    <div class="relative">
        <div class="fixed text-white z-10 left-4 top-10 | md:hidden" @click="menu_is_open = !menu_is_open">
            <i v-bind:class="[menu_is_open ? 'text-white' : 'text-black' ]" class="fa fa-bars text-3xl"></i>
        </div>
        <nav v-bind:class="{ '-left-40': !menu_is_open}"
             class="fixed z-10 h-screen w-40 bg-purple-700 px-3 py-8 transition-all duration-500 | md:h-full md:relative md:left-0">
            <div class="sticky top-24">
                <a class="name text-white block w-40" href="#">Job Vink</a>
                <ul class="mt-4" v-scroll-spy-active v-scroll-spy-link>
                    <li class="py-2 font-bold text-white hover:text-purple-300 focus:text-purple-300">
                        <a href="#section-portfolio">Portfolio</a>
                    </li>
                    <li class="py-2 font-bold text-white hover:text-purple-300 focus:text-purple-300">
                        <a href="#section-opdrachten">opdrachten</a>
                    </li>
                    <li class="py-2 font-bold text-white hover:text-purple-300 focus:text-purple-300">
                        <a href="#section-timeline">Tijdlijn</a>
                    </li>
                    <li class="py-2 font-bold text-white hover:text-purple-300 focus:text-purple-300">
                        <a href="#section-competences">Competenties</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu_is_open: false
        }
    }
}
</script>
