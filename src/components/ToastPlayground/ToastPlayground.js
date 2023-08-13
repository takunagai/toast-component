import React from 'react';

import { ToastContext } from '../ToastProvider';
import ToastShelf from '../ToastShelf';
import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const {
    createToast,
    toasts
  } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const messageInputId = React.useId();
  const messageElement = document.getElementById(messageInputId);

  const inputRef = React.useRef(null); // Set `null` to read only

  function handleSubmit(event) {
    event.preventDefault();
    if (message === '') {
      alert('Please enter a message');
      inputRef.current.focus();
      return;
    }
    createToast(message, variant);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
    messageElement.value = '';
    inputRef.current.focus();
  }

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length && <ToastShelf />}

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor={messageInputId}
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                ref={inputRef}
                id={messageInputId}
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

export default ToastPlayground;
