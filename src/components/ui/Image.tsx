import { HTMLProps } from "react";

const Image = ({ ...props }: HTMLProps<HTMLImageElement>) => <img {...props} />;

export default Image;
