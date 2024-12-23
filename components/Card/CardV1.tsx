import Link from "next/link";
import React from "react";
type Content = {
  name: string;
  path: string;
};
export default function CardV1(props: Content) {
  return (
    <Link href={props.path} className="no-underline">
      <div className="border-[1px] border-red-600">
        <h3 className="text-neutral-100 font-bold bg-gradient-to-br from-red-500 to-red-700 p-2 capitalize transition-all ease-linear hover:-translate-x-1 hover:-translate-y-1">
          {props.name}
        </h3>
      </div>
    </Link>
  );
}
