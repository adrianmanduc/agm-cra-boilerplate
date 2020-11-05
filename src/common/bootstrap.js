import * as Interceptors from '@common/interceptors';
import '@styles/index.scss';

export function bootstrap() {
  Interceptors.initialize();
}
