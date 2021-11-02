/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Products = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "200px",  
        responsive: [
            {
              breakpoint: 900,
              settings: {
                centerPadding: "100px",  
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerMode: false,
              }
            }
        ],
    };
    return (
        <Container maxWidth="lg" sx={{ pt: '48px' }}>
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
                        <img src="/img/jahe-merah.png" alt="" style={{ maxWidth: '100%' }} />
                        <p>
                        Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.
                        </p>
                    </Box>
                </div>
            </Slider>
        </Container>
    );
}

export default Products;