---
sidebar_position: 4
---

# База данных

В процессе установки модуля  будут выполнены запросы к базе данных.

```SQL
CREATE TABLE IF NOT EXISTS oc_category_attribute (
  category_id INT(11) NOT NULL,
  attribute_id INT(11) NOT NULL,
  PRIMARY KEY (category_id, attribute_id)
)
```

и

```SQL
ALTER TABLE oc_attribute_description ADD COLUMN `duty` TEXT NOT NULL
```

В результате будет создана новая таблица **category_attribute** с полями `` `category_id` `` и `` `attribute_id` ``.

А в стандартной таблице OpenCart **attribute_description** добавится поле `` `duty` `` для хранения [Дежурных шаблонов](general-info/duty.md).

Общая диаграмма таблиц обслуживающих управление атрибутами и связей между ними приведена на рисунке ниже.

![Database diagram](/img/tutorial/attributico_db_diagram.png)