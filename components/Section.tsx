import React, { HTMLAttributes } from "react";
import { H2 } from "./headings";

export default function Section(props: SectionProps) {
  return (
    <section id={props.id}>
      <H2 hash={props.id}>{props.heading}</H2>
      {props.children}
    </section>
  );
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  heading: string;
}
