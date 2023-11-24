import { ReactNode } from "react";
import * as classes from "../../pods/home/style";

type Props = {
  children: ReactNode;
  title: string;
  url: string;
  className?: string;
};

export const Anchor = ({ children, title, url, className }: Props) => {
  const Class = className ? `${className}` : classes.defaultLinkStyle;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      hrefLang="es"
      className={Class}
    >
      {children}
      {title}
    </a>
  );
};
