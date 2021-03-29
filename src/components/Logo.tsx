import * as  React from 'react';
import duotoneLogo from '../assets/images/mapc-duotone.svg';
import semitransparentLogo from '../assets/images/mapc-semitransparent.svg';
import fullcolorLogo from '../assets/images/mapc-fullcolor.png';

type LogoStyle = 'duotone' | 'semitransparent' | 'fullcolor'

export interface LogoProps {
  style: LogoStyle
}

const logoData: {[Key in LogoStyle]: string} = {
  duotone: duotoneLogo,
  semitransparent: semitransparentLogo,
  fullcolor: fullcolorLogo,
}

export const Logo: React.FC<LogoProps> = ({ style, ...props }) => {
  return (
    <img src={logoData[style]} alt="MAPC Logo" {...props} />
  )
}