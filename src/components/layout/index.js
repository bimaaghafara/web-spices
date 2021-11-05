import Nav from 'src/components/nav';
import Footer from 'src/components/footer';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Layout = ({
    children, maxWidth, showContact
}) => {
    const handleWaCLick = () => {
        const waLink = 'https://api.whatsapp.com/send?phone=628996469000&text=Hi%20Ghafara%20Universe!%20I%20want%20to%20know%20about%20.%20.%20.';
        window.open(waLink, '_blank').focus();
    }

    return (
        <>
            <Nav />
            <Container maxWidth={maxWidth} sx={{ mt: {xs: '56px', md: '64px'} }}>
                {children}
            </Container>
            <Fab onClick={handleWaCLick} size="large" aria-label="WA" sx={{
                position: 'fixed',
                right: ['20px', '40px'],
                bottom: ['20px', '30px'],
                color: '#fff',
                background: '#25d366',
                '& :hover': {
                    color: '#25d366'
                }
            }}>
                <WhatsAppIcon />
            </Fab>
            <Footer showContact={showContact}/>
        </>
    )
}

Layout.prototype = {
    children: PropTypes.element,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'false'])
}

Layout.defaultProps = {
    maxWidth: 'lg'
}

export default Layout;