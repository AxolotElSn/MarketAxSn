import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import { Options } from './types/types'

export const buildDevServer = ({
  mode,
  port,
}: Options): DevServerConfiguration => {
  const isDev = mode === 'development'

  return isDev
    ? {
        port: port ?? 80,
        open: true,
        historyApiFallback: true,
        hot: true,
      }
    : undefined
}
