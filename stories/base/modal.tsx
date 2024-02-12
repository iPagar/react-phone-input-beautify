import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';

type Props = {
  children: ReactNode | ReactNode[];
};
function Portal({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>{children}</div>
        </div>,
        document.body
      )
    : null;
}

export default Portal;
