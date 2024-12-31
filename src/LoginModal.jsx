import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Code } from 'lucide-react';

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1002,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1001,
  },
  logo: {
    position: 'fixed',
    top: 0,
    left: '60px',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    zIndex: 999,
    background: 'white',
    borderRadius: '0 0 8px 0',
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    marginLeft: '12px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  loginButtonContainer: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 999,
  },
  loginButton: {
    padding: '8px 16px',
    backgroundColor: '#00e5ff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '24px',
    color: '#333',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#666',
    marginBottom: '8px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '12px',
    paddingLeft: '40px',
    border: '1px solid #eee',
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: '#f8f8f8',
    marginBottom: '16px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: '16px',
  },
  icon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#999',
    width: '20px',
    height: '20px',
  },
  rememberForgot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#666',
    fontSize: '14px',
  },
  signInButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00e5ff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '16px',
  },
  signUpText: {
    textAlign: 'center',
    color: '#666',
    fontSize: '14px',
    marginBottom: '24px',
  },
  signUpLink: {
    color: '#00e5ff',
    textDecoration: 'none',
    fontWeight: '500',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0',
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: '#eee',
  },
  orText: {
    margin: '0 16px',
    color: '#999',
    fontSize: '14px',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '16px',
  },
  socialButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '16px',
  },
};

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* 로고 */}
      <div style={styles.logo}>
        <div style={styles.logoIcon}>
          <Code size={24} />
        </div>
        <span style={styles.logoText}>
          CodeSchooler
        </span>
      </div>

      {/* 로그인 버튼 */}
      <div style={styles.loginButtonContainer}>
        <button
          onClick={() => setIsOpen(true)}
          style={styles.loginButton}
        >
          로그인
        </button>
      </div>

      {/* 모달 */}
      {isOpen && (
        <div style={styles.modalOverlay} onClick={handleBackdropClick}>
          <div style={styles.modalContent}>
            <h1 style={styles.title}>Sign in</h1>
            
            <form>
              <div>
                <label style={styles.label}>EMAIL</label>
                <div style={styles.inputWrapper}>
                  <Mail style={styles.icon} size={20} />
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    style={styles.input}
                  />
                </div>
              </div>

              <div>
                <label style={styles.label}>PASSWORD</label>
                <div style={styles.inputWrapper}>
                  <Lock style={styles.icon} size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="ENTER YOUR PASSWORD"
                    style={styles.input}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    style={{...styles.icon, left: 'auto', right: '12px', cursor: 'pointer'}}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
              </div>

              <div style={styles.rememberForgot}>
                <label style={styles.checkbox}>
                  <input type="checkbox" />
                  <span>REMEMBER ME</span>
                </label>
                <a href="#" style={{color: '#00e5ff', textDecoration: 'none', fontSize: '14px'}}>
                  FORGOT PASSWORD?
                </a>
              </div>

              <button type="submit" style={styles.signInButton}>
                SIGN IN
              </button>

              <div style={styles.signUpText}>
                Don't have an account? <a href="#" style={styles.signUpLink}>Sign up</a>
              </div>

              <div style={styles.divider}>
                <div style={styles.line}></div>
                <span style={styles.orText}>OR</span>
                <div style={styles.line}></div>
              </div>

              <div style={styles.socialButtons}>
                <button style={{...styles.socialButton, backgroundColor: '#DB4437'}}>G</button>
                <button style={{...styles.socialButton, backgroundColor: '#4267B2'}}>f</button>
                <button style={{...styles.socialButton, backgroundColor: '#333'}}>G</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export { LoginModal };