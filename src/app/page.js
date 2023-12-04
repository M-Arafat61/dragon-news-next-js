import NationalNews from "@/components/ui/NationalNews/NationalNews";
import NewsHighlights from "@/components/ui/NewsHignlights/NewsHighlights";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={8} className='mt-5'>
        <NationalNews />
      </Grid>
      <Grid item className='mt-5' xs={4}>
        <NewsHighlights />
      </Grid>
    </Grid>
  );
};

export default HomePage;
