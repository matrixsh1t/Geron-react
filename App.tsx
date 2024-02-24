import { FC } from "react";
import { Header } from "./src/components/Header";
import { Text } from "./src/shared/ui/Text";
import { NewsCard } from "./src/components/NewsCard";

export const App: FC = function App() {
  return (
    <>
      <Header></Header>

      <Text textType="big" textColor="text-orange-400" textAlign="text-center" textMargin="mt-10">{"Big Header"}</Text>
      <Text textType="medium" textColor="text-green-500" textAlign="text-center" >{"Medium Header"}</Text>
      <Text textType="small" textColor="text-red-900" textAlign="text-center">{"Small Header"}</Text>
      <Text textType="regular" textWeight="normal" textColor="text-blue-400" textAlign="text-center">{"Decription normal"}</Text>
      <Text textType="regular" textWeight="thin" textColor="text-red-300" textAlign="text-center">{"Decription font-extralight"}</Text>
      <div className="flex flex-row ">
      <NewsCard bgColor="bg-gray-900" buttonMode="border" title="Title1" description="Some text on card 1" buttonText="Button 1 title" textColor="text-white"></NewsCard>
      <NewsCard bgColor="bg-gray-100" buttonMode="default" title="Title2" description="Some text on card 2" buttonText="Button 2 title" textColor="text-blue-600"></NewsCard>
      <NewsCard bgColor="bg-blue-200" buttonMode="dark" title="Title3" description="Some text on card 3" buttonText="Button 3 title" textColor="text-black"></NewsCard>
      </div>
    </>
  );
};
