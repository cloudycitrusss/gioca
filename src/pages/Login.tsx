import { useState, type FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { isFirebaseConfigured } from '../firebase/config'
import './pages.css'

export function Login() {
  const { user, login, register } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  if (user) {
    return <Navigate to="/" replace />
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setBusy(true)

    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        await register(email, password)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="page">
      <div className="container page__inner page--narrow">
        <header className="page__header">
          <p className="eyebrow">Account</p>
          <h1>{mode === 'login' ? 'Log in' : 'Create account'}</h1>
          <p>Parent, player, and coach access (Firebase Auth).</p>
        </header>

        {!isFirebaseConfigured && (
          <p className="notice notice--warn">
            Firebase is not configured yet. Copy <code>.env.example</code> to{' '}
            <code>.env.local</code> and add your project keys.
          </p>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
          </label>

          {error && <p className="form__error">{error}</p>}

          <button
            type="submit"
            className="btn btn--primary"
            disabled={busy || !isFirebaseConfigured}
          >
            {busy ? 'Please wait…' : mode === 'login' ? 'Log in' : 'Register'}
          </button>
        </form>

        <p className="form__switch">
          {mode === 'login' ? (
            <>
              Need an account?{' '}
              <button
                type="button"
                className="linkish"
                onClick={() => setMode('register')}
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                className="linkish"
                onClick={() => setMode('login')}
              >
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </section>
  )
}
