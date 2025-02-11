---
sidebar_position: 3
---

# Values and Templates

To better understand what a Value is, it is worth reminding that it is a plain text describing a characteristic (Attribute) of a product. The value is written to a field of type `TEXT` in the Database. You can write there anything you want, for example : ``“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...”`. In the product form, this is the `Textarea` field to the right of the attribute.

Of course, we usually write something more meaningful in this field, characterizing our product. Moreover, we want that in all products containing this Value, it would be the same and by this Value it would be possible to find our products, for example, with the help of a filter.

From the point of view of Opencart developers, the construction *Commodity->Attribute->Value* is sufficient, but in practice it is not enough. The *Commodity->Attribute->Attribute->Value set* construct is often found.

For example, I sell modules for Opencart and I want to show that some of them are compatible with versions `1.5.x`, `2.0.1`, `2.1.x`, and others with versions `2.3.x`, `3.0.x`. This is how I will write in the `Compatibility` attribute values of the respective products, listing the versions with a \- comma or, say, a slash separator. `v1.5.x/2.0.1/2.1.x` and `v1.5.x/2.0.1/2.1.x/2.3.x/3.0.x`.

Opencart will not work out such a design in any way, it will just display it in its entirety in the product card. But smart people invented smart filters to expand the possibilities of structuring products and their search by values.

Below you can see how Opencart, Attribut&co, filterpro processes such sets of Values. I called them *Templates*. Don't like this name? Go to the language file and put your own \- “Sets”, “Lists”, etc. The main thing is to understand what it is.

### Processing Templates

### In the product card

![Template explain1](/img/tutorial/opencart.jpg)

### In module

| ![Template explain2](/img/tutorial/compatibility.jpg) | |
|-|

### In the filter

| ![Template explain3](/img/tutorial/filterpro.jpg) |-|#
|-|

So **Template is a set of Attribute Values written over a separator**. It is sometimes referred to as a “Multiple Value”.

## Separator

The Attribute Separator or Attribute Value Separator was not invented by me. Here's what it looks like in the settings of popular filters:

### Mega Filter Pro

| ![Splitter explain1](/img/tutorial/megafilter.jpg) |
|-|

### Filterpro

| ![Splitter explain2](/img/tutorial/filterprosepar.jpg) |
|-|

It should be noted that the Value is unique for each product. If you change one letter in the text in a product, the rest of the products will not be affected, even if the Values were the same before, and you will have another Value. The same is true for Templates.

Translated with DeepL.com (free version)