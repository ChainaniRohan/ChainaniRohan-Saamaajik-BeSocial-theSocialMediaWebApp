import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>LPU</Typography>
        <Typography color={medium}>Lovely Proffisional University</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Lovely Professional University is a private university located in Chaheru, Phagwara, Punjab, India. The university was established in 2005 by Lovely International Trust, under The Lovely Professional University Act, 2005 and started operation in 2006
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
