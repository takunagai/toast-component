import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

function App() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');

  return (
    <>
      <ToastPlayground
        message={message}
        setMessage={setMessage}
        variant = {variant}
        setVariant={setVariant}
      />
      <Footer />
    </>
  );
}

export default App;
