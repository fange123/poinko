import Image from 'next/image';
import React, {FC} from 'react';
import img from '../../images/foot.gif';

const FootFixed: FC = () => {
  return (
    <div className="fixed bottom-2 left-2 z-0">
      <Image alt="" src={img} />
    </div>
  );
};

export default FootFixed;
