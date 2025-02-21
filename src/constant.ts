export const getEducationStatus = (t:any) => [
    { key: "high_school", label: t("high_school") },
    { key: "some_college", label: t("some_college") },
    { key: "bachelor_degree", label: t("bachelor_degree") },
    { key: "master_degree", label: t("master_degree") },
    { key: "phd", label: t("phd") },
    { key: "prefer_not_to_say", label: t("prefer_not_to_say") },
];

export const getLanguages = [
  { value: "en", label: "English", description: "English", flaq:"🇬🇧" },
  { value: "ru", label: "русский", description: "Russian", flaq:"🇷🇺" },
  { value: "fa", label: "فارسی", description: "Persian", flaq:"🇮🇷" },
  { value: "ar", label: "عربي", description: "Arabic", flaq:"🇦🇪" },
];