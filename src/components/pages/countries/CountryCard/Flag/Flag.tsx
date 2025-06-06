import "./Flag.css";

export const Flag = ({
   flagSrc,
   flagAlt,
}: {
   flagSrc: string;
   flagAlt: string;
}) => {
   return (
      <img
         src={flagSrc}
         alt={flagAlt}
         className="flag"
      />
   );
};
