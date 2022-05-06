import React from "react";
import "./BotButton.css";

export default function BotButton({ theme }) {
  function GoDownEvent() {
    document.body.scrollTop = document.body.scrollTop + 800;
    document.documentElement.scrollTop = document.documentElement.scrollTop + 800;
  }
  function scrollFunction() {
    if (
      document.body.scrollTop >= document.body.offsetHeight-document.body.offsetHeight/3.3 ||
      document.documentElement.scrollTop >= document.body.offsetHeight-document.body.offsetHeight/3.3
    ) {
      document.getElementById("botButton").style.visibility = "hidden";
    } else {
      document.getElementById("botButton").style.visibility = "visible";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  const onMouseEnter = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("botButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("botButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      onClick={GoDownEvent}
      id="botButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go down"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i class="fas fa-arrow-down" id="arrow" aria-hidden="true" />
    </div>
  );
}
