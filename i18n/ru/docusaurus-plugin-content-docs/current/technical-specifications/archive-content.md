---
sidebar_position: 1
---

# Структура архива

```bash

Attributico_v3.2.8/
│── PHP5.4-5.6/
│       ├── upload_v2.1.x-2.2/
│       │     ├── admin/
│       │     │    ├── controller/
│       │     │    ├── language/
│       │     │    ├── model/
│       │     │    └── view/
│       │     └── system/
│       │          └── library/
│       │               └── attributico/
│       │                     ├── array_column.php
│       │                     └── attributico.php
│       └── upload_v2.3.x-3.x/
│             ├── admin/
│             │    ├── controller/
│             │    ├── language/
│             │    ├── model/
│             │    └── view/
│             └── system/
│                  └── library/
│                       └── attributico/
│                             ├── array_column.php
│                             └── attributico.php
│ 
│── PHP7.0/
│       ├── upload_v2.1.x-2.2/
│       └── upload_v2.3.x-3.x/ 
│
│── PHP7.1
│       ├── upload_v2.1.x-2.2/
│       └── upload_v2.3.x-3.x/
│ 
│── PHP7.2/
│       ├── upload_v2.1.x-2.2/
│       └── upload_v2.3.x-3.x/ 
│
│── ocmod/
│       ├── attribut&co.2.x.ocmod.xml
│       ├── autocomplete.ocmod.xml
│       └── attributico.3.x.ocmod.zip
│
├── News3.2.8/
└── readme.txt

```

## Назначение папок и файлов
  
- `upload_v2.1.x-2.2/` и `upload_v2.3.x-3.x/` папки с файлами собственно модуля для разных версий OpenCart;
- `ocmod/` папка с модификаторами для магазинов версии 2.x и 3.x;
- `attribut&co.2.x.ocmod.xml` файл модификатор для магазинов версии 2.0.x - 2.3.x;
- `autocomplete.ocmod.xml` файл модификатор для улучшения работы функции `autocomplete` для магазинов версии 2.0.x - 2.3.x;
- `attributico.3.x.ocmod.zip` файл модификатор для магазинов версии 3.x;
- `help/` папка с инструкциями и вспомогательными материалами;
- `News/` папки с описанием изменений, исправлений и вспомогательными материалами;
- `readme.txt` краткая инструкция по установке и работе модуля;

## Различие версий

Приведенная структура архива соответствует версии модуля \> 3.0.1. Название папки типа `PHP5.4-5.6/`, ..., `PHP7.2/` соответствует версии PHP. Разница в ioncube-кодировке некоторых файлов модуля для разных версий PHP. Внутри этих папок находятся папки `upload/` с OpenCart-структурой модуля для разных версий магазинов.

Если версия движка вашего магазина, например, 2.1.0.2, а версия PHP5.5, то вам нужна папка `upload_v2.1.x-2.2/` из папки PHP5.4-5.6, если версия магазина 2.3.0.2, то папка `upload_v2.3.x-3.x/`.

:::tip
Папка `PHP7.2/` подходит версиям PHP 7.2 - 7.4.
:::
