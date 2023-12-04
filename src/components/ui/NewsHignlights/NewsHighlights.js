import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import bitcoin from "@/assets/bitcoin.png";
const NewsHighlights = () => {
  return (
    <Card sx={{ boxShadow: "0" }}>
      <CardActionArea>
        <Image
          src={bitcoin}
          alt='national news picture'
          width={780}
          height={400}
          className='object-cover'
        />
        <CardContent className='space-y-3'>
          <Typography
            variant='subtitle1'
            className='text-white bg-red-500 px-2 m-auto inline-block rounded'
          >
            Technology
          </Typography>
          <Typography variant='h5' className='font-bold'>
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography variant='subtitle2' className=''>
            By Awlad Hossain - Mar 18 2023
          </Typography>
          <Typography>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsHighlights;
