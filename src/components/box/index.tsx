import React from 'react';
import clsx from 'clsx';
import { BEM, UiText } from '@nevermined-io/styles'
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';
 
const b = BEM('box', styles)

export type BoxItem = {
  title: string;
  link?: string; 
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  className?: string;
};

export const Box = ({title, link, Svg, description, className}: BoxItem ) => {
  const content = (
      <div className={b('container')}>
        <div className="text--center">
          <Svg className={b('svg')} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <UiText type='h3' >{title}</UiText>
          <UiText type='p'>{description}</UiText>
        </div>
      </div>
  );

  return (
    <div className={`${clsx('col col--4')} ${className}`}>
          {link ? <Link className={b('link')} to={link}>{content}</Link> : <>{content}</>}
    </div>
  );
}
