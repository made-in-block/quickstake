import React from "react";
import { Grid, List, ListItem, Typography, Link, Divider } from "@mui/material";
import { Twitter, GitHub, YouTube } from '@mui/icons-material';
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
    return (
        <Grid container sx={{ mt: 4 }}>
            <Grid item xs={12} md={3} alignSelf="center">
                <StaticImage src="../images/mib-logo-name.png" alt="MIB Logo" />
            </Grid>
            <Grid item xs={0} md={3} />
            <Grid item xs={4} md={2}>
                <Typography variant="h6">
                    <strong>Validators</strong>
                </Typography>
                <List dense>
                    <ListItem disablePadding>
                        <Link color="inherit" sx={{ lineHeight: 1.5 }} underline="hover" variant="body1" href="https://www.mintscan.io/juno/validators/junovaloper1juczud9nep06t0khghvm643hf9usw45r23gsmr">Juno</Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link color="inherit" sx={{ lineHeight: 1.5 }} underline="hover" variant="body1" href="https://www.mintscan.io/cosmos/validators/cosmosvaloper1usvshtypjw57edkwxq3tagme665398f0hf4wuc">Cosmos Hub</Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link color="inherit" sx={{ lineHeight: 1.5 }} underline="hover" variant="body1" href="https://www.mintscan.io/osmosis/validators/osmovaloper1juczud9nep06t0khghvm643hf9usw45r3jxhxn">Osmosis</Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link color="inherit" sx={{ lineHeight: 1.5 }} underline="hover" variant="body1" href="https://explorebitsong.com/staking/bitsongvaloper1fkj2cn209yeexxyets98evrcmmds23hck0lyzq">Bitsong</Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link color="inherit" sx={{ lineHeight: 1.5 }} underline="hover" variant="body1" href="https://morpheus.desmos.network/validators/desmosvaloper1u0dae8r8hay6r2gvccegg2fz6ryftf2wfnj5ft">Desmos</Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link color="inherit" sx={{ lineHeight: 1.5 }} underline="hover" variant="body1" href="https://www.mintscan.io/persistence/validators/persistencevaloper1l6tn2xgtch3nv6a5aezfswd5uecww62uh3gwy4">Persistence</Link>
                    </ListItem>

                </List>
            </Grid>
            <Grid item xs={4} md={2}>
                <Typography variant="h6">
                    <strong>Media</strong>
                </Typography>
                <List dense>
                    <ListItem disablePadding>
                        <Link color="inherit" sx={{ lineHeight: 1.5 }} underline="hover" variant="body1" href="https://madeinblock.substack.com/">Blog</Link>
                    </ListItem>
                </List>
            </Grid>
            <Grid item sx={{ py: 3 }} xs={12}>
                <Divider flexItem />
            </Grid>
            <Grid item sx={{ pb: 3 }} display="flex" xs={6}>
                <Typography variant="body1">
                    © Made in Block {(new Date().getFullYear())}
                </Typography>
            </Grid>
            <Grid item sx={{ pb: 3 }} display="flex" justifyContent="flex-end" xs={6}>
                <Link href="https://twitter.com/made_in_block" color="inherit" underline="none">
                    <Twitter />
                </Link>
                <Link sx={{ pl: 3 }} href="https://github.com/made-in-block" color="inherit" underline="none">
                    <GitHub />
                </Link>
                <Link sx={{ pl: 3 }} href="https://www.youtube.com/@made_in_block" color="inherit" underline="none">
                    <YouTube />
                </Link>
            </Grid>
        </Grid>

    );
};

export default Footer;
