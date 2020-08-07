import React from "react";
import CustomHero01 from "./components/CustomHero01";

const Hero01 = props => {
  return (
    <CustomHero01
      minHeight="100vh"
      backgroundImage="https://scontent.fbki2-1.fna.fbcdn.net/v/t31.0-8/22051380_10209888107787589_3822251984545509115_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=_T_HQlZ9Q0UAX8OYz-U&_nc_ht=scontent.fbki2-1.fna&oh=9c93a9c1a4175bd378fd487c984ea2d8&oe=5F3ED485"
    >
      <h1 style={{ color: "white" }}>Hello!</h1>
    </CustomHero01>
  );
};

export default Hero01;
