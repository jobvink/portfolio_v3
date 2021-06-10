<template>
    <main v-scroll-spy="{selector: 'section'}">
        <header id="section-portfolio" class="bg-purple-700 px-4 py-4 rounded-md mx-16 mt-16 text-white">
            <h2 class="font-bold text-2xl">Uitgelicht</h2>
            <div class="flex">
                <div class="w-5/6 pr-8">
                    <p class="pt-2">TVgids.nl is een website die zich richt op content met betrekking tot
                        televisieprogramma's en ondemand content Tijdens dit project ben ik verantwoordelijk geweest
                        voor de frontend van de website.</p>
                    <button @click="visibleModal = 2" class="mt-4 btn btn--purple" data-modal="#modal9">
                        Bekijk het project
                    </button>
                </div>
                <div class="w-1/6">
                    <img src="../../img/portfolio/tvgids_home.png" alt="TVgids.nl homepage">
                </div>
            </div>
        </header>
        <section class="px-16" id="section-opdrachten">
            <hr class="h-0.5 rounded-full my-16 bg-purple-400">
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
            <hr class="h-0.5 rounded-full my-16 bg-purple-400">
        </section>
        <section class="px-4 py-4 px-16" id="section-timeline">
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
        <section class="px-16" id="section-competences">
            <h2 class="font-bold text-4xl mb-2">Competenties</h2>
            <p class="text-base">Hieronder staan alle skills en vaardigheden die ik heb, en alle technieken waar ik
                mee heb
                gewerkt.</p>
            <div>
                <div class="grid gap-x-4 gap-y-8 grid-cols-4">
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
                         v-if="visibleModal === modal.id"
                         v-on:close="visibleModal = false"
                         v-bind:content="modal.content"
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
                    image: '../../img/portfolio/floating_lab_front.jpg'
                },
                {
                    id: 2,
                    title: 'TVgids.nl',
                    description: 'Website voor televisie en ondemand content',
                    image: '../../img/portfolio/tvgids_home.png'
                },
                {
                    id: 3,
                    title: 'Durfkatijk',
                    description: 'Website politieke partij',
                    image: '../../img/portfolio/durf_home.png'
                },
                {
                    id: 4,
                    title: 'Pedicure',
                    description: 'Persoonlijke website',
                    image: '../../img/portfolio/mod6_front.jpg'
                },
                {
                    id: 5,
                    title: 'Baat bij bewind',
                    description: 'Persoonlijke website',
                    image: '../../img/portfolio/mod5_front.png'
                },
                {
                    id: 6,
                    title: 'IoT selution in de retail',
                    description: 'Een slimme kledinghanger',
                    image: '../../img/portfolio/mod4_front.jpg'
                },
                {
                    id: 7,
                    title: 'Virtual reality',
                    description: 'Ervaar het echte werk',
                    image: '../../img/portfolio/mod3_front.jpg'
                },
                {
                    id: 8,
                    title: 'Interactive website NOS',
                    description: 'Een kijkje in Noord-Korea',
                    image: '../../img/portfolio/mod2_front.jpg'
                },
                {
                    id: 9,
                    title: 'Specialisatie project',
                    description: 'Een reis door het spijsverteringskanaal',
                    image: '../../img/portfolio/mod1_front.jpg'
                },
            ],
            modals: [
                {
                    id: 8, content: '<h2>Interactive website NOS</h2>' +
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
                        '    kleurgebruik toe te passen.</p>'
                },
                {
                    id: 9, content: '<h2>Specialisatie project</h2>\n' +
                        '<p>Een reis door het spijsverteringsstelsel.</p>\n' +
                        '<img src="img/portfolio/mod1_1.jpg" alt=""/>\n' +
                        '<p>Het eerste project dat ik in mijn opleiding gedaan heb, was een project in opdracht van\n' +
                        '    het Boerhaave Museum in Leiden. Wij kregen de opdracht om een interactieve installatie\n' +
                        '    te bouwen voor kinderen tussen de 10 en 14 jaar. Het thema van onze installatie moest\n' +
                        '    gezondheid en lichaam zijn. Mijn projectgroepje heeft er voor gekozen om een reis\n' +
                        '    door het spijsverteringsstelsel te maken.</p>\n' +
                        '<p>Bij dit project hebben wij intensief nagedacht over de gebruiksvriendelijkheid van onze\n' +
                        '    installatie. Ons doel was om het de kinderen zo makkelijk mogelijk te maken. Dit hebben\n' +
                        '    we gedaan door sterk in te zetten op de gebruiksvriendelijkheid van onze\n' +
                        '    installatie.</p>\n' +
                        '<iframe width="560" height="315" src="https://www.youtube.com/embed/7NHE-gKHsx8"\n' +
                        '        frameborder="0" allowfullscreen></iframe>'
                },
                {
                    id: 7, content: '<h2>Virtual reality</h2>\n' +
                        '<p>Ervaar het echte werk.</p>\n' +
                        '<img src="img/portfolio/mod3_1.jpg" alt="">\n' +
                        '<h3><a href="resources/vr/index.html">Bekijk de website (alleen op firefox)</a></h3>\n' +
                        '<p>Voor mijn derde project als student bij de Hogeschool Leiden moesten wij een\n' +
                        '    web-applicatie voor virtual reality maken.</p>\n' +
                        '<p>Mijn projectgenoot en ik hebben besloten om een fietsenwinkel na te bootsen in virtual\n' +
                        '    reality. Het idee achter ons concept was dat je dan het product kunt ervaren zoals het in\n' +
                        '    het werkelijk is.</p>\n' +
                        '<p>Voor dit project hebben we met A-frame gewerkt. A-frame is een framework gebouwd voor\n' +
                        '    virtual reality in een web omgeving.</p>'
                },
                {
                    id: 6, content: '<h2>IoT selution in de retail</h2>\n' +
                        '<p>Een slimme kledinghanger.</p>\n' +
                        '<img src="img/portfolio/mod4_1.jpg" alt="">\n' +
                        '<p>Voor dit project moesten wij een installatie maken voor een winkel. Wij kwamen met het\n' +
                        '    idee om een slimme kleding-hanger te maken. Het idee was dat de consument zijn maat in\n' +
                        '    kan voeren op het kledingrek, vervolgens licht het lampje van de ingevoerde maat op bij\n' +
                        '    de hanger, zodat de consument direct weet waar zijn maat hangt.</p>\n' +
                        '<p>De concurrentie van de webshops is tegenwoordig groot. Fysieke winkels kunnen daarom\n' +
                        '    minder personeel inhuren. Het is daarom erg belangrijk om consumenten snel te helpen,\n' +
                        '    zodat het personeel dat er wel staat zo veel mogelijk mensen kunnen helpen.</p>\n' +
                        '<iframe width="560" height="315" src="https://www.youtube.com/embed/gI9ETe90ML4"\n' +
                        '        frameborder="0" allowfullscreen></iframe>'
                },
                {
                    id: 5, content: '<h2>Baat bij bewind</h2>\n' +
                        '<img src="img/portfolio/mod5_1.png" alt="Baat bij bewind banner">\n' +
                        '<h3><a target="_blank" href="https://baatbijbewind.nl">Bekijk de website</a></h3>\n' +
                        '<p>Deze website heb ik gemaakt voor mijn oom die zzp’er is, en een eigen bedrijf heeft in\n' +
                        '    bewindvoering. Het is\n' +
                        '    belangrijk dat zzp’ers zichtbaar zijn op het internet. Dit kan behaald worden door gebruik te\n' +
                        '    maken van\n' +
                        '    search engine optimization.</p>\n' +
                        '<p>Een andere handige tip waar ik gebruik van gemaakt heb om deze website zichtbaar te maken op\n' +
                        '    Google is door\n' +
                        '    het bedrijf van deze klant toe te voegen aan google maps via google’s local guide programma. Op\n' +
                        '    deze manier\n' +
                        '    wordt het bedrijf direct zichtbaar als de naam ingetypt wordt op Google. Je moet ook leren\n' +
                        '    letten op\n' +
                        '    kleinere details. Google geeft bijvoorbeeld voorrang aan websites die alleen bereikbaar zijn met\n' +
                        '    https.</p>\n' +
                        '<img src="img/portfolio/mod5_2.png" alt="Google baat bij bewind">'
                },
                {
                    id: 4, content: '<h2>Pedicuren</h2>\n' +
                        '<img src="img/portfolio/mod6_1.jpg" alt="Baat bij bewind banner">\n' +
                        '<h3><a target="_blank" href="https://tenen-voeten.nl">Bekijk de website</a></h3>\n' +
                        '<p>Deze website heb ik gemaakt voor mijn tante. Mijn tante is pedicure, voor haar is het belangrijk\n' +
                        '    dat haar\n' +
                        '    website de mogelijkheid biedt om informatie te geven over wat ze doet en wat bijvoorbeeld de\n' +
                        '    tarieven van\n' +
                        '    haar praktijk zijn. Ook is het erg belangrijk dat potentiele klanten gemakkelijk contact met\n' +
                        '    haar kunnen\n' +
                        '    leggen. Dit proces kun je verbeteren door kleine dingetjes iets gebruiksvriendelijker te maken,\n' +
                        '    door\n' +
                        '    bijvoorbeeld het telefoonnummer klikbaar te maken, zodat de klant direct op het nummer kan\n' +
                        '    klikken als deze\n' +
                        '    op zijn of haar mobiel de website bezoekt.</p>'
                },
                {
                    id: 3, content: '<h2>Durf</h2>\n' +
                        '<img src="img/portfolio/durf_home.png" alt="Homepagina durfkatwijk">\n' +
                        '<p>Begin 2018 waren er gemeenteraadsverkiezingen. Een van de deelnemende partijen bij de\n' +
                        '    verkiezingen in mijn\n' +
                        '    dorp was DURF. Deze partij is opgericht door een oude schoolvriend van mij. De website van deze\n' +
                        '    partij kon\n' +
                        '    wel wat verbeterpunten gebruiken. Ik heb mijn hulp aangeboden en ben sindsdien verantwoordelijk\n' +
                        '    voor het\n' +
                        '    beheer van de website van de partij.</p>\n' +
                        '<p>Het meest interessante aan dit project vond ik de wijze waarmee ik de doelgroep heb bepaald. Aan\n' +
                        '    het begin\n' +
                        '    van het project had ik moeite met het inschatten van de doelgroep, omdat de partij nog niet\n' +
                        '    eerder mee had\n' +
                        '    gedaan aan de verkiezingen en dus nog geen statistiek had van welke mensen in Katwijk op DURF\n' +
                        '    stemden.\n' +
                        '    Daarom heb ik gekeken naar die demografie van Katwijk en heb ik vervolgens gekeken naar de\n' +
                        '    Google analytics\n' +
                        '    om de doelgroep beter te definiëren. Door deze iteratieve manier van werken kon ik een veel\n' +
                        '    betere website\n' +
                        '    neer zetten.</p>\n' +
                        '<img src="img/portfolio/durf_google_analytics.png" alt="Statestiek durfkatijk">\n' +
                        '<p>Ik heb deze website gebouwd in php met het symfonie framework.</p>\n' +
                        '<a target="_blank" class="close btn btn--default" href="https://durfkatwijk.nl">Bekijk de\n' +
                        '    website</a>'
                },
                {
                    id: 2, content: '<h2>TVgids.nl</h2>\n' +
                        '<img src="img/portfolio/tvgids_home.png" alt="Homepagina van tvgids.nl">\n' +
                        '<p>Bij isource is één van de projecten waar ik aan gewerkt heb het vernieuwen van tvgids.nl. Dit is\n' +
                        '    één van de\n' +
                        '    meest bezochte Nederlandse websites. Ik ben ook erg trots dat ik hier aan mee heb mogen\n' +
                        '    werken.</p>\n' +
                        '<p>Binnen het project ben ik verantwoordelijk geweest voor de frontend van de website. Toen we de\n' +
                        '    ontwerpen\n' +
                        '    binnen kregen bij isource kon ik ook niet wachten om de verschillende componenten uit te\n' +
                        '    denken.</p>\n' +
                        '<img src="img/portfolio/tvgids_component.png" alt="Component uit tvgids.nl">\n' +
                        '<p>Binnen het project hebben we er bijvoorbeeld voor gekozen om te werken met scss en een vaste\n' +
                        '    naamgeving van\n' +
                        '    classes aan te houden. De methode die we aangehouden hebben heet BEM en zorgt ervoor dat er niet\n' +
                        '    alleen\n' +
                        '    beter nagedacht wordt over de structuur van html, maar dat er ook nagedacht wordt over\n' +
                        '    herbruikbare\n' +
                        '    componenten.</p>\n' +
                        '<img src="img/portfolio/BEM.png" style="width: 400px" alt="BEM methode">\n' +
                        '<h3><a href="https://tvgids.nl">Bekijk de website</a></h3>'
                },
                {
                    id: 1, content: '<h2>Floating lab</h2>\n' +
                        '<img src="img/portfolio/floating_lab_boat.jpg" alt="RPA 3">\n' +
                        '<p>Voor mijn minor Data Analytics ben ik bezig met een project in samenwerking met Port of\n' +
                        '    Rotterdam, om een\n' +
                        '    boot autonoom te laten varen</p>\n' +
                        '<p>Hiervoor zijn we bezig met vraagstukken zoals, hoe herken je de kade op camerabeelden en hoe\n' +
                        '    herken je andere\n' +
                        '    boten die om je heen varen.</p>\n' +
                        '<p>Hieronder zie je een filmpje waarin te zien is hoe ons algoritme met computervision herkent waar\n' +
                        '    de kade\n' +
                        '    is.</p>\n' +
                        '<img src="img/portfolio/floating_lab_demo.gif" alt="Demo van kade herkenning">\n' +
                        '<p>Ook ben ik bij mijn minor bezig met andere cutting edge technologieën zoals Neural Networks.</p>'
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
