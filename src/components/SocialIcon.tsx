import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export interface SocialIconProps {
  color: string,
  site: 'facebook' | 'twitter' | 'instagram',
}

export const SocialIcon: React.FC<SocialIconProps> = ({ color, site }) => {
  let icon, url;
  if (site === 'facebook') {
    url = 'https://www.facebook.com/MAPCMetroBoston';
    icon = <FontAwesomeIcon icon={faFacebookSquare} color={color} />
  } else if (site === 'twitter') {
    url = 'https://twitter.com/MAPCMetroBoston';
    icon = <FontAwesomeIcon icon={faTwitter} color={color} />
  } else if (site === 'instagram') {
    url = 'https://www.instagram.com/mapcmetroboston/';
    icon = <FontAwesomeIcon icon={faInstagram} color={color} />
  }
  return (
  <a href={url}>
    {icon}
  </a>
)}