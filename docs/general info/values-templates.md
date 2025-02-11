---
sidebar_position: 3
---

# Values and Templates

To better understand what a Value is, it's worth remembering that it's plain text describing a characteristic (Attribute) of a product. The Value is written in a field of type `TEXT` in the Database. You can write anything there, for example: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."`. In the product card, this is a `Textarea` field to the right of the attribute.

Of course, we usually write something more meaningful in this field, something that characterizes our product. Moreover, we want this Value to be the same in all products containing it, and we want to be able to find our products by this Value, for example, using a filter.

From the point of view of Opencart developers, the *Product->Attribute->Value* structure is sufficient, but in practice it's not enough. The *Product->Attribute->Set of Values* structure is often encountered.

For example, I sell modules for Opencart and want to show that some of them are compatible with versions `1.5.x`, `2.0.1`, `2.1.x`, while others are also compatible with versions `2.3.x`, `3.0.x`. I will write this in the Values of the `Compatibility` Attribute of the corresponding products, listing the versions separated by a comma or, say, a slash. `v1.5.x/2.0.1/2.1.x` and `v1.5.x/2.0.1/2.1.x/2.3.x/3.0.x`

Opencart will not process this structure in any way, it will simply display it entirely in the product card. But smart people have come up with smart filters to expand the possibilities of structuring products and searching for them by Values.

Below is how Opencart, Attribut&co, filterpro process such sets of Values. I called them *Templates*. Don't like this name? Go to the language file and put your own - "Sets", "Lists", etc. The main thing is to understand what it is.

## Template Processing

### In the product card

![Template explain1](/img/tutorial/opencart.jpg)

### В модуле

| ![Template explain2](/img/tutorial/compatibility.jpg) |
|-|

### In the filter

| ![Template explain3](/img/tutorial/filterpro.jpg) |
|-|

So **a Template is a set of Attribute Values written separated by a delimiter**. Sometimes it's called a "Multiple Value".

## Delimiter

The Attribute Delimiter or Attribute Value Delimiter was not invented by me. Here's how it looks in the settings of popular filters:

### Mega Filter Pro

![Splitter explain1](/img/tutorial/megafilter.jpg)

### Filterpro

![Splitter explain2](/img/tutorial/filterprosepar.jpg)

It should be noted that the Value is unique for each product. If you change one letter in the text in one product, it will not affect the other products, even if the Values were the same before, and you will have another Value. The same is true for Templates.
