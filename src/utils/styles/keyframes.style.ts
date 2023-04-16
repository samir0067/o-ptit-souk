import { keyframes } from "@mui/material"

export const rotate = keyframes`
  0% {
    animation-timing-function: ease-in;
    opacity: 1;
    transform: translateY(-45px);
  }
  24% {
    opacity: 1;
  }

  40% {
    animation-timing-function: ease-in;
    transform: translateY(-24px) scale3d(1.15, 0.85, 1);
  }
  65% {
    animation-timing-function: ease-in;
    transform: translateY(-12px) scale3d(0.85, 1.15, 1);
  }

  82% {
    animation-timing-function: ease-in;
    transform: translateY(-6px) ;
  }

  93% {
    animation-timing-function: ease-in;
    transform: translateY(-4px);
  }

  25%,
  55%,
  75%,
  87% {
    animation-timing-function: ease-out;
    transform: translateY(0px);
  }

  100% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateY(0px) scale3d(1, 1, 1);
  }
`
