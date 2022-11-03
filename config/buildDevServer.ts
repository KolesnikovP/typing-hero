import { BuildOptions } from './types/config.types'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // автооткрытие в браузере
    open: true,
    historyApiFallback: true
  }
}
