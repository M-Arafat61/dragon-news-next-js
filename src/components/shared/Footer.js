import { Box, Button, Container, IconButton, Typography } from "@mui/material";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      Route: "Home",
      path: "/",
    },
    {
      Route: "Pages",
      path: "/pages",
    },

    {
      Route: "Category",
      path: "/category",
    },
    {
      Route: "News",
      path: "/news",
    },
    {
      Route: "Post",
      path: "/post",
    },
    {
      Route: "Contact",
      path: "/contact",
    },
  ];
  return (
    <Container className='bg-black mt-10'>
      <Box className=' py-10 space-y-5'>
        <Box className='text-center ' sx={{ "& svg": { color: "white" } }}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box className='w-full text-center'>
          {navItems.map(item => (
            <Link key={item.Route} href={item.path}>
              <Button className='text-center text-white '>{item.Route}</Button>
            </Link>
          ))}
        </Box>
        <Typography color={"white"} textAlign={"center"}>
          @2023 Dragon News. Designed by Programming Hero
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
