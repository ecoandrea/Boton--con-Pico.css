import React from 'react';

interface PButtonProps {
  children: React.ReactNode;
  className?: string;
}

interface PButtonBasesClass {
  bg: string;
  'hover:bg': string;
  text: string;
  py: string;
  px: string;
  rounded: string;
}

export default function PButton({ children, className }: PButtonProps) {
  const basesClass: PButtonBasesClass = {
    bg: 'bg-sky-600',
    'hover:bg': 'hover:bg-sky-700',
    text: 'text-white',
    py: 'py-2',
    px: 'px-4',
    rounded: 'rounded',
  };

  const clientClass = className
    ? className.split(' ').filter(item => {
        if (item.split('-')[0] in basesClass) {
          basesClass[item.split('-')[0] as keyof PButtonBasesClass] = item;
          return false;
        }
        return true;
      })
    : [];

  const classes =
    Object.values(basesClass).join(' ') + ' ' + clientClass.join(' ');

  return <button className={`${classes}`}>{children}</button>;
}