"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Header from "./Header";

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

function Navbar() {
  return (
    <>
      <Header />

      <AppBar position='static' sx={{ backgroundColor: "black" }}>
        <Container>
          <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt='logo' />

            <Box className='w-full text-center'>
              {navItems.map(item => (
                <Link key={item.Route} href={item.path}>
                  <Button sx={{ color: "white" }} className='text-center '>
                    {item.Route}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack
                direction='row'
                spacing={1}
                sx={{ "& svg": { color: "white" } }}
              >
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
