import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
  if (toasts.length) {
    return (
      <ol className={styles.wrapper}>
        {toasts.map((toast) => {
          return (
            <li key={toast.keyId} className={styles.toastWrapper}>
              <Toast
                keyId={toast.keyId}
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
