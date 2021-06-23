<template>
    <main v-scroll-spy="{selector: 'section'}">
        <header id="section-portfolio" class="bg-purple-700 px-4 py-4 rounded-md mx-4 mt-16 text-white | lg:mx-16">
            <h2 class="font-bold text-2xl">Uitgelicht</h2>
            <div class="md:flex">
                <div class="mb-4 w-full | md:w-5/6 md:pr-8">
                    <p class="pt-2">TVgids.nl is een website die zich richt op content met betrekking tot
                        televisieprogramma's en ondemand content Tijdens dit project ben ik verantwoordelijk geweest
                        voor de frontend van de website.</p>
                    <button @click="visibleModal = 2" class="mt-4 btn btn--purple" data-modal="#modal9">
                        Bekijk het project
                    </button>
                </div>
                <div class="w-full md:w-1/6">
                    <img src="img/portfolio/tvgids_home.png" alt="TVgids.nl homepage">
                </div>
            </div>
        </header>
        <section class="px-4 | lg:px-16" id="section-opdrachten">
            <hr class="h-0.5 rounded-full my-16 bg-purple-400">
            <h2 class="font-bold text-4xl mb-2">Opdrachten</h2>
            <p class="text-base">Een overzicht van al mijn projecten.</p>
            <div class="grid gap-x-4 gap-y-8 mt-16 | grid-cols-1 | md:grid-cols-2 | lg:grid-cols-3">
                <portfolio-item v-for="item in portfolio"
                                :key="item.id"
                                v-on:click.native="visibleModal = item.id"
                                v-bind:title="item.title"
                                v-bind:description="item.description"
                                v-bind:image="item.image"
                />
            </div>
            <hr class="h-0.5 rounded-full my-16 bg-purple-400">
        </section>
        <section class="px-4 py-4 lg:px-16" id="section-timeline">
            <h2 class="font-bold text-4xl mb-2">Tijdlijn</h2>
            <p class="font-bold text-lg">Een overzicht van mijn werkervaring.</p>
            <div class="timelines relative">
                <timeline-item v-for="item in timeline"
                               :key="item.id"
                               v-bind:employer="item.employer"
                               v-bind:job_title="item.job_title"
                               v-bind:start_date="item.start_date"
                               v-bind:end_date="item.end_date"
                               v-bind:src="item.src">
                    {{ item.description }}
                </timeline-item>
            </div>
            <hr class="h-0.5 rounded-full my-16 bg-purple-400">
        </section>
        <section class="px-4 | lg:px-16" id="section-competences">
            <h2 class="font-bold text-4xl mb-2">Competenties</h2>
            <p class="text-base">Hieronder staan alle skills en vaardigheden die ik heb, en alle technieken waar ik
                mee heb
                gewerkt.</p>
            <div>
                <div class="grid gap-x-4 gap-y-8 | grid-cols-1 | md:grid-cols-2 | lg:grid-cols-3 | xl:grid-cols-4">
                    <competentie v-for="competentie in competenties"
                                 :key="competentie.id"
                                 v-bind:src="competentie.src"
                                 v-bind:competentie="competentie.competentie"
                    >{{ competentie.description }}
                    </competentie>
                </div>
            </div>
        </section>
        <portfolio-model v-for="modal in modals"
                         :key="modal.id"
                         v-if="visibleModal === modal.id"
                         v-on:close="visibleModal = false"
                         v-bind:content="modal.content"
                         v-bind:extra="modal.extra"
        />
    </main>
</template>

<script>
import moment from 'moment';

import PortfolioItem from './PortfolioItem.vue'
import PortfolioModel from './PortfolioModel.vue'
import TimelineItem from "./TimelineItem.vue";
import Competentie from "./Competentie.vue";

moment.locale('nl_NL')

export default {
    data: function () {
        return {
            visibleModal: false,
            portfolio: [
                {
                    id: 1,
                    title: 'Floating Lab',
                    description: 'Zelf varende boot in samenwerking met Port of Rotterdam',
                    image: 'img/portfolio/floating_lab_front.jpg'
                },
                {
                    id: 2,
                    title: 'TVgids.nl',
                    description: 'Website voor televisie en ondemand content',
                    image: 'img/portfolio/tvgids_home.png'
                },
                {
                    id: 3,
                    title: 'Durfkatijk',
                    description: 'Website politieke partij',
                    image: 'img/portfolio/durf_home.png'
                },
                {
                    id: 6,
                    title: 'IoT selution in de retail',
                    description: 'Een slimme kledinghanger',
                    image: 'img/portfolio/mod4_front.jpg'
                },
                {
                    id: 7,
                    title: 'Virtual reality',
                    description: 'Ervaar het echte werk',
                    image: 'img/portfolio/mod3_front.jpg'
                },
                {
                    id: 8,
                    title: 'Interactive website NOS',
                    description: 'Een kijkje in Noord-Korea',
                    image: 'img/portfolio/mod2_front.jpg'
                },
                {
                    id: 9,
                    title: 'Specialisatie project',
                    description: 'Een reis door het spijsverteringskanaal',
                    image: 'img/portfolio/mod1_front.jpg'
                },
            ],
            modals: [
                {
                    id: 8, content: 'projects/nos.md'
                },
                {
                    id: 9,
                    content: '/projects/specialisatie_project.md',
                    extra: '<iframe class="mx-auto my-8" width="560" height="315" src="https://www.youtube.com/embed/7NHE-gKHsx8" frameborder="0" allowfullscreen></iframe>'
                },
                {
                    id: 7, content: 'projects/vr.md'
                },
                {
                    id: 6,
                    content: 'projects/iot.md',
                    extra: '<iframe class="mx-auto my-8" width="560" height="315" src="https://www.youtube.com/embed/gI9ETe90ML4"\n' +
                        '        frameborder="0" allowfullscreen></iframe>'
                },
                {
                    id: 3, content: 'projects/durf.md'
                },
                {
                    id: 2, content: 'projects/tvgids.md'
                },
                {
                    id: 1, content: 'projects/port_of_rotterdam.md'
                }
            ],
            timeline: [
                {
                    employer: "isource",
                    job_title: "Stage",
                    start_date: moment(new Date('September 2017')),
                    end_date: moment(new Date('Januari 2018')),
                    src: "img/timeline/isource.jpg",
                    description: 'Bij isource ga ik aan de slag als webdeveloper. Hier heb ik projecten gedaan met symfony en met wordpress'
                }, {
                    employer: "Gemeente Leiden",
                    job_title: "Inventarisatiemedewerker",
                    start_date: moment(new Date('Januari 2018')),
                    src: "img/timeline/gemeente_leiden.jpg",
                    description: 'Tijdens mijn baan bij de gemeente Leiden heb ik meegeholpen aan een\n' +
                        '                            inventarisatie van alle IT faciliteiten, die in beheer zijn van de gemeente Leiden.\n' +
                        '                            Bij deze baan was het belangrijk nauwkeurig te werk te gaan.'
                }, {
                    employer: "Hogeschool Leiden",
                    job_title: "Student-assistent",
                    start_date: moment(new Date('September 2016')),
                    end_date: moment(new Date('April 2017')),
                    src: "img/timeline/hogeschool_leiden.png",
                    description: 'Als student-assistent ben ik mede verantwoordelijk voor het geven van een aantal werkcolleges aan eerstejaars studenten.'
                }, {
                    employer: "Hogeschool Leiden",
                    job_title: "Administratief medewerker",
                    start_date: moment(new Date('August 2018')),
                    src: "img/timeline/hogeschool_leiden.png",
                    description: 'Als medewerker heb ik geholpen bij het vervangen van hardeschijven en RAM-geheugen in ongeveer 3000 computers en werkplekken in de Hogeschool.'
                }, {
                    employer: "Studentaanhuis",
                    job_title: "ICT consultent",
                    start_date: moment(new Date('December 2015')),
                    end_date: moment(new Date('October 2016')),
                    src: "img/timeline/studentaanhuis.jpg",
                    description: 'Bij studentaanhuis kwam ik bij klanten thuis om diverse problemen\n' +
                        '                            op te lossen. Dat kon variëren van e-mail problemen tot nieuwe computers\n' +
                        '                            installeren.'
                }, {
                    employer: "Flora Holland",
                    job_title: "Logistiek medewerker",
                    start_date: moment(new Date('July 2018')),
                    src: "img/timeline/flora_holland.jpg",
                    description: 'Mijn eerste baan was bij Flora Holland. Hier heb ik bloemen verplaatst van de ene naar de andere afdeling om ervoor te zorgen dat de bloemen bij de juiste klant afgeleverd werden.'
                },
            ],
            competenties: [
                {
                    id: 1,
                    competentie: "PHP",
                    src: 'img/competenties/php_portfolio.svg',
                    description: "Php is een programeertaal vooral gebruikt voor back-end programmeren.",
                }, {
                    id: 2,
                    competentie: "Javascript",
                    src: 'img/competenties/javascript_portfolio.svg',
                    description: "Ik heb erg veel gewerkt met webdevelopment en ik ben behendig geworden met javascript.",
                }, {
                    id: 3,
                    competentie: "CSS",
                    src: 'img/competenties/css_portfolio.svg',
                    description: "Bij webdevelopment is scss natuurlijk niet weg te denken.",
                }, {
                    id: 4,
                    competentie: "HTML",
                    src: 'img/competenties/html_portfolio.svg',
                    description: "Ook heb ik ervaring met basis HTML en HTML5.",
                }, {
                    id: 5,
                    competentie: "React",
                    src: 'img/competenties/react_portfolio.svg',
                    description: "In een dynamische wereld zijn javascript frameworks een must.",
                }, {
                    id: 6,
                    competentie: "Angular",
                    src: 'img/competenties/angular_portfolio.svg',
                    description: "Een fantastisch framework gemaakt door Google.",
                }, {
                    id: 7,
                    competentie: "Nodejs",
                    src: 'img/competenties/nodejs_portfolio.svg',
                    description: "Super snelle asynchrone code",
                }
            ]
        }
    },
    components: {
        'portfolio-item': PortfolioItem,
        'portfolio-model': PortfolioModel,
        'timeline-item': TimelineItem,
        'competentie': Competentie
    }
}
</script>
