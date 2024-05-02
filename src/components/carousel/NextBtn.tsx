import { HTMLProps } from "react";
import { ArrowRight } from "../../assets/svg";

const NextBtn = ({ onClick }: HTMLProps<HTMLButtonElement>) => (
  <button
    onClick={onClick}
    className="flex items-center gap-4 text-[1.2vw] uppercase text-secondary 3xl:text-[0.8vw]"
  >
    Next <ArrowRight className={"size-[1.1vw] 3xl:size-[0.73vw]"} />
  </button>
);

export default NextBtn;
