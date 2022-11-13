import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config.types';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    // теперь для каждого модуля мейн файл будет индекс
    mainFiles: ['index'],
    alias: {},
  };
}
