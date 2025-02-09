---
sidebar_position: 2
---

# Setup

1\. Download the module installation files from a resource available to you. As a result you should have two zip archives: `Attributico_v3.2.8.zip` and `License.zip`. The archive structure is described in [this](included.html) article.

2\. Unpack the archive. Open the folder corresponding to [your version of PHP](included.html#included-differences). Copy the contents of the `upload.../` folder corresponding to your version of OpenCart on top of the site folder structure.

3\. In the administrative panel in the *Extensions ⇒ Modules* section, the “Attribut&co” module should appear. It should be installed (activated).

4\. In the administrative panel in the *System ⇒ Users ⇒ User Groups* section set permissions to view and edit for `module/attributico` or `extension/module/attributico` for stores version >2.2 .

5\. Unpack the `License.zip` archive. Copy the contents of the folder corresponding to your PHP version over the folder structure of the site.

6\. In the administration panel under *Extensions ⇒ Extensions Installation*, download the files `attribut&co.2.x.ocmod.xml` and `autocomplete.ocmod.xml` for the second version (2.x) or `attributico.3.x.ocmod.zip` for the third version (3.x) from the `ocmod` folder.

For those who use the OCTEMPLATE template, do not perform this step. See below for a description of how to install modifiers.

7\. In the administrative panel in the *Extensions ⇒ Modifiers* section you should update the modifiers.

After that, the menu item *Catalog ⇒ Attributes ⇒ Attribut&co* should appear.

:::caution

Clear store and browser cache. The specifics of clearing the cache for version 3.x stores are described e.g. [here](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/).

:::

::::warning

If you have already used earlier versions of the module and installed modifiers directly into the `system` folder, you should delete them from there.

I.e. there should be no `attribut&co.2.x.ocmod.xml` and `autocomplete.ocmod.xml` files in the `system` folder of your site.

:::

::::info

Some versions of the translation have the word `Additions` instead of `Extensions`, and instead of `Modifiers` it will say `Additions Manager`.
Often the word `Attributes` is translated as `Characteristics`.

:::

::::tip

For those who use the OCTEMPLATE template!

OCTEMPLATE uses a large number of modifiers, so there may not be enough ocmod resources to install a module modifier.

To overcome this you need to do the following steps:

Do not follow step 5\. of the installation instructions. For stores of version lower than 3.0.x the files `attribut&co.2.x.ocmod.xml` and `autocomplete.ocmod.xml` should be copied directly to the `system` folder of your site. For stores version 3.0.x you need to extract the `install.xml` file from the `attributico.3.x.ocmod.zip` archive, rename it to `attributico.3.ocmod.xml` and then copy it to the `system` folder.

:::

::::note
Possible OpenCart 1.5.x `(deprecated)` problems

This module uses `jQuery UI - v1.11.4+` plugins. OpenCart 1.5.x uses `jQuery UI - v1.8`. During module installation this version will be replaced unambiguously, otherwise Attribut&co will not work. Due to this, some third-party modules may be temporarily broken.

:::

## Update

1\. Updating a module does not require its uninstallation. After downloading the new version you should unpack the archive and copy the contents of the `upload.../` folder corresponding to your version of the store from the archive over the folder structure of the site.

2\. For stores version 2.x and 3.x it is necessary to reinstall modifiers `...ocmod.xml` or `...ocmod.zip` in the ways described above, then in the administrative panel in the *Extensions ⇒ Modifiers* section it is necessary to update them.

3\. Clear [store cache](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/) and browser cache.

4\. Edit and save the module settings again.

## Delete

1\. In the admin panel, under *Extensions ⇒ Modules* in front of the Attribut&co module, click the “Delete” button.

2\. For version 2.x stores, delete the `attribut&co.2.x.ocmod.xml, autocomplete.ocmod.xml` files from the `/system` folder. For version 3.x stores, from the `/system` folder delete the `attribut&co.2.x.ocmod.xml` files, if you copied them there. 
if you copied them there. Or in the *Extensions ⇒ Modifiers* menu, delete everything about `attribut&co`.

### Database

During module installation, the table “category_attribute” will be created in the database with the fields `` `category_id` INTEGER(11) NOT NULL`` and `` `attribute_id` INTEGER(11) NOT NULL.

Starting with version 2.0.1, an additional field `` `` `duty` TEXT NOT NULL`` is created in the standard OpenCart table “attribute_description” to store [Duty templates](theory.html#theory-duty).

All of the above tables and fields are not deleted during module deletion. If it is critical for you, delete them yourself, for example, using PhpMyAdmin.

Translated with DeepL.com (free version)