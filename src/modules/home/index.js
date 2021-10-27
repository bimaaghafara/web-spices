/* eslint-disable @next/next/no-img-element */
import Layout from "src/components/layout";
import Box from '@mui/material/Box';

const HomeBanner = () => (
    <Box sx={{
        margin: '0 -24px',
        '& img': {
            width: '100%'
        }
    }}>
        <img src="/img/home-banner.jpg" alt="home-banner" />
        <div style={{ height: 990 }}>a</div>
    </Box>
)

const HomePage = () => {
    return (
        <Layout>
            <HomeBanner />
        </Layout>
    );
};

export default HomePage;