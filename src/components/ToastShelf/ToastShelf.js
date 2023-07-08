import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastList}) {
  if (toastList.length) {
    return (
      <ol className={styles.wrapper}>
        {toastList.map((toast, index) => {
          return (
            <li key={index} className={styles.toastWrapper}>
              <Toast variant={toast.variant}>{toast.message}</Toast>
            </li>
          );
        })}
      </ol>
    );
  }
}

export default ToastShelf;
