import React from "react";
import BackButton from "./BackButton";

interface SecondaryScreenHeaderProps {
  backTo: string;
  currentPageTitle: string;
  title: string;
}

const SecondaryScreenHeader = ({
  backTo,
  currentPageTitle,
  title,
}: SecondaryScreenHeaderProps) => {
  return (
    <header className="flex items-center gap-3 mb-5">
      <BackButton
        backTo={backTo}
        currentPageTitle={currentPageTitle}
        title={title}
      />
    </header>
  );
};

export default SecondaryScreenHeader;
