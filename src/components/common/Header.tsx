/** @format */

import Logo from './Logo';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header className=' flex justify-between p-5 text-xl font-bold'>
      <Logo />
      <button>
        <Icon icon='tabler:settings-2' width={23} />
      </button>
    </header>
  );
};

export default Header;
