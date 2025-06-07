import { Box } from "@mui/material";
import "./Flag.css";

export const Flag = ({
   flagSrc,
   flagAlt,
   isNepal,
}: {
   flagSrc: string;
   flagAlt: string;
   isNepal: boolean;
}) => {
   const width = isNepal ? "60%" : "100%";
   return (
      <Box
         sx={{
            width: 1,
            height: 150,
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
         }}
      >
         <img
            src={flagSrc}
            alt={flagAlt}
            className="flag"
            style={{
               borderRadius: "inherit",
               objectFit: "fill",
               width: width,
               height: "100%",
            }}
         />
      </Box>
   );
};
