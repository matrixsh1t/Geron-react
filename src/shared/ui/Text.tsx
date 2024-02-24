import { FC, HTMLAttributes } from "react";

type TextType = "big" | "medium" | "small" | "regular";
type TextWeight = "normal" | "thin";
type TextAlign = "text-left" | "text-center" | "text-right";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  textType?: TextType;
  textWeight?: TextWeight;
  textColor?: string;
  textAlign?: TextAlign;
  textMargin?: string;
}

export const Text: FC<Props> = function Text(props) {
  // Colors and margins initialized to make tailwind work properly
  const colors = [
    "text-blue-400",
    "text-red-900",
    "text-orange-400",
    "text-green-500",
    "text-white",
    "text-gray-300",
  ];
  const textMargins = ["mt-0", "mt-10"];

  const {
    textType = "regular",
    textWeight = "normal",
    textColor = "text-black",
    textAlign = "text-left",
    textMargin,
    ...rest
  } = props;

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
    <p
      {...rest}
      className={`${fontSize} ${fontWeight} ${textColor} ${textAlign} ${textMargin}`}
    >
      {props.children}
    </p>
  );
};
