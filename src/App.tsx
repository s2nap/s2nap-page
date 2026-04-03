
import heroImg from './assets/yungsnap.png'
import './App.css'

export default function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="500" height="100" alt="500x100" />
          
        </div>
        <div>
          <h1>Get started</h1>
          <p>
           <code>src/App.tsx and save to test HMR</code>
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>

            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                X
              </a>
            </li>

            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                X2
              </a>
            </li>

            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X3
              </a>
            </li>

            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X4
              </a>
            </li>
          </ul>
        </div>

        {/* 2nd column */}
        
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>

            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                X
              </a>
            </li>

            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                X2
              </a>
            </li>

            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X3
              </a>
            </li>

            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X4
              </a>
            </li>

          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}