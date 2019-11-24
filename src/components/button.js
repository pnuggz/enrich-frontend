import React from "react";

const Button = props => {
  const classProp = props.className || "";
  const colorProp = props.color ? "btn-" + props.color : "";
  const sizeProp = props.size ? "btn-" + props.size : "";
  const hrefProp = props.href || "#";
  const onClickProp = props.onClick || (e => e.preventDefault());

  const tooltipDelay = props.tooltipDelay || 0
  const tooltipContent = props.tooltipContent || null
  const tooltipPlacement = props.tooltipPlacement || "bottom"

  const reduceClassProp = ["btn", classProp, colorProp, sizeProp].reduce(
    (reduceClass, string) => {
      let delim = "";
      if (reduceClass !== "" && string !== "") {
        delim = " ";
      }
      return reduceClass + delim + string;
    },
    ""
  );

  return (
    <a href={hrefProp} className={reduceClassProp} onClick={onClickProp}>
      {props.children}
    </a>
  );
};

export default Button;
