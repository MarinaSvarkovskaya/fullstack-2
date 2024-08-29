import Title from "../../component/title";
import Grid from "../../component/grid";
import Button from "../../component/button";

export default function Container() {
  return (
    <Grid>
      <Title>Hello!</Title>
      <Button>Sing in</Button>
      <Button>Sing up</Button>
    </Grid>
  );
}
