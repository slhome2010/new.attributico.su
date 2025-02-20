---
sidebar_position: 1
---

# Archive Structure

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

## Folder and File Purpose

- `upload_v2.1.x-2.2/` and `upload_v2.3.x-3.x/` folders with the module files for different OpenCart versions;
- `ocmod/` folder with modifiers for stores version 2.x and 3.x;
- `attribut&co.2.x.ocmod.xml` modifier file for stores version 2.0.x - 2.3.x;
- `autocomplete.ocmod.xml` modifier file to improve the `autocomplete` function for stores version 2.0.x - 2.3.x;
- `attributico.3.x.ocmod.zip` modifier file for stores version 3.x;
- `help/` folder with instructions and supporting materials;
- `News/` folders with descriptions of changes, fixes and supporting materials;
- `readme.txt` brief instructions on installing and using the module;

## Version Differences

The provided archive structure corresponds to the module version > 3.0.1. The folder name like `PHP5.4-5.6/`, ..., `PHP7.2/` corresponds to the PHP version. The difference is in the ioncube-encoding of some module files for different PHP versions. Inside these folders are `upload/` folders with the OpenCart structure of the module for different store versions.

If the version of your store engine, for example, is 2.1.0.2, and the PHP version is 5.5, then you need the `upload_v2.1.x-2.2/` folder from the PHP5.4-5.6 folder, if the store version is 2.3.0.2, then the `upload_v2.3.x-3.x/` folder.

:::tip
The `PHP7.2/` folder is suitable for PHP versions 7.2 - 7.4.
:::
