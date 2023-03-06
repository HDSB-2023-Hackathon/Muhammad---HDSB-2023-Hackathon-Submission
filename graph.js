const graphCtx = document.getElementById("graph").getContext("2d");
let graphData = {
  type: "scatter",
  data: {
    datasets: [],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coordinate Graph",
    },
    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom",
          scaleLabel: {
            display: true,
            labelString: "X",
          },
        },
      ],
      yAxes: [
        {
          type: "linear",
          position: "left",
          scaleLabel: {
            display: true,
            labelString: "Y",
          },
        },
      ],
    },
  },
};
let graphChart = new Chart(graphCtx, graphData);

function plotLines() {
  // read input values for both lines
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);
  let x3 = parseFloat(document.getElementById("x3").value);
  let y3 = parseFloat(document.getElementById("y3").value);
  let x4 = parseFloat(document.getElementById("x4").value);
  let y4 = parseFloat(document.getElementById("y4").value);

  // create dataset for line 1
  let dataset1 = {
    label: `Line 1 (${x1},${y1}) to (${x2},${y2})`,
    data: [
      {
        x: x1,
        y: y1,
      },
      {
        x: x2,
        y: y2,
      },
    ],
    backgroundColor: "rgba(255, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    showLine: true,
  };

  // create dataset for line 2
  let dataset2 = {
    label: `Line 2 (${x3},${y3}) to (${x4},${y4})`,
    data: [
      {
        x: x3,
        y: y3,
      },
      {
        x: x4,
        y: y4,
      },
    ],
    backgroundColor: "rgba(0, 0, 255, 1)",
    borderColor: "rgba(0, 0, 255, 1)",
    showLine: true,
  };

  // add both datasets to graph data
  graphData.data.datasets = [dataset1, dataset2];

  // update chart
  graphChart.update();

  // prevent form submission
  return false;
}