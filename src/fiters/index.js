// import moment from 'moment'
// import {format} from 'date-fns' 
import Vue from 'vue'
import format from 'date-fns/format' 

Vue.filter('date-format', function (value, formatStr='yyyy-mm-dd hh:mm:ss') {
    // return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
    return format(value, formatStr)
})