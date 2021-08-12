import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";

const useStyles = makeStyles({
card: { maxWidth: 345 },
media: { height: 500 },
avatar: {
       backgroundColor: "rgb(255, 0, 0)",
},
});

export default function PersonCard({person}) {
let imageLink = "";
if(person.profile_path){
       imageLink = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${person.profile_path}`
}
if(!person.profile_path){
       imageLink = "https://bolderadvocacy.org/wp-content/uploads/2018/08/blue-icon-question-mark-image.png"
}
const classes = useStyles();
return (
       <Card className={classes.card}>
       <CardHeader className={classes.header} />
       <CardMedia
       className={classes.media}
       image=
              {imageLink}     
       /> 
       <CardContent>
              <Link href="#">
              <Typography variant="h4" component="p">
              {person.name}{" "}
              </Typography>
              </Link>
              <Typography variant="h6" component="p">
              {person.known_for.map((g) => (
          <li key={g}>
              {g.name || g.title}
          </li>
        ))}
              </Typography>            
       </CardContent>
       </Card>
);
}