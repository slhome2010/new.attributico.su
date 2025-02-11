---
sidebar_position: 1
---

# Some Theory

You can read about what attributes are and how they differ from options on the internet. There is plenty of information available, for example, [here](http://docs.myopencart.com/index.php?title=%D0%90%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B) or [here](http://bono-idea.com/blog/instrukciya-po-rabote-s-opciyami-i-atributami-v-OpenCart-2/). In short, attributes are characteristics that allow you to organize products, compare them, search, or filter them.

OpenCart follows this attribute structure:

```markdown
Attribute Group
└── Attribute        
```

An attribute value is linked to a specific product:

```markdown
Product
├── Attribute reference
└── Attribute value        
```

All the tasks mentioned above are performed by analyzing attribute values. That is, if you add an attribute to a product but do not enter its value, there will be nothing to analyze.

Any product can have multiple attributes. Any attribute can have multiple values. An attribute value is essentially a text field where multiple values can be entered using a separator.

The Attribut&co module visually organizes the structure of attributes and values into a convenient format and represents this structure as a tree.

```markdown
Attribute Group
└── Attribute 
    └── Attribute value (list of values)        
```

The concept of **Attribute Group** is used only for organizing attributes themselves. Products, on the other hand, are organized by categories. Therefore, it seems logical to link a specific set of attributes and their values to a specific category. This idea is not new and is used by many modules, but it is the core principle behind how this module works.

```markdown
Product Category
└── Attribute 
    └── Attribute value (list of values)        
```
