import React from 'react';

import { ToastContext } from '../ToastProvider';
import ToastShelf from '../ToastShelf';
import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const {
    createToast,
    dismissToast,
    dismissAllToasts,
    toasts
  } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');

  const inputRef = React.useRef(null); // null で読み取り専用

  function handleSubmit(event) {
    event.preventDefault();
    if (message === '') {
      alert('Please enter a message');
      inputRef.current.focus();
      return;
    }
    createToast(message, variant);
    setMessage('');
    setVariant('notice');
    event.target.message.value = '';
    inputRef.current.focus();
  }

  function handleDismiss(id) {
    dismissToast(id);
  }

  function handleDismissAll() {
    dismissAllToasts();
  }

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEscapeKey(handleDismissAll);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length &&
        <ToastShelf
          toasts={toasts}
          handleDismiss={handleDismiss}
        />
      }

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                ref={inputRef}
                id="message"
                name="message"
                className={styles.messageInput}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;

                return (
                  <label key={id} htmlFor={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={option === variant}
                      onChange={(event) => {
                        setVariant(event.target.value);
                      }}
                    />
                    {option}
                  </label>
                )
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        callback()
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [callback])
}

export default ToastPlayground;
