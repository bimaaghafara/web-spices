import Box from '@mui/material/Box';

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

export default HomeBanner;