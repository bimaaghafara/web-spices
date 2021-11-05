import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Slider from "react-slick";
import Box from '@mui/material/Box';

const Teams = () => {
    const sliderSettings = {
        infinite: false,
        autoplay: false,
        swipeToSlide: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                autoplay: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
        ],
    };

    const CardPerson = ({
        name="Full Name",
        img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        desc="Lorem Ipsum sir dolor amet. Aioqwu, aojnfwef ujkas rebnu tuio asgo. Adso upoy yirka bisme.",
        fb,
        linkedin,
        ig,
    }) => (
        <Box sx={{ p: ['2px 4px', '2px 8px'] }}>
            <Card sx={{ m: 'auto' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="240"
                    image={img}
                    sx={{ height: ['140px', '170px', '240px' ]}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    textAlign: 'center',
                    display: 'block',
                    '& button': { display: 'inline' }
                }}>
                    <IconButton size="small"><LinkedInIcon /></IconButton>
                    <IconButton size="small"><InstagramIcon /></IconButton>
                    <IconButton size="small"><FacebookIcon /></IconButton>
                </CardActions>
            </Card>
        </Box>
    );

    return (
        <Container maxWidth="lg" sx={{ pt: '48px', mb: '60px' }}>
            <Typography variant="h3" sx={{
                marginBottom: '24px',
                fontSize: {xs: '2rem', md: '3rem', textAlign: 'center' }
            }}>
                Our Teams
            </Typography>
            <Slider {...sliderSettings}>
                <CardPerson />
                <CardPerson />
                <CardPerson />
            </Slider>
        </Container>
    );
}

export default Teams;
