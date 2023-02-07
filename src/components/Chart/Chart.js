import { useContext } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";

import { FeedbackListContext } from "../../state/context";
import { chartDataFormatter } from "../../utils/dataFormatter";

import "./Chart.scss";

const Chart = () => {
  const { feedbacks } = useContext(FeedbackListContext);

  return (
    <div className="chart">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart
          width={150}
          height={40}
          data={chartDataFormatter(feedbacks)}
          margin={{
            top: 20
          }}
        >
          <Bar
            dataKey="counter"
            fill="#dddddd"
            label={{ position: 'top' }}
          />
          <XAxis dataKey="rate" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
