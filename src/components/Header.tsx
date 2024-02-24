import { FC } from "react";
import { Button } from "../shared/ui/Button";

export const Header: FC = function Header() {
  const handlePress = () => {
    console.log("click");
  };

  return (
    <>
      <header className={"bg-blue-800 h-20"}>
        <Button onClick={handlePress} mode="default">{"Default button"}</Button>
        <Button onClick={handlePress} mode={"border"}>{"Border button"}</Button>
        <Button onClick={handlePress} mode={"dark"}>{"Dark button"}</Button>
      </header>
    </>
  );
};
