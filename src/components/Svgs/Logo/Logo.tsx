// interface
import type { ISvg } from '../ISvg';
// styles
import styles from './Logo.module.scss';

export const Logo = ({ classNames, height }: ISvg) => {
  return (
    <svg
      role='img'
      className={`${styles.Logo} ${classNames}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 640'
      height={height}>
      <title>Some Logo</title>
      <path
        d='M40 0v40H0v560h40v40h200v-40h40v40h200v-40h40v-40h40V400h40v-40h40V160h-80V40h-40V0H40z'
        fill='#deeed6'
      />
      <path d='M80 40v40h400V40H80zm0 80v40h360v-40H80zM40 520v40h440v-40H40z' fill='#30346d' />
      <path
        d='M40 80v440h440V80H40zm40 40h360v240H80V120zm80 280h40v40h120v-40h40v40h-40v40H200v-40h-40z'
        fill='#597dce'
      />
      <path
        d='M480 80v440h40V360h40v-40h-40V80zm80 240h40V200h-40zM160 200v120h40V200zm160 0v120h40V200zM80 560v40h120v-40zm240 0v40h120v-40z'
        fill='#140c1c'
      />
    </svg>
  );
};
