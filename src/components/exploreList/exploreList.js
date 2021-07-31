import React from "react";
import ExploreCard from "../exploreCard/exploreCard";
import Grid from "@material-ui/core/Grid";


const ExploreList = ({explore}) => {
    console.log(explore);
  let exploreCards = explore.map((e) => (
    <Grid key={e.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ExploreCard key={e.id} explore={e}/>
    </Grid>
  )); 
  return (
      exploreCards
  )
};

export default ExploreList;