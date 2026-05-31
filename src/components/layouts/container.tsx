import { ReactNode } from "react";

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`container mx-auto w-full px-3 xl:max-w-7xl ${className}`}>{children}</div>
  );
};

export default Container;
