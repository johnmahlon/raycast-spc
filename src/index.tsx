import { ActionPanel, Action, Grid, Form, Detail, List } from "@raycast/api";

type Outlook = {
  title: string;
  urlTail: string
  key: string
}

let baseUrl: string = "https://www.spc.noaa.gov/public/cwa/images/";

let outlooks: Array<Outlook> = [
  {
    title: "Day 1",
    urlTail: "_swody1.png",
    key: "day1"
  },
  {
    title: "Day 2",
    urlTail: "_swody2.png",
    key: "day2"
  },
  {
    title: "Day 3",
    urlTail: "_swody3.png",
    key: "day3"
  }
];

export default function Command() {
  return (
    <SpcOutlooks radar="OHX"/>
  );
}

// TODO, make dynamic
function SelectRadar() {
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
          let openURL = `https://www.spc.noaa.gov/products/outlook/${outlook.key}otlk.html`;
          return <Grid.Item
            key={outlook.key}
            title={outlook.title}
            content={{
              source: baseUrl + props.radar + outlook.urlTail
            }}
            actions={
              <ActionPanel title="Open SPC Outlooks">
                <Action.OpenInBrowser url={ openURL } />
              </ActionPanel>

            }
          />
        })
      }
    </Grid>
  );
}



