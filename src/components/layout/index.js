import Nav from 'src/components/nav';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
const Layout = ({
    children, maxWidth
}) => {
    return (
        <>
            <Nav />
            <Container maxWidth={maxWidth} sx={{ mt: '48px' }}>
                {children}
            </Container>
        </>
    )
}

Layout.prototype = {
    children: PropTypes.element,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

Layout.defaultProps = {
    maxWidth: 'lg'
}

export default Layout;