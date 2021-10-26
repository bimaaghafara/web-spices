import Nav from 'src/components/nav';

const Layout = ({
    children
}) => {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default Layout;