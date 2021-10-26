import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link'

const links = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'contact' },
]

const MobileDrawer = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <IconButton
                className="testss"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(true)}
                sx={{
                    mr: 2,
                    display: {
                        md: 'none'
                    }
                }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={'left'}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{ width: '75vw', maxWidth: 320}}>
                    {links.map((link, i) => (
                        <div key={i}>
                            <Link href={link.href}>
                                <Button color="inherit">{link.label}</Button>
                            </Link>
                        </div>
                    ))}
                </Box>
            </Drawer>
        </>
    );
}

const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar variant="dense" sx={{ p: '0 !important' }}>
                        <MobileDrawer />
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block'
                                }
                            }}
                        >
                            {links.map((link, i) => (
                                <Link href={link.href} key={i}>
                                    <Button color="inherit">{link.label}</Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Nav;
