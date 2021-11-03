import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ color: '#fff'}}>
            <Box sx={{
                background: '#373737',
                p: '36px 0',
            }}>
                <Container maxWidth={'lg'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant="h3"
                                sx={{ fontSize: ['16px', '16px', '24px'], pb: '12px'}}
                            >
                                Ghafara Universe
                            </Typography>
                            <Box sx={{
                                    fontSize: ['12px', '12px', '16px'],
                                    lineHeight: 2,
                                    textAlign: 'justify'
                            }}>
                                We also continue to update the information about the company through social media, for the latest information you can follow our social media.
                            </Box>
                            <Box sx={{
                                mt: '4px',
                                ml: '-8px',
                                '& svg': { color: '#fff' }
                            }}>
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
                        <Grid item xs={12} sm={7}>
                            <Box sx={{ pl: [0, '10%', '15%'], pt: ['8px', 0, 0]}}>
                                <Typography
                                    variant="h3"
                                    sx={{ fontSize: ['16px', '16px', '24px'], pb: '12px'}}
                                >
                                    Contact Us
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{
                background: '#282828',
                p: ['12px 0', '12px 0', '16px 0'],
                fontSize: ['8px', '8px', '12px']
            }}>
                <Container maxWidth={'lg'}>
                    © 2021 Ghafara Universe. All rights reserved
                </Container>
            </Box>
        </Box>
    )
}

export default Footer;
