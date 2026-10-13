// Чтобы добавить документ: положите PDF в docs/<папка>/ и добавьте строку в files.
const EQUIPMENT = [
  { name: "HD5L", desc: "Преобразователь частоты для лифтов с редукторной и безредукторной лебёдкой", files: [
    { title: "Быстрый запуск v1.15 (рус.)", path: "docs/hd5l/quick-start-ru.pdf" },
    { title: "Руководство пользователя (рус.)", path: "docs/hd5l/manual-ru.pdf" },
    { title: "HD5L-PLUS: User Manual (англ.)", path: "docs/hd5l/plus-manual-en.pdf" },
  ] },
  { name: "YASKAWA", desc: "Частотные преобразователи Yaskawa", files: [
    { title: "Инструкция по настройке L1000A 400V v2.27", path: "docs/yaskawa/l1000a-400v-setup.pdf" },
    { title: "Инструкция по настройке L1000V 400V v1.23", path: "docs/yaskawa/l1000v-400v-setup.pdf" },
    { title: "Инструкция по настройке LA500 v1.6", path: "docs/yaskawa/la500-setup.pdf" },
    { title: "L1000A: руководство пользователя (рус.)", path: "docs/yaskawa/l1000a-manual-ru.pdf" },
    { title: "L1000V: руководство пользователя (рус.)", path: "docs/yaskawa/l1000v-manual-ru.pdf" },
    { title: "L1000A: Technical Manual (англ.)", path: "docs/yaskawa/l1000a-tm-en.pdf" },
    { title: "LA500: Technical Manual (англ.)", path: "docs/yaskawa/la500-tm-en.pdf" },
  ] },
  { name: "MONT20", desc: "Частотные преобразователи Hpmont", files: [
    { title: "Быстрый запуск v1.7", path: "docs/mont20/quick-start-ru.pdf" },
    { title: "Контроллер дверей: руководство пользователя (рус.)", path: "docs/mont20/door-controller-manual-ru.pdf" },
  ] },
  { name: "УКЗ-ВТ", desc: "Устройство контроля загрузки лифта", files: [
    { title: "Руководство по эксплуатации v5.4", path: "docs/ukz-vt/manual-v5.4.pdf" },
    { title: "Быстрый запуск v9.0 (230V)", path: "docs/ukz-vt/quick-start-230v.pdf" },
    { title: "Быстрый запуск v9.0 (24V)", path: "docs/ukz-vt/quick-start-24v.pdf" },
  ] },
  { name: "ФБ-ВТ", desc: "Фотобарьер для лифтов", files: [
    { title: "Руководство по эксплуатации v2.5", path: "docs/fb-vt/manual-v2.5.pdf" },
  ] },
  { name: "Лебедки VT", desc: "Безредукторные лебёдки", files: [
    { title: "Документация VT40 / VT48 / VT32X v1.15", path: "docs/vt-winches/vt40-vt48-vt32x.pdf" },
  ] },
  { name: "Фильтры ФП-ВТ", desc: "ЭМС-фильтры", files: [
    { title: "Документация", path: "docs/fp-vt/docs.pdf" },
  ] },
];
