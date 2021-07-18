import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg';
import { theme } from '../../components';
import { Box } from '../../components/Theme';

const Facebook = () => (
    <Svg
        viewBox="0 0 512 512"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeMiterlimit={2}
    >
        <Path
          d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 127.777 93.616 233.685 216 252.89V330h-65v-74h65v-56.4c0-64.16 38.219-99.6 96.695-99.6 28.009 0 57.305 5 57.305 5v63h-32.281C305.918 168 296 187.733 296 207.978V256h71l-11.35 74H296v178.89C418.385 489.685 512 383.777 512 256z"
          fill="#1877f2"
        />
        <Path
          d="M355.65 330L367 256h-71v-48.022c0-20.245 9.917-39.978 41.719-39.978H370v-63s-29.297-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.89a257.912 257.912 0 0040 3.11c13.608 0 26.966-1.065 40-3.11V330h59.65z"
          fill="#fff"
        />
    </Svg>
)

const GoogleIcon = () => {
    return (
      <Svg viewBox="0 0 512 512">
        <Path
          d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
          fill="#fbbb00"
        />
        <Path
          d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
          fill="#518ef8"
        />
        <Path
          d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
          fill="#28b446"
        />
        <Path
          d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
          fill="#f14336"
        />
      </Svg>
    );
  };

const Twitter = () => (
    <Svg
      viewBox="0 0 512 512"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeMiterlimit={2}
    >
      <Circle cx={256} cy={256} r={256} fill="#1da1f2" />
      <Path
        d="M209.152 391.04c113.536 0 175.616-94.08 175.616-175.616 0-2.688 0-5.376-.128-7.936a126.45 126.45 0 0030.848-32c-11.008 4.864-22.912 8.192-35.456 9.728 12.8-7.68 22.528-19.712 27.136-34.176A124.989 124.989 0 01368 166.016c-11.264-12.032-27.264-19.456-45.056-19.456-34.048 0-61.696 27.648-61.696 61.696 0 4.864.512 9.6 1.664 14.08-51.328-2.56-96.768-27.136-127.232-64.512a61.916 61.916 0 00-8.32 30.976 61.446 61.446 0 0027.52 51.328c-10.112-.256-19.584-3.072-27.904-7.68v.768c0 29.952 21.248 54.784 49.536 60.544a61.529 61.529 0 01-16.256 2.176 58.93 58.93 0 01-11.648-1.152c7.808 24.576 30.592 42.368 57.6 42.88-21.12 16.512-47.744 26.368-76.672 26.368-4.992 0-9.856-.256-14.72-.896 27.008 17.664 59.52 27.904 94.336 27.904"
        fill="#fff"
        fillRule="nonzero"
      />
    </Svg>
)

const Reddit = () => (
    <Svg
      viewBox="0 0 512 512"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeMiterlimit={2}
    >
      <Circle cx={255.999} cy={255.999} r={256} fill="#ff4500" />
      <Path
        d="M426.666 255.999c0-20.659-16.767-37.427-37.427-37.427-10.18 0-19.163 3.893-25.75 10.48-25.45-18.264-60.781-30.241-99.705-31.738l17.067-79.944 55.391 11.677c.599 14.073 12.276 25.451 26.648 25.451 14.672 0 26.648-11.977 26.648-26.648 0-14.672-11.976-26.648-26.648-26.648-10.479 0-19.462 5.988-23.653 14.97l-61.979-13.174c-1.797-.299-3.593 0-5.09.898-1.497.899-2.396 2.396-2.995 4.192l-18.863 89.226c-39.822 1.198-75.452 12.875-101.202 31.738-6.587-6.288-15.869-10.48-25.75-10.48-20.659 0-37.426 16.768-37.426 37.427 0 15.27 8.982 28.145 22.156 34.134-.599 3.593-.898 7.485-.898 11.377 0 57.488 66.77 103.897 149.408 103.897 82.639 0 149.408-46.409 149.408-103.897 0-3.892-.299-7.485-.898-11.078 12.276-5.988 21.558-19.163 21.558-34.433zm-256 26.648c0-14.671 11.977-26.648 26.648-26.648s26.648 11.977 26.648 26.648c0 14.672-11.977 26.648-26.648 26.648s-26.648-11.976-26.648-26.648zm148.809 70.363c-18.264 18.264-52.996 19.462-63.176 19.462s-45.212-1.497-63.177-19.462c-2.695-2.695-2.695-7.186 0-9.881 2.695-2.695 7.186-2.695 9.881 0 11.378 11.378 35.93 15.57 53.595 15.57 17.666 0 41.918-4.192 53.595-15.57 2.695-2.695 7.186-2.695 9.881 0 2.096 2.994 2.096 7.186-.599 9.881zm-4.79-43.715c-14.672 0-26.648-11.976-26.648-26.648 0-14.671 11.976-26.648 26.648-26.648 14.671 0 26.648 11.977 26.648 26.648 0 14.672-11.977 26.648-26.648 26.648z"
        fill="#fff"
        fillRule="nonzero"
      />
    </Svg>
)

interface SocialIconProps {
    children: ReactNode
}

const SocialIcon = ({ children } : SocialIconProps) => {
    const SIZE = theme.borderRadii.l * 2;

    return (
        <Box
            margin='m'
            backgroundColor='background'
            width={SIZE}
            height={SIZE}
            borderRadius="l"
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </Box>
    )
}

const SocialLogin = () => {
    return (
        <Box flexDirection="row" justifyContent='center'>
            <SocialIcon><Facebook /></SocialIcon>
            <SocialIcon><GoogleIcon /></SocialIcon>
            <SocialIcon><Twitter /></SocialIcon>
        </Box>
    )
}

export default SocialLogin

const styles = StyleSheet.create({})
