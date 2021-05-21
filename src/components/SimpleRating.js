import React from "react";
import Rating from "@material-ui/lab/Rating";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./SimpleRating";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiRating: {
      // Name of the rule
      iconEmpty: {
        // Some CSS
        color: "#767676",
      },
    },
  },
});

export default function SimpleRating(movie) {
  const [value, setValue] = React.useState(movie.movie.vote_average / 2);

  console.log(movie.movie.vote_average);

  return (
    <div>
      <Box component="fieldset" padding={0} borderColor="transparent">
        <ThemeProvider theme={theme}>
          <Rating name="read-only" value={value} readOnly />
        </ThemeProvider>
      </Box>
    </div>
  );
}
