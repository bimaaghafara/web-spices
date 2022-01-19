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
                    desc1: `Like fullwash proccess, the cherries will be put in the water to separate them. The ripe ones will sink, whereas the unripe will float. The next stage is to remove the pulp with depulper machine. Next, the cherries will be put in the water for 2 hours to clean them. Then drying proccess, the coffee will be placed under the sun for 3 days. Then the parchment is removed with hull machine. The final stage is the second drying, the coffee will be placed under the sun until the coffee turns dark green at 10% – 12% moisture content.`
                })}
                {renderProduct({
                    direction: "row-reverse",
                    title: "Arabica Natural",
                    img: "/img/arabica-natural.jpeg",
                    desc1: "Proses pasca panen biji kopi yang benar-benar dilakukan tanpa menggunakan mesin dan air (diproses secara alami/natural). Seusai ceri kopi yang telah lolos sortir dipetik, buah tersebut langsung dijemur di atas papan pengering bersama dengan lapisan kulitnya di bawah sinar matahari. Buah ceri tersebut kemudian dibolak-balik secara berkala agar kering merata. Dengan proses ini maka buah ceri akan terfermentasi secara natural dan kulit luarnya pun akan terkelupas dengan sendirinya. Proses ini banyak diterapkan oleh para petani di Indonesia karena caranya yang sederhana. Namun meski terbilang simple, proses ini juga cukup rawan risiko karena sangat mengandalkan cuaca. Jika tidak ada hujan, proses pengeringan ini dapat memakan waktu hingga 4-6 minggu. Rasa yang dihasilkan dari biji kopi yang diproses secara natural biasanya sangatlah fruity atau memiliki cita rasa buah yang kuat seperti blueberry dan strawberry, dengan full body serta low acidity. ",
                })}
                {renderProduct({
                    title: "Arabica Honey Speciality",
                    img: "/img/arabica-honey.jpeg",
                    desc1: "Banyak yang mengira, jika honey process merupakan metode pengolahan biji kopi dengan menggunakan madu. Padahal tidak sama sekali. Jadi seperti ini penjelasannya. Ceri kopi yang telah lolos sortir kemudian dikupas namun tetap menyisakan lapisan lendirnya (mucilage) kemudian baru dikeringkan di bawah sinar matahari. Lapisan lendir tersebut yang menjadi kunci utama honey process karena menyimpan kandungan gula serta acidity sehingga rasa yang dihasilkan adalah manis yang tinggi dengan keasaman yang seimbang. Lapisan lendir yang lengket menyerupai madu tersebut membuat proses ini dinamakan honey process. Perbedaan jumlah lendir yang masih menempel membuat biji kopi yang melalui proses ini dan telah dikeringkan dibagi menjadi tiga warna yakni Red (50% lapisan lendir), Yellow (25% lapisan lendir), dan Black Honey (100% lapisan lendir).",
                })}
                {renderProduct({
                    direction: "row-reverse",
                    title: "Arabica Wine Speciality",
                    img: "/img/arabica-wine.jpeg",
                    desc1: "Setelah pemilihan ceri merah kopi, selanjutnya ceri kopi ini akan mengalami dry process yang hampir mirip dengan natural process yaitu penjemuran langsung hingga ceri kopi tersebut mengering secara alami. Jika natural process kira-kira memakan waktu penjemuran selama dua minggu, maka wine coffee memakan waktu 30 – 60 hari (tergantung cuaca juga). Proses penjemurannya memang sengaja lebih panjang karena petani percaya bahwa semakin lama dijemur, maka ceri akan semakin melekat dengan biji kopi. Dan itulah yang kelak mengeluarkan rasa dan aroma wine.",
                })}
            </Container>
        </Layout>
    );
};

export default ProductsPage;