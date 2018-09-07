import * as React from 'react';

export interface ITitleProps {
  title: string;
  subTitle?: string;
}

export const Title = ({ title, subTitle }: ITitleProps) => (
  <h1>
    {title}
    {subTitle && (
      <span style={{ color: 'rgba(0,0,0, 0.2)' }}>&nbsp;{subTitle}</span>
    )}
  </h1>
);
