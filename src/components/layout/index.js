import Nav from 'src/components/nav';
import Footer from 'src/components/footer';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Layout = ({
    children, maxWidth
}) => {
    return (
        <>
            <Nav />
            <Container maxWidth={maxWidth} sx={{ mt: {xs: '56px', md: '64px'} }}>
                {children}
            </Container>
            <Fab size="large" aria-label="WA" sx={{
                position: 'fixed',
                right: ['20px', '40px'],
                bottom: ['20px', '30px'],
                color: '#fff',
                background: '#25d366'
            }}>
                <WhatsAppIcon />
            </Fab>
            <Footer />
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