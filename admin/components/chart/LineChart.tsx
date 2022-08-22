import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "제품만족도",
    color: "hsl(126, 70%, 50%)",
    data: [
      {
        x: "1",
        y: 11,
      },
      {
        x: "2",
        y: 99,
      },
      {
        x: "3",
        y: 80,
      },
      {
        x: "4",
        y: 70,
      },
      {
        x: "5",
        y: 99,
      },
      {
        x: "6",
        y: 5,
      },
      {
        x: "7",
        y: 13,
      },
      {
        x: "8",
        y: 22,
      },
      {
        x: "9",
        y: 36,
      },
      {
        x: "10",
        y: 48,
      },
      {
        x: "11",
        y: 56,
      },
      {
        x: "12",
        y: 72,
      },
    ],
  },
  {
    id: "배송만족도",
    color: "hsl(263, 70%, 50%)",
    data: [
      {
        x: "1",
        y: 24,
      },
      {
        x: "2",
        y: 36,
      },
      {
        x: "3",
        y: 48,
      },
      {
        x: "4",
        y: 56,
      },
      {
        x: "5",
        y: 72,
      },
      {
        x: "6",
        y: 82,
      },
      {
        x: "7",
        y: 92,
      },
      {
        x: "8",
        y: 85,
      },
      {
        x: "9",
        y: 88,
      },
      {
        x: "10",
        y: 72,
      },
      {
        x: "11",
        y: 56,
      },
      {
        x: "12",
        y: 1,
      },
    ],
  },
];

const LineChart = () => {
  return (
    <ResponsiveLine
      data={data}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 0,
        max: 100,
        stacked: false,
        reverse: false,
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      yFormat=' >-.2f'
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "월",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "만족도",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel={function (t) {
        return t.x + ": " + t.y;
      }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
