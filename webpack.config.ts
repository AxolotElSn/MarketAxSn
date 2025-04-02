import { Mode } from 'config/types/types'
import path from 'path'

import { buildConfig } from './config/buildConfig'

interface EnvVariables {
  port: number
  mode: Mode
}

export default (env: EnvVariables) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const config = buildConfig({
    port: env.port,
    paths,
    mode: env.mode,
  })
  return config
}
