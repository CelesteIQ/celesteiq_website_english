// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const messages = {
        ...(await import(`../messages/home/${locale}.json`)).default,
        ...(await import(`../messages/navbar/${locale}.json`)).default,
        ...(await import(`../messages/about/${locale}.json`)).default,
        ...(await import(`../messages/resources/${locale}.json`)).default,
        ...(await import(`../messages/smartAudits/${locale}.json`)).default,
        ...(await import(`../messages/smartpackages/${locale}.json`)).default,
        ...(await import(`../messages/solutions/${locale}.json`)).default,
        ...(await import(`../messages/blog/${locale}.json`)).default,
        ...(await import(`../messages/specialized/${locale}.json`)).default,
        ...(await import(`../messages/contact/${locale}.json`)).default,
        ...(await import(`../messages/legal/${locale}.json`)).default,
        ...(await import(`../messages/faq/${locale}.json`)).default,
        ...(await import(`../messages/ctaHero/${locale}.json`)).default,
        ...(await import(`../messages/footer/${locale}.json`)).default,
    };

    return {
        locale,
        messages
    };
});
