import { HTMLProps } from "react";

const SectionWrapper = ({ children, className }: HTMLProps<HTMLDivElement>) => {
  return (
    <section className={`px-[5vw]${className ? " " + className : ""}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
