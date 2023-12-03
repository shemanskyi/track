import { ReactNode } from 'react';

export type RightPanelType = {
  children?: JSX.Element | JSX.Element[] | ReactNode;
  onClose: () => void;
  open: boolean;
  title?: string;
}