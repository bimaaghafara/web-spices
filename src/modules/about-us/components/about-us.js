import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SmallBox = ({
    sx, children
}) => (
    <Box
        sx={{
            width: '50%',
            pb: '50%',
            position: 'absolute',
            borderRadius: '16px',
            ...sx
        }}
    >
        {children}
    </Box>
);

const AboutUs = () => (
    <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ pt: '54px' }}>
            <Grid item xs={12} sm={7}>
                <Box>
                    <Typography variant="h3" sx={{ fontSize: {xs: '2rem', md: '3rem' }}} >About Us</Typography>
                    <Box sx={{
                        '& p': {
                            textAlign: 'justify',
                            xs: {
                                fontSize: '12px',
                                lineHeight: 2
                            },
                            md: {
                                fontSize: '18px',
                            }
                        },
                        pr: { xs: 0, md : '20%' }
                    }}>
                        <p>
                            We are Ghafara Universe. The profesional capable Supplier & Exporter for the Indonesian spices.
                        </p>
                        <p>
                            We process best spices plantations, spread across several islands in Indonesia. We only supply the best quality of spices from Indonesia. <span style={{ textDecoration: 'line-through'}}>We supply Cinnamon, Cloves, Black pepper, White pepper, Andaliman pepper, Coriander, Vanilla, Nutmeg, Cardamom, Candlenut, Star anise.</span> Please contact us for more info so we can discuss the further info.
                        </p>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box
                    sx={{
                        width: ['70%', '70%', '100%'],
                        pb: ['70%', '70%', '100%'],
                        position: 'relative',
                        m: '18px auto'
                    }}
                >
                    <SmallBox
                        sx={{ background: '#f009', top: '50%' }}
                    />
                    <SmallBox
                        sx={{ background: '#0f09', left: '50%' }}
                    />
                    <SmallBox
                        sx={{ background: '#ff0c', top: '25%', left: '25%' }}
                    />
                </Box>
            </Grid>
        </Grid>
    </Container>
);

export default AboutUs;