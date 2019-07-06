import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faBoxOpen, faBox, faIndustry, faToiletPaper, faTruck, faKey, faBars, faTh, faBell, faUser, faCommentAlt, faTasks, faExclamationTriangle, faSignOutAlt, faThLarge, faPencilAlt, faTrashAlt, faClone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCoffee, faBoxOpen, faBox, faIndustry, faToiletPaper, faTruck, faExclamationTriangle , faKey, faBars, faTh, faBell, faCommentAlt, faUser, faTasks, faSignOutAlt, faThLarge, faPencilAlt, faTrashAlt, faClone)
Vue.component('icon', FontAwesomeIcon);