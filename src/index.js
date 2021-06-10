import Vue from 'vue';
import Navigation from './components/Navigation.vue'
import Top from './components/Top.vue'
import App from './components/App.vue'
import Bottom from './components/Bottom.vue'

import './css/main.css'

new Vue({
    el: '#app',
    components: {
        'navigation': Navigation,
        'top': Top,
        'app': App,
        'bottom': Bottom
    }
})

