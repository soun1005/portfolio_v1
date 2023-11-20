const email = 'thdms1005@gmail.com';

const CopyEmail = () => {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert('Email is copied');
    })
    .catch((err) => {
      console.error('Copy failed: ', err);
      alert('Copy failed');
    });
};

export default CopyEmail;
