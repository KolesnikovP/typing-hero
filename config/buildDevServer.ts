import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config.types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // автооткрытие в браузере
    open: true,
    hot: true,
    historyApiFallback: true,
  };
}
