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

    const Image = (src) => (
        <Box sx={{
            width: '100%',
            paddingBottom: '75%',
            backgroundImage: `url("${src}")`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
        }} />
    )

    return (
        <Container maxWidth="lg" sx={{ pt: '48px'}}>
            <Typography variant="h3" sx={{ mb: '24px', fontSize: {xs: '2rem', md: '3rem', textAlign: 'center' }}}>
                Our Products
            </Typography>
            <Slider {...settings}>
                <div>
                    <Box sx={{ p: ['2px', '16px']}}>
                        {Image("/img/arabica-fullwash.jpeg")}
                        <p style={{ lineHeight: 1.5, textAlign: 'justify' }}>
                            <b>Arabica Fullwash</b> 
                            <div>
                                Starting with put the cherries in the water to separate them. The ripe ones will sink, whereas the unripe will float. The next stage is to remove the pulp, or the skin of the ripe cherries. A machine called ...
                            </div>
                        </p>
                    </Box>
                </div>
                <div>
                    <Box sx={{ p: ['2px', '16px']}}>
                        {Image("/img/arabica-semiwash.jpeg")}
                        <p style={{ lineHeight: 1.5, textAlign: 'justify' }}>
                            <b>Arabica Semiwash</b> 
                            <div>
                                Like fullwash process, the cherries will be put in the water to separate them. The ripe ones will sink, whereas the unripe will float. The next stage is to remove the pulp with depulper machine ...
                            </div>
                        </p>
                    </Box>
                </div>
                <div>
                    <Box sx={{ p: ['2px', '16px']}}>
                        {Image("/img/arabica-natural.jpeg")}
                        <p style={{ lineHeight: 1.5, textAlign: 'justify' }}>
                            <b>Arabica Natural</b> 
                            <div>
                                In this process, the coffee beans is really done without water (processed naturally). After harvesting the cherries, the cherries is immediately dried (along with ...
                            </div>
                        </p>
                    </Box>
                </div>
                <div>
                    <Box sx={{ p: ['2px', '16px']}}>
                        {Image("/img/arabica-honey.jpeg")}
                        <p style={{ lineHeight: 1.5, textAlign: 'justify' }}>
                            <b>Arabica Honey</b> 
                            <div>
                                No honey goes into the coffee through this process. In this context, honey refers to the amount of mucilage that is left on the seed. After harvesting, the skin and pulp will be removed from ...
                            </div>
                        </p>
                    </Box>
                </div>
                <div>
                    <Box sx={{ p: ['2px', '16px']}}>
                        {Image("/img/arabica-wine.jpeg")}
                        <p style={{ lineHeight: 1.5, textAlign: 'justify' }}>
                            <b>Arabica Wine</b> 
                            <div>
                                Like Natural process, wine process is also done without water. Wine process is a processing method in which coffee cherries are left to over-ripen, dry and then ferment under ...
                            </div>
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