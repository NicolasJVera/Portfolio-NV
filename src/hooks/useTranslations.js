import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

export const useTranslations = () => {
  const { language } = useLanguage();
  return translations[language];
};
