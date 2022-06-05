
import { SearchOutlined } from '@mui/icons-material'
import { Stack, Container, Grid, TextField, Typography, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const styles = {
    container: {
        padding: "0!important",
        color: "white",
        backgroundColor: "black",
        color: "white"
    },
    inputText: {
        backgroundColor: "white",
        borderRadius: 1,
        color: "white",
        width: "85%",
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '3px solid blue',
            borderRadius: 1
        },
        '& .MuiOutlinedInput-input': {
            border: "3px solid gray",
            padding: "0.5rem",
            borderRadius: 1
        }
    },
    icon: {
        backgroundColor: "#ee6b2f",
        height: "2.5rem",
        width: "2.5rem",
        padding: 0.1,
        borderRadius: 1
    },
    boxRight: {
        padding: 2,
        backgroundColor: "green",
        borderRadius: 2,
        width: { xs: "90%", md: "100%" }
    }
}


export const SearchBox = () => {
    return (
        <Container maxWidth="lg" sx={styles.container}>
            <Grid container maxWidth="md" sx={{ margin: "auto!important", paddingY: "2rem" }}
                spacing={{ xs: 2, md: 4 }} columns={{ xs: 12, sm: 12, md: 12 }}  >
                <Grid item xs={12} sm={12} md={6}>
                    <Stack sx={{ width: { xs: "90%", md: "100%" } }}>
                        <Typography variant='h5'>Name or Number</Typography>
                        <Box >
                            <TextField sx={styles.inputText} />
                            <SearchOutlined sx={styles.icon} />
                        </Box>
                        <Typography >Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={styles.boxRight}>
                        <Typography variant="h6">Search for a Pokémon by name or using its National Pokédex number.</Typography>
                    </Box>
                </Grid>


            </Grid>
        </Container>
    )
}