import { useEffect, useState } from 'react';
import { sendVerificationEmail } from '../utils/emailVerifyHelper';

function EmailVerifyForm() {
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    sendVerificationEmail();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        return prev - 1;
      });
    }, 1000);

    if (resendTimer <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [resendTimer]);

  return (
    <form className="flex items-center justify-center min-h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h2 className="text-center text-4xl mb-4">Email Verification</h2>

        <label className="label">Verification Code</label>
        <input
          type="text"
          inputMode="numeric"
          className="input"
          placeholder="Your Code"
          maxLength={6}
        />

        <button className="btn btn-primary mt-4">Verify</button>
        <button
          className="btn btn-secondary mt-4"
          onClick={() => {
            sendVerificationEmail();
            setResendTimer(60);
          }}
          disabled={resendTimer > 0}
        >
          Resend Verification Email
          {resendTimer > 0 && <span>({resendTimer})</span>}
        </button>
      </fieldset>
    </form>
  );
}

export default EmailVerifyForm;
