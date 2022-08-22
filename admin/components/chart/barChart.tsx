import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "AD",
    "hot dog": 141,
    "hot dogColor": "hsl(98, 70%, 50%)",
    burger: 0,
    burgerColor: "hsl(158, 70%, 50%)",
    sandwich: 149,
    sandwichColor: "hsl(137, 70%, 50%)",
    kebab: 20,
    kebabColor: "hsl(352, 70%, 50%)",
    fries: 158,
    friesColor: "hsl(39, 70%, 50%)",
    donut: 113,
    donutColor: "hsl(150, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 143,
    "hot dogColor": "hsl(235, 70%, 50%)",
    burger: 38,
    burgerColor: "hsl(333, 70%, 50%)",
    sandwich: 62,
    sandwichColor: "hsl(336, 70%, 50%)",
    kebab: 126,
    kebabColor: "hsl(269, 70%, 50%)",
    fries: 40,
    friesColor: "hsl(141, 70%, 50%)",
    donut: 0,
    donutColor: "hsl(189, 70%, 50%)",
  },
];
const BarChart = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy='country'
      margin={{ top: 10, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      layout='horizontal'
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role='application'
      ariaLabel='Nivo bar chart demo'
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
