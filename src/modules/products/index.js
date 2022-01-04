/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "src/components/layout";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// import Products from "src/modules/home/components/products";

const ProductsPage = () => {
    const renderProduct = ({
        direction = 'row',
        title,
        img,
        desc1,
        desc2
    } = {}) => (
        <Paper sx={{ p: ['12px', '16px'], mt: ['24px', '32px'] }}>
            <Grid container spacing={4} direction={direction}>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <img src={img} alt="" style={{ maxWidth: '100%' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{ fontSize: ['24px', '24px', '32px'] }}
                        >
                            {title}
                        </Typography>
                        <p>{desc1}</p>
                        <p>{desc2}</p>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );

    return (
        <Layout>
            <Container maxWidth="lg" sx={{ pt: '48px', mb: ['60px', '80px'], minHeight: '100vh' }}>
                <Typography variant="h3" sx={{
                    marginBottom: '24px',
                    fontSize: {xs: '2rem', md: '3rem' }
                }}>
                    Products
                </Typography>
                <p>ARABICA JAVA PREANGER
The history of West Java Arabica which often called JAVA PREANGER and why the term “a Cup of Java” became synonym with “a Cup of Coffee” dated back to 17th century when West Java was still part of the Dutch colony, was chosen as the first coffee cultivation place outside Arabia and Ethiopia because of its mountaineous lands’ fertile volcanic soil with altitudes ranging from 1,200 to 1,800 metres above sea level. In the 1700s, coffee from West Java was first exported and was very well received. JAVA PREANGER was reputable for being the premium component in the world’s oldest and most well-known coffee blend, the MOCHA JAVA.</p>

<p>The province of West Java with a population of over 45 million people is called tanah Sunda or tanah Priangan (translated to land of Sunda or land of Preanger), hence the name of coffee from West Java is called JAVA PREANGER.</p>

<p>JAVA PREANGER coffee has a superior distinctive taste because of the use of a variety of coffee beans which are able to adapt to the local environment as well as the region’s long history of coffee cultivation. Even now, the cherries and beans are brought down to processing facilities on scooters through steep roads. The high elevations, rainfall and cooler temperatures give the JAVA PREANGER a much sweeter, herbally, and flowery taste with low to medium acidity, medium body with chocolaty caramel after taste and nutty caramel aroma.</p>
                {renderProduct({
                    direction: "row-reverse",
                    title: "arabica-fullwash",
                    img: "/img/arabica-fullwash.jpeg",
                    desc1: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                    desc2: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                })}
                {renderProduct({
                    title: "arabica-semiwash",
                    img: "/img/arabica-semiwash.jpeg",
                    desc1: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                    desc2: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                })}
                {renderProduct({
                    direction: "row-reverse",
                    title: "arabica-natural",
                    img: "/img/arabica-natural.jpeg",
                    desc1: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                    desc2: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                })}
                {renderProduct({
                    title: "arabica-honey",
                    img: "/img/arabica-honey.jpeg",
                    desc1: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                    desc2: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                })}
                {renderProduct({
                    direction: "row-reverse",
                    title: "arabica-wine",
                    img: "/img/arabica-wine.jpeg",
                    desc1: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                    desc2: "Alpinia purpurata, red ginger, also called ostrich plume and pink cone ginger, are native Indonesian plants with showy flowers on long brightly colored red bracts. They look like the bloom, but the true flower is the small white flower on top. It has cultivars called Jungle King and Jungle Queen.",
                })}
            </Container>
        </Layout>
    );
};

export default ProductsPage;