<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title"
         role="article" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


            <div
                class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="prose block mx-auto" v-html="html"></div>
                    <div class="block mx-auto" v-if="extra" v-html="extra"></div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button"
                            @click="$emit('close')"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm">
                        sluiten
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {markdown} from 'markdown';
import axios from 'axios';

export default {
    props: ['content', 'extra'],
    data() {
        return {
            html: undefined
        }
    },
    created() {
        axios.get(this.content).then((result) => {
            this.html = markdown.toHTML(result.data);
        })
    },
}
</script>
