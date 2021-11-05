import Layout from "src/components/layout";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => {
    return (
        <Layout showContact={false}>
            <Container maxWidth="lg" sx={{ pt: '48px', mb: '60px', minHeight: '100vh' }}>
                <Typography variant="h3" sx={{
                    marginBottom: '24px',
                    fontSize: {xs: '2rem', md: '3rem' }
                }}>
                    Contact Us
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            lineHeight: 2,
                            marginBottom: '12px',
                            '& svg': {
                                transform: 'translateY(6px)',
                                marginRight: '2px'
                            }
                        }}>
                            <div><WhatsAppIcon /> +62-899-1234-5678</div>
                            <div><EmailIcon /> ghafara.universe@gmail.com</div>
                            <div><RoomIcon /> Jalan xxxx, Bandung, Jawa Barat, Indonesia</div>
                        </Box>
                        <Box sx={{ mt: '4px', ml: '-8px' }}>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ lineHeight: 2 }}>
                            Ghafara Universe are 24/7 available for support to their valuable customers. We know you are interested and want to know more about our products. Feel free to contact us at any time for any queries.
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default ContactPage;