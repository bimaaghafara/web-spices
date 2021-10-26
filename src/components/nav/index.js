import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton className="testss" edge="start" color="inherit" aria-label="menu"
                        sx={{
                            mr: 2,
                            display: {
                                md: 'none'
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}
                    >
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Products</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Nav;
