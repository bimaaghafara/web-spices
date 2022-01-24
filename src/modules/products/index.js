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
    const Image = (src) => (
        <Box sx={{
            width: '100%',
            paddingBottom: '75%',
            backgroundImage: `url("${src}")`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
        }} />
    )

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
                        {Image(img)}
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
                        <Box sx={{ lineHeight: 1.5, textAlign: 'justify' }}>
                            <p>{desc1}</p>
                            <p>{desc2}</p>
                        </Box>
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
                <Box sx={{ lineHeight: 1.5, textAlign: 'justify' }}>
                    <p>
                        The history of West Java Arabica which often called Java Preanger dated back to 17th century when West Java was still part of the Dutch colony, was chosen as the first coffee cultivation place outside Arabia and Ethiopia because of its mountaineous lands fertile volcanic soil with altitudes ranging from 1,200 to 1,800 metres above sea level. In the 1700s, coffee from West Java was first exported and was very well received. Java Preanger was reputable for being the premium component in the worlds oldest and most well-known coffee blend.
                    </p>

                    <p>
                        The province of West Java with a population of over 45 million people is called tanah Sunda or tanah Priangan (translated to land of Sunda or land of Preanger), hence the name of coffee from West Java is called Java Preanger.
                    </p>

                    <p>
                        Java Preanger coffee has a superior distinctive taste because of the use of a variety of coffee beans which are able to adapt to the local environment as well as the regions long history of coffee cultivation. Even now, the cherries and beans are brought down to processing facilities on scooters through steep roads. The high elevations, rainfall and cooler temperatures give the Java Preanger a much sweeter, herbally, and flowery taste with low to medium acidity, medium body with chocolaty caramel after taste and nutty caramel aroma.
                    </p>
                </Box>
                {renderProduct({
                    direction: "row-reverse",
                    title: "Arabica Fullwashed",
                    img: "/img/arabica-fullwash.jpeg",
                    desc1: `Starting with put the cherries in the water to separate them. The ripe ones will sink, whereas the unripe will float. The next stage is to remove the pulp, or the skin of the ripe cherries. A machine called a depulper can be used to do this. Next, it's time to soak the coffee beans in the water tank, ussually it will takes 12 hours with change the water after 6 hours. The final stage is the drying one, the coffee will be placed under the sun for 3 - 4 weeks until dried.`,
                })}
                {renderProduct({
                    title: "Arabica Semiwashed",
                    img: "/img/arabica-semiwash.jpeg",
                    desc1: `Like fullwash process, the cherries will be put in the water to separate them. The ripe ones will sink, whereas the unripe will float. The next stage is to remove the pulp with depulper machine. Next, the cherries will be put in the water for 2 hours to clean them. Then drying process, the coffee will be placed under the sun for 3 days. Then the parchment is removed with hull machine. The final stage is the second drying, the coffee will be placed under the sun until the coffee turns dark green at 10% - 12% moisture content.`
                })}
                {renderProduct({
                    direction: "row-reverse",
                    title: "Arabica Natural",
                    img: "/img/arabica-natural.jpeg",
                    desc1: `In this process, the coffee beans is really done without water (processed naturally). After harvesting the cherries, the cherries is immediately dried (along with the skin layer) under the sun. The cherries are then turned over periodically to dry evenly. With this process, the cherries will naturally ferment and the outer skin will peel off by itself. This process is widely applied by farmers in Indonesia because of its simple method. However, although it is fairly simple, this process is also quite risky because it relies on the weather. If there is no rain, this drying process can take up to 4 - 6 weeks. The taste produced from naturally processed coffee beans is usually has a strong fruity taste.`,
                })}
                {renderProduct({
                    title: "Arabica Honey Speciality",
                    img: "/img/arabica-honey.jpeg",
                    desc1: `No honey goes into the coffee through this process. In this context, honey refers to the amount of mucilage that is left on the seed. After harvesting, the skin and pulp will be removed from the coffee cherries. This cherry seed has a considerable amount of mucilage left on it. Then drying process, the coffee will be placed under the sun. The more fruit is left on the bean the darker the color as well. Honey processed coffees have good clarity, medium-high acidity, heavier body and sweetness.`,
                })}
                {renderProduct({
                    direction: "row-reverse",
                    title: "Arabica Wine Speciality",
                    img: "/img/arabica-wine.jpeg",
                    desc1: `Like Natural process, wine process is also done without water. Wine process is a processing method in which coffee cherries are left to over-ripen, dry and then ferment under sunlight. While natural process takes 2 weeks, wine process takes more time about 4 - 9 weeks. This process is also quite risky because it relies on the weather. The drying process is longer because farmers believe that the longer the cherries are dried, the more the cherries will stick to the coffee beans. And that's what will bring out the taste and wine scent.`,
                })}
            </Container>
        </Layout>
    );
};

export default ProductsPage;