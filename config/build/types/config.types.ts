export interface BuildPaths {
  entry: string
  dist: string
  html: string
  src: string
}

export type BuildMode = 'production' | 'development'

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  apiUrl: string
   /* NOTE: это для того чтобы к примеру сторибук не кидал запросы на сервер и мы
   * могли разделять среды в которых проект запускается */
  project: 'storybook' | 'frontend' | 'jest'
}
