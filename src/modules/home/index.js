/* eslint-disable @next/next/no-img-element */

// components
import Layout from "src/components/layout";

// homepage sections
import HomeBanner from "./components/home-banner";
import AboutUs from "src/modules/about-us/components/about-us";
import KeyFeatures from "./components/key-features";
import Products from "./components/products";

const HomePage = () => {
    return (
        <Layout maxWidth="false">
            <HomeBanner />
            <AboutUs />
            <KeyFeatures />
            <Products />
        </Layout>
    );
};

export default HomePage;