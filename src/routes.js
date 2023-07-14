import Home from './Pages/HomePage.vue';
import Stats from './Pages/StatusPage.vue';
import Match from './Pages/MatchPage.vue';
import Table from './Pages/TablePage.vue';


export const routes = [
    {path: '/', component: Home},
    {path: '/matchs', component: Match},
    
    {path: '/stats', component: Stats},
    {path: '/table', component: Table},
]