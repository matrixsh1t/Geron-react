import { FC } from "react";
import { Header } from "./src/components/Header";
import { Text } from "./src/shared/ui/Text";

export const App: FC = function App() {
  return (
    <>
      <Header />
      <Text textType="big">{"Big Header"}</Text>
      <Text textType="medium">{"Medium Header"}</Text>
      <Text textType="small">{"Small Header"}</Text>
      <Text textType="regular" textWeight="normal">
        {"Decription normal"}
      </Text>
      <Text textType="regular" textWeight="thin">
        {"Decription font-extralight"}
      </Text>
    </>
  );
};
