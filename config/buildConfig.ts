import webpack from 'webpack'

import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buldResolvers'
import { Options } from './types/types'

export const buildConfig = (options: Options): webpack.Configuration => {
  const { mode, paths } = options

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: buildLoaders(options),
    resolve: buildResolvers(options),
    devServer: buildDevServer(options),
  }
}
