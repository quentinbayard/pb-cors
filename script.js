// Our labels along the x-axis
var x = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var y1 = [86,114,106,106,107,111,133,221,783,2478];
var y2 = [282,350,411,502,635,809,947,1402,3700,5267];
var y3 = [168,170,178,190,203,276,408,547,675,734];
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: x,
    datasets: [
      { 
        data: y1,
        label: "test",
        borderColor: "#449555",
        fill: false
      },
      { 
        data: y2,
        label: "reference",
        borderColor: "#c195fd",
        fill: false
      },
      { 
        data: y3,
        label: "other",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  }
});