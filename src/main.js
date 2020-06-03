import Vue from 'vue'
import App from './App.vue'
import ezVuechart from 'ez-vue-chart'
import EzChart from 'ez-chart'
Vue.config.productionTip = false
Vue.use(ezVuechart);
EzChart.extend({
  customCharts: {
    bottomLegind (options) {
      const option = this.getOption(Object.assign(options, {type: options.params.type}));
      Object.assign(option.legend, {
        bottom: 20,
        left: 'center',
        orient: 'horizontal'
      })
      return option
    }
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app')
