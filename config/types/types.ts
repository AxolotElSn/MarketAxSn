export type Mode = 'development' | 'production'

interface Paths {
  entry: string
  output: string
  html: string
  src: string
}

export interface Options {
  port: number
  paths: Paths
  mode: Mode
}
