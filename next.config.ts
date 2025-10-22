import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import 'utilities';`,
    silenceDeprecations: ['import', 'legacy-js-api'],
  },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
