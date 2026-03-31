const localeMap: Record<string, { homeUrl: string; cvPdfPath: string; cvPdfSuffix: string }> = {
  ru: { homeUrl: "/ru/", cvPdfPath: "/cv-ru.pdf", cvPdfSuffix: "RU" },
  es: { homeUrl: "/es/", cvPdfPath: "/cv-es.pdf", cvPdfSuffix: "ES" },
  en: { homeUrl: "/", cvPdfPath: "/cv.pdf", cvPdfSuffix: "EN" },
};

const BASE_PDF_NAME = "Ivan Tkachenko - Senior Frontend & Full Stack Engineer";

export function getLocaleUrls(lang: string) {
  const locale = localeMap[lang] ?? localeMap.en;
  return {
    homeUrl: locale.homeUrl,
    cvPdfPath: locale.cvPdfPath,
    cvPdfName: `${BASE_PDF_NAME} ${locale.cvPdfSuffix}.pdf`,
  };
}
