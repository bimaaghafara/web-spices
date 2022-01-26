/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
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
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'contact' },
]

const Logo = ({ sx }) => (
    <Link href="/" >
        <Box
            sx={{
                cursor: 'pointer',
                width: '96px',
                height: '48px',
                background: "url('/img/logo.png') center center",
                backgroundSize: "cover",
                ...sx
            }}
        />
    </Link>
);

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
            <Logo sx={{
                ml: {
                    xs: 'calc(50vw - 100px)',
                    md: 0
                }
            }}/>
            <Drawer
                anchor={'left'}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{ width: '60vw', maxWidth: 320, minWidth: 250, p: '12px' }}>
                    <Logo />
                    {links.map((link, i) => (
                        <div key={i}>
                            <Link href={link.href}>
                                <Button color="inherit">{link.label}</Button>
                            </Link>
                        </div>
                    ))}
                    <Box sx={{
                        p: '8px',
                        marginTop: '22px',
                        fontSize: '10px',
                        '& >div': {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px',
                        },
                        '& svg': {
                            fontSize: '14px',
                            margin: '0 4px -2px 0',
                        }
                    }}>
                        <div><WhatsAppIcon /> +62-899-6469-000</div>
                        <div><EmailIcon /> ghafara.universe@gmail.com</div>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}

const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                color="transparent"
                sx={{ background: '#fff', p: {xs: '4px 0', md: '8px 0'} }}
            >
                <Container maxWidth="lg">
                    <Toolbar variant="dense" sx={{ p: '0 !important' }}>
                        <MobileDrawer />
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block'
                                },
                                width: '90%'
                            }}
                        >
                            {links.map((link, i) => (
                                <Link href={link.href} key={i}>
                                    <Button sx={{ mt: '6px' }} color="inherit">{link.label}</Button>
                                </Link>
                            ))}
                            <Box sx={{
                                float: 'right',
                                p: '4px',
                                fontSize: '14px',
                                '& >div': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '2px',
                                },
                                '& svg': {
                                    fontSize: '16px',
                                    margin: '0 4px -2px 0',
                                }
                            }}>
                                <div><WhatsAppIcon /> +62-899-6469-000</div>
                                <div><EmailIcon /> ghafara.universe@gmail.com</div>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Nav;
