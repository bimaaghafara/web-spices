/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Button from '@mui/material/Button';

const Products = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        swipeToSlide: true,
        speed: 1000,
        autoplaySpeed: 3000,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "125px",  
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerMode: false,
                slidesToShow: 1,
              }
            }
        ],
    };
    return (
        <Container maxWidth="lg" sx={{ pt: '48px'}}>
            <Typography variant="h3" sx={{ mb: '24px', fontSize: {xs: '2rem', md: '3rem', textAlign: 'center' }}}>
                Our Products
            </Typography>
            <Slider {...settings}>
                <div>
                    <Box sx={{ p: ['2px', '16px']}}>
                        <img src="/img/jahe-merah.png" alt="" style={{ maxWidth: '100%' }} />
                        <p>
                        Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.
                        </p>
                    </Box>
                </div>
                <div>
                    <Box sx={{ p: ['2px', '16px']}}>
                        <img src="/img/jahe-gajah.jpeg" alt="" style={{ maxWidth: '100%' }} />
                        <p>
                        Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.
                        </p>
                    </Box>
                </div>
                <div>
                    <Box sx={{ p: ['2px', '16px']}}>
                        <img src="/img/jahe-merah.jpeg" alt="" style={{ maxWidth: '100%' }} />
                        <p>
                        Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.
                        </p>
                    </Box>
                </div>
            </Slider>
            <Box sx={{ mb: '16px', textAlign: 'center' }}>
                <Link href="/products" passHref>
                    <Button color="inherit" sx={{
                        p: '8px 24px',
                        textDecoration: 'underline !important',
                        textUnderlinePosition: 'under !important',
                    }}>
                        See more details . . .
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}

export default Products;