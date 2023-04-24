import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Collapse from '@mui/material/Collapse';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Divider } from '@mui/material';
import FadeSection from "./FadeSection.js"

import {Link} from "react-router-dom"

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Recipe = ({ title, image, ingredients,nut,calories,servings,recipe }) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let vitamin;
  let vitaminType;
  if(nut.VITA_RAE>0){
  vitamin = nut.VITA_RAE
  vitaminType="A"
  }
  if(nut.VITB12>0){
  vitamin = nut.VITB12
  vitaminType = "B-12"
  }
  if(nut.VITB6A>0){
  vitamin = nut.VITB6A
  vitaminType = "B-6"
  }
  if(nut.VITC>0){
  vitamin = nut.VITC
  vitaminType = "C"
  }
  return (
<FadeSection className="card">
<Card sx = {{maxWidth:300,display:"flex"}}>
      <div className="card" >
<Link to={ "/Recipe"} state = {recipe}>
      <div className="card_image">
      <CardMedia
        component="img"
        image={image}
        alt="dish"
      />
      </div>
</Link>
      <div className="card2">
       
        <h2 className="card_title">{title}</h2>
        {/* food label */}
          
            <CardContent sx = {{flexDirection:"column"}}>
            View Label
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            
            <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography gutterBottom variant="h4" component="div" sx={{fontSize:"35px",fontWeight:"bold"}}>
          Nutrition Facts
        </Typography>
              <Divider sx = {{border:"solid 1px black"}}/>
              <Typography paragraph >
               servings per meal
              </Typography>
              <Typography paragraph sx = {{fontWeight:"bold"}}>
              Serving Size {servings}
              </Typography>
              <Divider sx = {{border:"solid 5px black"}}/>
              <Typography paragraph >
                Amount per serving
              </Typography>
              <Typography paragraph sx = {{fontWeight:"bold", fontSize:"30px",wordSpacing:"50px"}} >
                Calories {Math.floor(calories/servings)}
              </Typography>
              <Divider sx = {{border:"solid 3px black"}} />
              <Typography paragraph >
                % daily value
              </Typography>
              <Divider />
              <Typography paragraph >
                Total Fat {Math.ceil(nut.FAT.quantity)}
              </Typography>
              <Divider />
              <Typography paragraph >
                Saturated Fat {Math.ceil(nut.FASAT.quantity)}
              </Typography>
              <Divider />
              <Typography paragraph >
                Trans Fat {Math.ceil(nut.FATRN.quantity)}
              </Typography>
              <Divider />
              <Typography paragraph >
                Cholesterol {Math.ceil(nut.CHOLE.quantity)}
              </Typography>
              <Divider />
              <Typography paragraph >
                Sodium {Math.ceil(nut.NA.quantity)}
              </Typography>
              <Divider />
              <Typography paragraph >
                Total Carbohydrates {Math.ceil(nut.CHOCDF.quantity)}
              </Typography>
              <Divider />
              <Typography paragraph >
                Dietary Fiber {Math.ceil(nut.FIBTG.quantity)}
              </Typography>
              <Divider />
              <Typography paragraph >
                Total Sugars {Math.ceil(nut.SUGAR.quantity)}
              </Typography>
              <Divider />
              <Typography paragraph >
                Protein {Math.ceil(nut.PROCNT.quantity)}
              </Typography>
              <Divider/>
              
              <Divider/>
              <Typography paragraph >
                Calcium {Math.ceil(nut.CA.quantity)}
              </Typography>
              <Divider/>
              <Typography paragraph >
                Iron {Math.ceil(nut.FE.quantity)}
              </Typography>
              <Divider/>
              <Typography paragraph >
                Potassium {Math.ceil(nut.K.quantity)}
              </Typography>
              <Divider/>
              <Typography paragraph  >
                The % daily value tells you how much nutrients there is etc
              </Typography>
              </Collapse>
            </CardContent>
          
        </div>
      </div>
      </Card>
      </FadeSection>
  );
};


export default Recipe;