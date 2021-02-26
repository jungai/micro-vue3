import { createI18n } from 'vue-i18n';

const messages = {
	en: {
		msg: 'hello world',
	},
	kr: {
		msg: '안녕하세요',
	},
};

export const i18n = createI18n({
	legacy: false, // you must set `false`, to use Compostion API
	locale: 'th', // set locale
	fallbackLocale: 'en', // set fallback locale
	messages, // set locale messages
});
