'use strict';

var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['coding', 'skateboarding', 'video games', 'jamming'],
    datasets: [{
        label: 'voting for my favorite things',
        data: [3, 5, 1, 2],
        backgroundColor: ['#444', '#888', '#e3e3e3', '#9cab1a']
    }]
  },
  options: {}
});
