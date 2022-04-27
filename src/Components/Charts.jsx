import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Charts(props) {
  const labels = props.date;
  const data = {
    labels: labels,
    datasets: [
      {
        label: props.title,
        data: props.data,
        fill: true,
        borderColor: props.color,
        backgroundColor: props.color,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `History (${props.title})`,
      },
    },
  };
  if (options === undefined) {
    return <p>Error in options</p>;
  } else if (data === undefined) {
    return <p>Error in data</p>;
  } else if (labels === undefined) {
    return <p>Error in labels</p>;
  } else {
    return (
      <div>
        <Line options={options} data={data} />;
      </div>
    );
  }
}

export default Charts;
