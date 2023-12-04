import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import news1 from "@/assets/news1.png";
import Image from "next/image";

const NationalNews = () => {
  return (
    <>
      <Card sx={{ boxShadow: "0" }}>
        <CardActionArea>
          <Image
            src={news1}
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
      <hr className='mt-16 border-gray-300' />
      <Grid container spacing={2} className='mt-10'>
        <Grid item xs={6} className='mt-5'>
          <Card sx={{ boxShadow: "0" }}>
            <CardActionArea>
              <Image
                src={news1}
                alt='national news picture'
                width={"100%"}
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
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography variant='subtitle2' className=''>
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item className='mt-5' xs={6}>
          <Card sx={{ boxShadow: "0" }}>
            <CardActionArea>
              <Image
                src={news1}
                alt='national news picture'
                width={"100%"}
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
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography variant='subtitle2' className=''>
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} className='mt-5'>
          <Card sx={{ boxShadow: "0" }}>
            <CardActionArea>
              <Image
                src={news1}
                alt='national news picture'
                width={"100%"}
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
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography variant='subtitle2' className=''>
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item className='mt-5' xs={6}>
          <Card sx={{ boxShadow: "0" }}>
            <CardActionArea>
              <Image
                src={news1}
                alt='national news picture'
                width={"100%"}
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
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography variant='subtitle2' className=''>
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default NationalNews;
