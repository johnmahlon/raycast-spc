import { ActionPanel, Action, Grid, Form, Detail } from "@raycast/api";

type Outlook = {
  title: string;
  urlTail: string
}

let baseUrl: string = "https://www.spc.noaa.gov/public/cwa/images/";

let outlooks: Array<Outlook> = [
  {
    title: "Day 1",
    urlTail: "_swody1.png"
  },
  {
    title: "Day 2",
    urlTail: "_swody2.png"
  },
  {
    title: "Day 3",
    urlTail: "_swody3.png"
  }
];

export default function Command() {
  return (
    <SpcOutlooks radar="OHX"/>
  );
}

// TODO, make dynamic
function selectRadar() {
  return (
    <Form>
      <Form.TextField
        id="radarField"
        title="Enter Radar"
        placeholder="Enter Radar i.e. OHX"
      />
    </Form>
  );
}

export function SpcOutlooks(props: { radar: string }) {
  return (
    <Grid
    navigationTitle="SPC Outlooks"
    itemSize={Grid.ItemSize.Large}
    >
      {
        outlooks.map(outlook => {
          return <Grid.Item
            key={outlook.title}
            title={outlook.title}
            content={{
              source: baseUrl + props.radar + outlook.urlTail
            }}
            actions
          />
        })
      }
    </Grid>
  );
}



