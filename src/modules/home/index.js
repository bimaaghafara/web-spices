/* eslint-disable @next/next/no-img-element */
import Layout from "src/components/layout";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const HomeBanner = () => (
    <Box
        sx={{
            margin: '0 -24px',
            background: "url('/img/home-banner.jpg') center center",
            backgroundSize: "cover",
            pb: {
                xs: '100%',
                sm: '70%',
                md: '40%'
            },
            '& img': {
                width: '100%'
            }
        }}
    />
)

const HomePage = () => {
    return (
        <Layout maxWidth="false">
            <HomeBanner />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        Left
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        Right
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default HomePage;