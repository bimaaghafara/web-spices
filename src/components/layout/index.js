import Nav from 'src/components/nav';
import Footer from 'src/components/footer';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
const Layout = ({
    children, maxWidth
}) => {
    return (
        <>
            <Nav />
            <Container maxWidth={maxWidth} sx={{ mt: {xs: '56px', md: '64px'} }}>
                {children}
            </Container>
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