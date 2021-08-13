import React from "react";
import Person from "../personCard";
import Grid from "@material-ui/core/Grid";

const PeopleList = ( {people} ) => {
  let peopleCards = people.map((m) => (
    <Grid key={m.id} item xs={9} sm={7} md={5} lg={4} xl={3}>
      <Person key={m.id} person={m} />
    </Grid>
  ));
  return peopleCards;
};

export default PeopleList;