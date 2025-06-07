import { Box, Typography } from "@mui/material";
import { CountryInfo } from "../../api/api.types";

export const Info = ({ name, capital }: Omit<CountryInfo, "flags">) => {
   return (
      <Box component="section">
         <Typography
            component="h2"
            variant="h5"
         >
            <strong>{name.common}</strong>
         </Typography>
         <Typography>Capital: {capital}</Typography>
      </Box>
   );
};
