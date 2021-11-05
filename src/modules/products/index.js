/* eslint-disable @next/next/no-img-element */
import Layout from "src/components/layout";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Products from "src/modules/home/components/products";

const ProductsPage = () => {
    return (
        <Layout>
            <Container maxWidth="lg" sx={{ pt: '48px', mb: '60px', minHeight: '100vh' }}>
                <Typography variant="h3" sx={{
                    marginBottom: '24px',
                    fontSize: {xs: '2rem', md: '3rem' }
                }}>
                    Products
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <img src="/img/jahe-merah.png" alt="" style={{ maxWidth: '100%' }} />
                            <p>
                            Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <img src="/img/jahe-merah.png" alt="" style={{ maxWidth: '100%' }} />
                            <p>
                            Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <img src="/img/jahe-merah.png" alt="" style={{ maxWidth: '100%' }} />
                            <p>
                            Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <img src="/img/jahe-merah.png" alt="" style={{ maxWidth: '100%' }} />
                            <p>
                            Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.
                            </p>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default ProductsPage;