import { Options } from './types/types'

export const buildResolvers = ({ paths }: Options) => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': paths.src,
    },
  }
}
