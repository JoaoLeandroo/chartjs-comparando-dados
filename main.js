const ctx = document.getElementById('my-grafic');
const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
const vendedor_1 = [23, 112, 104, 57, 98, 123]
const vendedor_2 = [47, 99, 102, 143, 139, 107]
const vendedor_3 = [55, 44, 108, 110, 90, 101]

new Chart(ctx, {
  type: 'line',
  data: {
    labels: mes,
    datasets: [{
      label: 'Carlos',
      data: vendedor_1,
      borderWidth: 2
    },{
        label: 'Miguel',
        data: vendedor_2,
        borderWidth: 2
    },{
        label: "Lucas",
        data: vendedor_3,
        borderWidth: 2
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})