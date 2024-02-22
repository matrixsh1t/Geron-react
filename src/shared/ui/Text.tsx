import { FC, HTMLAttributes } from "react";

type TextType = "big" | "medium" | "small" | "regular";
type TextWeight = "normal" | "thin";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  textType?: TextType;
  textWeight?: TextWeight;
}

export const Text: FC<Props> = function Text(props) {
  const { textType = "regular", textWeight = "normal", ...rest } = props;
  let fontSize = "text-base";
  let fontWeight = "font-bold";

  switch (textType) {
    case "big": {
      fontSize = "text-9xl";  
      break;
    }
    case "medium": {
      fontSize = "text-6xl";
      break;
    }
    case "small": {
      fontSize = "text-3xl";
      break;
    }
    case "regular": {
      fontSize = "text-base";
      if (textWeight === "normal") {
        fontWeight = "font-normal";
      } else if (textWeight === "thin") {
        fontWeight = "font-thin";
      }
      break;
    }
  }

  return (
    <p {...rest} className={`text-center ${fontSize} ${fontWeight} mt-7`}>
      {props.children}
    </p>
  );
};
