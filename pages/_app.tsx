import 'styles/globals/index.scss'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { Layout } from 'components'
import 'focus-visible/dist/focus-visible.min.js'
import { Provider } from 'react-redux'
import { store } from 'state'
import { env } from 'scripts/variables'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (env.is('local')) {
    if (metric.label === 'web-vital') {
      console.log(metric)
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
