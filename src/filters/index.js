/*
定义过滤器的模块
 */
import Vue from 'vue'
import moment from 'moment'

Vue.filter('date-format', (value, format) => {
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})