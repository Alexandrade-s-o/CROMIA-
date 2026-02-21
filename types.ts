
import React from 'react';

export interface PortfolioSubImage {
  id: string;
  url: string;
}

export interface PortfolioCategory {
  id: string;
  title: string;
  coverImage: string;
  images: PortfolioSubImage[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
