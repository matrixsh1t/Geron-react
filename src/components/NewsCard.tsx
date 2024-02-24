import { FC } from "react";
import { Button, ButtonType } from "../shared/ui/Button";
import { Text } from "../shared/ui/Text";

interface Props {
  bgColor: string,
  buttonMode: ButtonType,
  title: string,
  description: string,
  buttonText: string,
  textColor: string,

}

export const NewsCard: FC<Props> = function NewsCard(props) {

  let {bgColor = "bg-gray-100", buttonMode = "default", title, description, buttonText, textColor, ...rest} = props;
  //initialize classes
  const bgColors = ["bg-gray-100", "bg-gray-900", "bg-blue-400", "bg-blue-200", "text-blue-600"]
  
  return (
    <div className="mx-auto">
      <div className="max-w-[550px] py-10">
        <div className={`${bgColor} px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:pt-0`}>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            
            <Text textType="big" textColor={textColor}>
              {title}
            </Text>

            <Text textType="small" textColor={textColor}>
              {description}
            </Text>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button mode={buttonMode}>{buttonText}</Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
