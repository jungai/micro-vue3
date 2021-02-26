import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import './global.css';

export default defineComponent({
	setup() {
		const { t } = useI18n();

		return () => (
			<div>
				<h1 class="text-lg underline text-red-400">
					Hello Vue 3 with tsx <span>👋</span>
				</h1>
				<p>this is {t('msg')}</p>
				<router-link to="/">Home</router-link> |<router-link to="/about">About</router-link>
				<router-view />
			</div>
		);
	},
});
