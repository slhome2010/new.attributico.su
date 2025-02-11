---
sidebar_position: 2
---

# Glossary

|||Description|
|---|---|
|Attribute Separator||The more accurate name would be Attribute Value Separator. Again, a product can have multiple attributes and multiple attribute values. The value is written to a field of type `TEXT` in the Database. To separate one value from another, a delimiter is used. This is usually `“/”` or `“:”` or `“;”` Modern filters, such as Mega Filter Pro, can parse such constructs.|
|Group|Attribute Group is used to organize the Attributes themselves.|
|Attribute|An attribute or characteristic of a product.|
|Category attribute|An attribute assigned to a category. An attribute can be mapped to more than one category. A category can have a mapping to multiple Attributes. That is, when we say Category Attributes, we mean a list of Attributes mapped to (“belonging to”) a category.|
|Template|A set of Attribute Values over a delimiter. That is, an entry of type `Value1/Value2/Value3`|
|||Single Attribute value extracted from the Template. Often the Template consists of a single Value|
||Default Template|Otherwise known as a default template. It is a Template that is stored “together” with the Attribute, contains a frequently used set of Values and can be automatically “assigned” to a product according to the [method](settings.html#settings-product) specified in the settings.|

## Trees

A tree is a set of objects called nodes. Each node contains a value or data, and it may or may not have a child node. The first node of a tree is called the root.

The child nodes are the nodes that are a level below. Any nodes that are beyond one level of nesting are usually called child nodes.

Neighbor nodes are nodes that are at the same level of the tree.

A parent node or ancestor is a node that is at the first level of the hierarchy.

### Tree labeling

||| Tab||Name||Description||.
|---|---|---|---|
|`1`|Attributes||Attribute Groups|The main tree where you can perform all manipulations with Groups, Attributes and Values - editing, sorting, searching, deleting, adding.|
|`2`|Duty Templates|Duty Templates|Tree for working with [Duty Templates](theory-duty). Editing, searching.
|`3`|Category attributes|Categories|Category structure shown as a tree.|
|`4`|Category attributes|Attributes||The tree, similar to the Attribute Group, is used for dragging the selected attribute from it to the required category using Drag-and-Drop technology or copying it using Copy-Paste. It is desirable to include in the structure a child node _Duty Templates_ to remind, when adding an Attribute to a category, which Values will be added to the product.|
|`5`|Category Attributes|Category Attributes|Attributes tree that shows the category with all Attributes assigned to it and their Templates and Values. Here it is possible to add or remove attributes.|
|`6`|Goods|Goods Attributes|A tree, similar to the Attribute Group, is used to select an Attribute, Template or Value and filter the products by the selected one.|
|`7`|Goods|Goods|Tree, where the goods for the selected Attribute, Pattern or Value are displayed. To the right of the product name, the product id in the database and the model are displayed in brackets. A double click on the selected item redirects to the product card.|

### Attributes tab

| ![Trees](/img/tutorial/tree1.png) |
|-|

### Duty Templates tab

| ![Trees](/img/tutorial/tree2.png) |
|-|

### Category Attributes tab

| ![Trees](/img/tutorial/tree3.png) |
|-|

### Goods tab

| ![Trees](/img/tutorial/tree4.png) |
|-|
