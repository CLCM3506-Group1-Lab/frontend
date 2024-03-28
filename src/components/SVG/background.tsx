import { Box, Center } from "@chakra-ui/layout";

export default function BackgroundSVG() {
  return (
    <Box position="absolute" w="100vw" h="100vh" zIndex="-1">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1300 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1210.55 472.964L1070.48 613.031V472.964H1210.55Z"
          fill="black"
          stroke="black"
        />
        <path
          d="M1354.03 329.482L1213.96 469.549V329.482H1354.03Z"
          stroke="black"
        />
        <path
          d="M1357.45 330.896L1497.51 470.964H1357.45V330.896Z"
          stroke="black"
        />
        <circle cx="1141.22" cy="258.534" r="70.7409" stroke="black" />
        <circle
          cx="943.935"
          cy="489.899"
          r="16.9352"
          fill="black"
          stroke="black"
        />
        <circle cx="1307.12" cy="556.259" r="70.7409" stroke="black" />
        <rect
          x="1357.45"
          y="186"
          width="141.482"
          height="141.482"
          fill="black"
          stroke="black"
        />
        <path
          d="M110.031 144.482L-30.0364 284.549V144.482H110.031Z"
          stroke="black"
        />
        <path
          d="M113.445 145.896L253.513 285.964H113.445L113.445 145.896Z"
          stroke="black"
        />
        <circle
          cx="381.474"
          cy="127.34"
          r="16.9352"
          fill="black"
          stroke="black"
        />
        <circle cx="63.1235" cy="371.259" r="70.7409" stroke="black" />
        <rect
          x="113.445"
          y="1"
          width="141.482"
          height="141.482"
          fill="black"
          stroke="black"
        />
      </svg>
    </Box>
  );
}
