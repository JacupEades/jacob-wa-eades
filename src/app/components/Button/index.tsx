/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Button.module.scss';

type Props = {
  text?: string;
  iconRight?: any;
  style: string;
  onClick: (arg0: any) => any;
};

export default function Button({ text, iconRight, style, onClick }: Props) {
  return (
    <button onClick={(e) => onClick(e)} className={styles[style]}>
      {text}
      {iconRight}
    </button>
  );
}
