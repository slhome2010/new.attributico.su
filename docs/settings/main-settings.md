---
sidebar_position: 1
---

# General Settings

| Item | Description |
|------|------------|
| **Attribute separator** | Used when a product can have multiple different values for the same attribute. More details in [Terms and Definitions](theory.html#theory-terms). |
| **Consider sorting order** | If enabled, trees are formed according to the user-defined order; otherwise, they are sorted alphabetically. |
| **Smart scrolling** | Enables automatic scrolling of tree nodes within a fixed area. |
| **Show empty values** | Show or hide empty attribute values. More details: [Remove Empty Values](tools.html#tools-empty). |
| **Product in a new window** | Open the product page in a new window. |
| **Lazy loading** | Child nodes are loaded on demand. More details: [Node Loading](theory.html#theory-loading). |
| **Attribute tree cache** | Trees are loaded from cache instead of the database. More details: [Clear Tree Cache](tools.html#tools-cache). |
| **All stores** | Includes categories from all stores in the list when enabled. |

:::info
Adjust scrolling size.  
The scroll area height can be changed in the `/admin/view/stylesheet/attributico.css` file by modifying the property:

```css
.smart-scroll {height: 250px;}
```

:::

:::danger
Be cautious when opening the product form in a new window.
Changes in the product form are saved in the database, but the module only "picks them up" after reloading. Without a refresh, the data may be incorrect.
:::
