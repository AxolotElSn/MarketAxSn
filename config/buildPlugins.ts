import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { Options } from './types/types'

export const buildPlugins = ({ mode, paths }: Options) => {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new Dotenv(),
    isProd &&
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    new ForkTsCheckerWebpackPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    // isDev && new BundleAnalyzerPlugin(),
  ]
}
