import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram, IconDefinition } from '@fortawesome/free-brands-svg-icons';

type Site = 'facebook' | 'twitter' | 'instagram'

export interface SocialIconProps {
  color: string,
  site: Site
}

const siteData: {[Key in Site]: {url: string, icon: IconDefinition}} = {
  facebook: {
    url: "https://www.facebook.com/MAPCMetroBoston",
    icon: faFacebookSquare,
  },
  twitter: {
    url: "https://twitter.com/MAPCMetroBoston",
    icon: faTwitter,
  },
  instagram: {
    url: "https://www.instagram.com/mapcmetroboston/",
    icon: faInstagram,
  }
}

export const SocialIcon: React.FC<SocialIconProps> = ({ color, site, ...props }) => {
  const { url, icon } = siteData[site];
  return (
    <a href={url} {...props}>
      <FontAwesomeIcon color={color} icon={icon} size='2x' />
    </a>
  )
}
