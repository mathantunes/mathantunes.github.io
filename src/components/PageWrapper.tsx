import React from "react";
import NavigationBubble from "./NavigationBubble";

interface Props {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <div className="min-h-screen text-gray-900">
      {children}
      <NavigationBubble />
    </div>
  );
}