---
sidebar_position: 4
---

# Database

During the module installation, database queries will be executed.

```SQL
CREATE TABLE IF NOT EXISTS oc_category_attribute (
  category_id INT(11) NOT NULL,
  attribute_id INT(11) NOT NULL,
  PRIMARY KEY (category_id, attribute_id)
)
```

and

```SQL
ALTER TABLE oc_attribute_description ADD COLUMN `duty` TEXT NOT NULL
```

As a result, a new table **category_attribute** will be created with fields `` `category_id` `` and `` `attribute_id` ``.

And in the standard OpenCart table **attribute_description**, a field `` `duty` `` will be added to store [Duty Templates](general-info/duty.md).

The general diagram of tables serving attribute management and relationships between them is shown in the figure below.

![Database diagram](/img/tutorial/attributico_db_diagram.png)
