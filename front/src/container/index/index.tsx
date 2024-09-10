import Title from "../../component/title";
import Grid from "../../component/grid";
import Button from "../../component/button";
import Page from "../../component/page";

export default function Container() {
  return (
    <Page>
      <Grid>
        <Title title="Hello!" description="Welcome to bank app" />
        <Button>Sing in</Button>
        <Button>Sing up</Button>
      </Grid>
    </Page>
  );
}
