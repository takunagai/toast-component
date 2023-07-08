import React from 'react';

import ToastShelf from '../ToastShelf';
import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground({ message, setMessage, variant, setVariant }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [toastList, setToastList] = React.useState([]);
  // [
  //   {message: 'Example notice toast', variant: 'notice'},
  //   {message: 'Example error toast', variant: 'error'}
  // ]


  function handleSubmit(event) {
    event.preventDefault();
    // setIsVisible(true);
    console.log('Run handleSubmit method!');
    setToastList([...toastList, { message, variant }]);
    event.target.message.value = '';
  }

  function handleDismiss() {
    setIsVisible(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList} />
      {/*{isVisible && (*/}
      {/*  <Toast variant={variant} handleDismiss={handleDismiss}>*/}
      {/*    {message}*/}
      {/*  </Toast>*/}
      {/*})}*/}


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

export default ToastPlayground;
