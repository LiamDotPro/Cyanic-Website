/**
 * Created by li on 28/05/2017.
 */

import {Line} from 'vue-chartjs'

export default Line.extend({
  mounted () {
    this.renderChart({
      labels: ['Jan 14', 'Jan 15', 'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21', 'Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30', 'Jan 31', 'feb 1', 'feb 2', 'feb 3', 'feb 4', 'feb 5', 'feb 6', 'feb 7', 'feb 8', 'feb 9', 'feb 10', 'feb 11', 'feb 12', 'feb 13', 'feb 14'],
      datasets: [
        {
          label: 'Page Views',
          backgroundColor: '#027ef1',
          borderColor: '#027ef1',
          fill: false,
          scales: {
            xAxes: [{
              display: false
            }]
          },
          pointBackgroundColor: '#fcfcfd',
          data: [8062, 8339, 9415, 19500, 24000, 15488, 11019, 8850, 9119, 10590, 63350, 222620, 204333, 155470, 122899, 118228, 142021, 104062, 106911, 104316, 93388, 118046, 83120, 66214, 58818, 36692, 33054, 29654, 23863, 41128, 81226, 43916]
        }
      ]
    }, {
      responsive: true, maintainAspectRatio: false
    })
  }
})
