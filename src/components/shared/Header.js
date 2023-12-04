import headerImage from "@/assets/header.png";
import { getCurrentDate } from "@/utils";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Container className='my-8'>
      <Image
        src={headerImage}
        width={500}
        height={300}
        className='mx-auto'
        alt='headerImage'
      />
      <Typography textAlign={"center"} className='my-5 text-xl'>
        Journalism Without Fear or Favour
      </Typography>
      <Typography textAlign={"center"}>{currentDate}</Typography>
    </Container>
  );
};

export default Header;
