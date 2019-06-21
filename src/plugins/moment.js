import Vue from 'vue'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
require('moment/locale/es')
Vue.use(VueMoment, {
    moment,
})