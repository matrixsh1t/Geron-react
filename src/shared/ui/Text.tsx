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
      fontSize = "text-3xl";  
      break;
    }
    case "medium": {
      fontSize = "text-2xl";
      break;
    }
    case "small": {
      fontSize = "text-1xl";
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
    <p {...rest} className={`text-left ${fontSize} ${fontWeight} pt-10 tracking-tight text-gray-500`}>
      {props.children}
    </p>
  );
};
