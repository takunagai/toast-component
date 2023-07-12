import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ handleDismiss }) {
  const { toasts } = React.useContext(ToastContext);

  if (toasts.length) {
    return (
      <ol
        className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification"
      >
        {toasts.map((toast) => {
          return (
            <li key={toast.id} className={styles.toastWrapper}>
              <Toast
                id={toast.id}
                variant={toast.variant}
                handleDismiss={handleDismiss}
              >
                {toast.message}
              </Toast>
            </li>
          );
        })}
      </ol>
    );
  }
}

export default ToastShelf;
