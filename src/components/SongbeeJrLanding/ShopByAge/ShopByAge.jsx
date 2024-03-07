import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import "./ShopByAge.css";


const OuterContainer = styled('div')({
    position: 'relative',
});

const CardContainer = styled(Card)({
    maxWidth: 250,
    position: 'absolute',
    top: '26.90%',
    height: '17.85%',
    margin: '0 10px',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    borderRadius: '10px',
    backgroundColor: '#fff4df',
});

const ShopByAgeImage = styled('img')({
    width: '100%',
    top: '-850px',
    position: 'reletive'
   

});

const MonthlySubContainer = styled('div')({
    position: 'absolute',
    top: '63.85%',
    left: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
   
})

function ShopByAge() {
    return (
        <>
       <div className="bg-shopByAge">
        <div className="innerBg">
        <OuterContainer>
            <ShopByAgeImage src="shopByAge.png" alt="Shop by Age" className="shopByAge" />
            <MonthlySubContainer>
            <div className="whatWeOffer">
                <img src="monthlySub.png" />
                <div>
                    <button className="getStartedBtn">Get Started</button>
                </div>     
            </div>  
            </MonthlySubContainer>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={1.4}>
                    <CardContainer>
                        <CardMedia
                            component="img"
                            className="image1"
                            image="0-1Year.png"
                            alt="0-1 year"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <p className="cardText">Our baby goes through so many changes in the first year. Help them meet their milestones.</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn more</Button>
                        </CardActions>
                    </CardContainer>
                </Grid>
                <Grid item xs={1.4}>
                    <CardContainer>
                        <CardMedia
                            component="img"
                            className="image1"
                            image="1-2Year.png"
                            alt="1-2 year"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <p className="cardText">Your baby is growing up! They are starting to walk, play and communicate on their own. Enhance learning to help them through each new step.</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn more</Button>
                        </CardActions>
                    </CardContainer>
                </Grid>
                <Grid item xs={1.4}>
                    <CardContainer>
                        <CardMedia
                            component="img"
                            className="image1"
                            image="3-5Year.png"
                            alt="3-5 year"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <p className="cardText">Learn communication skills, collaboration and emotional understanding. Help your child excel in school or at home with musical learning.</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn more</Button>
                        </CardActions>
                    </CardContainer>
                </Grid>
                <Grid item xs={1.2}>
                    <CardContainer>
                        <CardMedia
                            component="img"
                            className="image1"
                            image="6-10Year.png"
                            alt="6-10 year"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <p className="cardText">Develop a more mature and logical way of thinking. Further your child's social, physical, cognitive, motor and language development.</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn more</Button>
                        </CardActions>
                    </CardContainer>
                </Grid>
            </Grid> 
        </OuterContainer>
        <div className="bg-test">
        <div className="sbjTest">
            <img src="sbjTest.png" />
        </div>
        </div>
         </div>
        </div>
        </>
    );
}


export default ShopByAge;