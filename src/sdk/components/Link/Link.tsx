import * as React from 'react';

export interface ILinkProps {
  id: string;
  title: string;
  onClick?(event: React.MouseEvent<HTMLAnchorElement>): void;
}

export const Link = ({ id, title, onClick }: ILinkProps) => (
  <p style={{ cursor: 'pointer' }}>
    <a data-id={id} onClick={onClick} href="#">
      {title}
    </a>
  </p>
);
