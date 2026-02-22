import React from "react";
import NavigationBubble from "./NavigationBubble";
import ScrollProgress from "./scroll/ScrollProgress";

interface Props {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      {children}
      <NavigationBubble />
    </div>
  );
}