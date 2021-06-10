<template>
    <main>
        <section class="bg-purple-700 px-4 py-4 rounded-md mx-16 mt-16 text-white">
            <h2 class="font-bold text-2xl">Uitgelicht</h2>
            <div class="flex">
                <div class="w-5/6 pr-8">
                    <p class="pt-2">TVgids.nl is een website die zich richt op content met betrekking tot
                        televisieprogramma's en ondemand content Tijdens dit project ben ik verantwoordelijk geweest
                        voor de frontend van de website.</p>
                    <button class="mt-4 btn btn--purple" data-modal="#modal9">
                        Bekijk het project
                    </button>
                </div>
                <div class="w-1/6">
                    <img src="../../img/portfolio/tvgids_home.png" alt="TVgids.nl homepage">
                </div>
            </div>
        </section>
        <hr class="h-0.5 rounded-full m-16 bg-purple-400">
        <section class="px-16" id="section-portfolio">
            <h2 class="font-bold text-4xl mb-2">Opdrachten</h2>
            <p class="text-base">Een overzicht van al mijn projecten.</p>
            <div class="grid grid-cols-3 gap-x-4 gap-y-8 mt-16">
                <portfolio-item v-for="item in portfolio"
                                :key="item.id"
                                v-on:click.native="visibleModal = item.id"
                                v-bind:title="item.title"
                                v-bind:description="item.description"
                                v-bind:image="item.image"
                />
            </div>
        </section>
        <hr class="h-0.5 rounded-full m-16 bg-purple-400">
        <section class="px-4 py-4 px-16" id="section-timeline">
            <h2 class="font-bold text-4xl mb-2">Tijdlijn</h2>
            <p class="font-bold text-lg">Een overzicht van mijn werkervaring.</p>
            <div class="timelines relative">
                <div class="flex mb-4 items-center">
                    <div class="prose">
                        <h3>isource - webdeveloper</h3>
                        <h4>Januari 2018 - Januari 2019</h4>
                        <p>Grote projecten zoals <a target="_blank" class="link"
                                                    href="https://tvgids.nl">TVgids.nl</a> en projecten met niewere
                            technieken zoals nodejs</p>
                    </div>
                    <img class="border-4 border-gray-400 rounded-full" src="../../img/timeline/isource.jpg" alt="isource">
                </div>
                <div class="flex mb-4 items-center">
                    <div class="prose">
                        <h3>isource - Stage</h3>
                        <h4>September 2017 - Januari 2018</h4>
                        <p>Bij isource ga ik aan de slag als webdeveloper. Hier heb ik projecten gedaan met symfony
                            en met wordpress</p>
                    </div>
                    <img class="border-4 border-gray-400 rounded-full" src="../../img/timeline/isource.jpg" alt="isource">
                </div>
                <div class="flex mb-4 items-center">
                    <div class="prose">
                        <h3>Gemeente Leiden - Inventarisatiemedewerker</h3>
                        <h4>Augustus 2017</h4>
                        <p>Tijdens mijn baan bij de gemeente Leiden heb ik meegeholpen aan een
                            inventarisatie van alle IT faciliteiten, die in beheer zijn van de gemeente Leiden.
                            Bij deze baan was het belangrijk nauwkeurig te werk te gaan.</p>
                    </div>
                    <img class="border-4 border-gray-400 rounded-full" src="../../img/timeline/gemeente_leiden.jpg"
                         alt="Gemeente Leiden">
                </div>
                <div class="flex mb-4 items-center">
                    <div class="prose">
                        <h3>Hogeschool Leiden - Student-assistent</h3>
                        <h4>September 2016 - April 2017</h4>
                        <p>Als student-assistent ben ik mede verantwoordelijk voor het geven van
                            een aantal werkcolleges aan eerstejaars studenten.</p>
                    </div>
                    <img class="border-4 border-gray-400 rounded-full" src="../../img/timeline/hogeschool_leiden.png"
                         alt="Hogeschool Leiden">
                </div>
                <div class="flex mb-4 items-center">
                    <div class="prose">
                        <h3>Hogeschool Leiden - Administratief medewerker</h3>
                        <h4>Augustus 2016</h4>
                        <p>Als medewerker heb ik geholpen bij het vervangen van hardeschijven
                            en RAM-geheugen in ongeveer 3000 computers en werkplekken in de Hogeschool.</p>
                    </div>
                    <img class="border-4 border-gray-400 rounded-full" src="../../img/timeline/hogeschool_leiden.png"
                         alt="Hogeschool Leiden">
                </div>
                <div class="flex mb-4 items-center">
                    <div class="prose">
                        <h3>Studentaanhuis - ICT consultent</h3>
                        <h4>December 2015 - Oktober 2016</h4>
                        <p>Bij studentaanhuis kwam ik bij klanten thuis om diverse problemen
                            op te lossen. Dat kon variëren van e-mail problemen tot nieuwe computers
                            installeren.</p>
                    </div>
                    <img class="border-4 border-gray-400 rounded-full" src="../../img/timeline/studentaanhuis.jpg"
                         alt="Studentaanhuis">
                </div>
                <div class="flex mb-4 items-center">
                    <div class="prose">
                        <h3>Flora Holland - Logistiek medewerker</h3>
                        <h4>Juli 2014</h4>
                        <p>Mijn eerste baan was bij Flora Holland. Hier heb ik bloemen
                            verplaatst van de ene naar de andere afdeling om ervoor te zorgen dat de bloemen bij de
                            juiste
                            klant
                            afgeleverd werden.</p>
                    </div>
                    <img class="border-4 border-gray-400 rounded-full" src="../../img/timeline/flora_holland.jpg"
                         alt="Flora Holland">
                </div>
            </div>
        </section>
        <hr class="h-0.5 rounded-full m-16 bg-purple-400">
        <section class="px-16" id="section-competences">
            <h2 class="font-bold text-4xl mb-2">Competenties</h2>
            <p class="text-base">Hieronder staan alle skills en vaardigheden die ik heb, en alle technieken waar ik
                mee heb
                gewerkt.</p>
            <div>
                <div class="grid gap-x-4 gap-y-8 grid-cols-4">
                    <div class="p-2">
                        <img class="w-full p-8" src="../../img/competenties/laravel_portfolio.svg" alt="Laravel">
                        <div class="prose">
                            <h3 class="font-bold">Laravel</h3>
                            <p>Laravel is een php framework gebouwd op het model – view – controller pattern.</p>
                        </div>
                    </div>
                    <div class="p-2">
                        <img class="w-full p-8" src="../../img/competenties/php_portfolio.svg" alt="PHP">
                        <div class="prose">
                            <h3 class="font-bold">PHP</h3>
                            <p>Php is een programeertaal vooral gebruikt voor back-end programmeren.</p>
                        </div>
                    </div>
                    <div class="p-2">
                        <img class="w-full p-8" src="../../img/competenties/javascript_portfolio.svg" alt="Javascript">
                        <div class="prose">
                            <h3 class="font-bold">Javascript</h3>
                            <p>Ik heb erg veel gewerkt met webdevelopment en ik ben behendig geworden met
                                javascript.</p>
                        </div>
                    </div>
                    <div class="p-2">
                        <img class="w-full p-8" src="../../img/competenties/css_portfolio.svg" alt="css">
                        <div class="prose">
                            <h3 class="font-bold">CSS</h3>
                            <p>Bij webdevelopment is css natuurlijk niet weg te denken.</p>
                        </div>
                    </div>
                    <div class="p-2">
                        <img class="w-full p-8" src="../../img/competenties/html_portfolio.svg" alt="HTML">
                        <div class="prose">
                            <h3 class="font-bold">HTML</h3>
                            <p>Ook heb ik ervaring met basis HTML en HTML5.</p>
                        </div>
                    </div>
                    <div class="p-2">
                        <img class="w-full p-8" src="../../img/competenties/react_portfolio.svg" alt="React">
                        <div class="prose">
                            <h3 class="font-bold">React</h3>
                            <p>In een dynamische wereld zijn javascript frameworks een must.</p>
                        </div>
                    </div>
                    <div class="p-2">
                        <img class="w-full p-8" src="../../img/competenties/angular_portfolio.svg" alt="Angular">
                        <div class="prose">
                            <h3 class="font-bold">Angular</h3>
                            <p>Een fantastisch framework gemaakt door Google.</p>
                        </div>
                    </div>
                    <div class="p-2">
                        <img class="w-full p-8" src="../../img/competenties/nodejs_portfolio.svg" alt="Nodejs">
                        <div class="prose">
                            <h3 class="font-bold">Nodejs</h3>
                            <p>Super snelle asynchrone code</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <portfolio-model v-for="modal in modals"
                         v-if="visibleModal === modal.id"
                         v-on:close="visibleModal = false"
                         v-bind:content="modal.content"
        />
    </main>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue'
import PortfolioModel from './PortfolioModel.vue'

export default {
    data: function () {
        return {
            visibleModal: false,
            portfolio: [
                {id:1, title: 'Floating Lab', description: 'Zelf varende boot in samenwerking met Port of Rotterdam', image: '../../img/portfolio/floating_lab_front.jpg'},
                {id:2, title: 'TVgids.nl', description: 'Website voor televisie en ondemand content', image: '../../img/portfolio/tvgids_home.png'},
                {id:3, title: 'Durfkatijk', description: 'Website politieke partij', image: '../../img/portfolio/durf_home.png'},
                {id:4, title: 'Pedicure', description: 'Persoonlijke website', image: '../../img/portfolio/mod6_front.jpg'},
                {id:5, title: 'Baat bij bewind', description: 'Persoonlijke website', image: '../../img/portfolio/mod5_front.png'},
                {id:6, title: 'IoT selution in de retail', description: 'Een slimme kledinghanger', image: '../../img/portfolio/mod4_front.jpg'},
                {id:7, title: 'Virtual reality', description: 'Ervaar het echte werk', image: '../../img/portfolio/mod3_front.jpg'},
                {id:8, title: 'Interactive website NOS', description: 'Een kijkje in Noord-Korea', image: '../../img/portfolio/mod2_front.jpg'},
                {id:9, title: 'Specialisatie project', description: 'Een reis door het spijsverteringskanaal', image: '../../img/portfolio/mod1_front.jpg'},
            ],
            modals: [
                {id:1, content: ''},
                {id:2, content: '<h2>Interactive website NOS</h2>' +
                        '<p>Een kijkje in Noord-Korea.</p>' +
                        '<img src="img/portfolio/mod2_1.png" alt="">' +
                        '<p>Bij dit project moesten we in opdracht van de NOS een interactieve website maken. De' +
                        '    visie van de NOS is om bepaalde verhalen en nieuwsitems uitgebreid uit te lichten in' +
                        '    wat de NOS \'specials\' noemt. Dit zijn uitgebreide verhalen waar af en toe een' +
                        '    interactief element in zit. Een voorbeeld van zo\'n interactief verhaal is: ' +
                        '<a href="http://lab.nos.nl/projects/drugs/">"Het DNA van MDMA"</a> van de NOS.</p>' +
                        '<p>Wij kregen de opdracht om zo\'n \'special\' te maken. We kregen als onderwerp een verhaal' +
                        '    over Noord-Korea. Dit is een land waar een totale dictatuur heerst. Wij hebben dezn' +
                        '    sfeer in onze website naar voren laten komen door na te denken over bijvoorbeeld het' +
                        '    kleurgebruik. Daarbij hebben we alle aandachtspunten naar voren laten komen door dit' +
                        '    kleurgebruik toe te passen.</p>'}
            ]
        }
    },
    components: {
        'portfolio-item': PortfolioItem,
        'portfolio-model': PortfolioModel
    }
}
</script>
