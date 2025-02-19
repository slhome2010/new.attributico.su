---
sidebar_position: 2
---

# Installation

1\. Download the module installation files from the resource available to you. As a result, you should have two zip archives: `Attributico_v3.2.8.zip` and `License.zip`. The archive structure is described in [this](/technical-specifications/archive-content.md) article.

2\. Unzip the archive. Open the folder corresponding to [your PHP version](/technical-specifications/compatibility.md). Copy the contents of the `upload.../` folder, corresponding to your OpenCart version, over the site's folder structure.

3\. In the admin panel, in the *Extensions ⇒ Modules* section, the "Attribut&co" module should appear. It needs to be installed (activated).

4\. In the admin panel, in the *System ⇒ Users ⇒ User Groups* section, set permissions to view and edit for `module/attributico` or `extension/module/attributico` for stores version >2.2.

5\. Unzip the `License.zip` archive. Copy the contents of the folder corresponding to your PHP version over the site's folder structure.

6\. In the admin panel, in the *Extensions ⇒ Installer* section, upload the `attribut&co.2.x.ocmod.xml` and `autocomplete.ocmod.xml` files for version 2.x stores or `attributico.3.x.ocmod.zip` for version 3.x stores from the `ocmod` folder.

For those who use the OCTEMPLATE template, do not perform this step. See the description of installing modifiers below.

7\. In the admin panel, in the *Extensions ⇒ Modifiers* section, you need to update the modifiers.

After that, the *Catalog ⇒ Attributes ⇒ Attribut&co* menu item should appear.

:::caution
Clear the store and browser cache. The specifics of clearing the cache for version 3.x stores are described, for example, [here](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/).
:::

:::warning
If you have previously used the module of earlier versions and installed modifiers directly into the `system` folder, you need to remove them from there.

That is, in the `system` folder of your site, there should be no `attribut&co.2.x.ocmod.xml` and `autocomplete.ocmod.xml` files.
:::

:::info
In some versions of the translation, instead of the word `Extensions`, the word `Addons` is present, and instead of `Modifiers`, it will be written `Addon Manager`.
Often the word `Attributes` is translated as `Characteristics`.
:::

:::tip
For those who use the OCTEMPLATE template!

OCTEMPLATE uses a large number of modifiers, so installing the module modifier may not have enough ocmod resources.

To overcome this, you need to perform the following steps:

Do not perform step 5\. from the installation instructions. For stores below version 3.0.x, the `attribut&co.2.x.ocmod.xml` and `autocomplete.ocmod.xml` files need to be copied directly into the `system` folder of your site. For stores version 3.0.x, you need to extract the `install.xml` file from the `attributico.3.x.ocmod.zip` archive, rename it to `attributico.3.ocmod.xml` and then copy it to the `system` folder.
:::

:::note
Possible problems OpenCart 1.5.x `(deprecated)`

This module uses the `jQuery UI - v1.11.4+` plugins. OpenCart 1.5.x uses `jQuery UI - v1.8`. During the module installation, this version will be replaced unambiguously, otherwise Attribut&co will not work. In this regard, the functionality of some third-party modules may be temporarily disrupted.
:::

## Update

1. Updating the module does not require its removal. After downloading the new version, you need to unzip the archive and copy the contents of the `upload.../` folder, corresponding to your store version from the archive, over the site's folder structure.

2. For version 2.x and 3.x stores, you must reinstall the `...ocmod.xml` or `...ocmod.zip` modifiers in the ways described above, then in the admin panel, in the *Extensions ⇒ Modifiers* section, you need to update them.

3. Clear the [store cache](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/) and browser cache.

4. Edit and save the module settings again.

## Removal

1. In the admin panel, in the *Extensions ⇒ Modules* section, opposite the "Attribut&co" module - the "Delete" button.

2. For version 2.x stores, delete the `attribut&co.2.x.ocmod.xml, autocomplete.ocmod.xml` files from the `/system` folder. For version 3.x stores, delete the `attribut&co.2.x.ocmod.xml` files from the `/system` folder if you copied them there. Or in the *Extensions ⇒ Modifiers* menu, delete everything related to "Attribut&co".

### Database

During the module installation, the "category_attribute" table will be created in the database with the fields `` `category_id` INTEGER(11) NOT NULL`` and `` `attribute_id` INTEGER(11) NOT NULL.``

Starting with version 2.0.1, an additional field `` `duty` TEXT NOT NULL`` is created in the standard OpenCart "attribute_description" table to store [Duty Templates](general-info/duty.md).

During the module removal, all of the above tables and fields are not deleted. If this is critical for you, then delete them yourself, for example, using PhpMyAdmin.
