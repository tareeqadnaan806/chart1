const ctx = document.getElementById("doughnut");

const labels = ["English", "Maths", "Science", "Hindi", "Social", "General"];
const data = [12, 19, 3, 5, 2, 3];
const data1 = [2, 9, 13, 15, 12, 3];
const data2 = [52, 29, 13, 35, 21, 23];

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: data,
        borderWidth: 1,
        color: "black",
        backgroundColor: "green",
      },
      {
        label: "# of Votes 1",
        data: data1,
        borderWidth: 3,
        color: "black",
        backgroundColor: "purple",
      },
      {
        label: "# of Votes2",
        data: data2,
        borderWidth: 5,
        color: "black",
        backgroundColor: "orange",
      },
    ],
},
});

const bar = document.getElementById("bar");
new Chart(bar, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "student 1",
        data: data1,
        borderWidth: 3,
        color: "black",
        backgroundColor: "grey",
      },
      {
        label: "student 2",
        data: data2,
        borderWidth: 5,
        color: "black",
        backgroundColor: "blue",
      },
    ],
  },
});


const line = document.getElementById("line")
new Chart(line, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "student 1",
          data: data1,
          borderWidth: 3,
          color: "black",
          backgroundColor: "red",
        },
        {
          label: " student 2",
          data: data2,
          borderWidth: 5,
          color: "black",
          backgroundColor: "green",
        },
      ],
    },
})