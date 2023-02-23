// наружу мы отдаем только модалку, а логику внутри нее скрываем внутри модуля
export { LoginModal } from './ui/LoginModal/LoginModal';
export { LoginSchema } from './model/types/LoginSchema';
export { loginActions } from './model/slice/loginSlice';
