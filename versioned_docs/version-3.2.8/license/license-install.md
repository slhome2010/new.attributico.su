# License

## License Validity

The license is valid for one domain and one test domain. It should be clear that the test domain is genuinely for testing purposes.

The license is not generated automatically, so after purchasing the module, you must send a request confirming the domain names and PHP version to the personal email address on the site where you purchased the module.

:::warning
If you change the domain name, you will have to pay for a new license because the license is **bound to the domain**, not the buyer. 🤷‍♂️
Since I don’t have a license server, I can't track which domains are active and which are not.
:::

## License Installation

The module package includes a separate archive **License.zip**. This archive contains license files that, like the module files, are distributed in folders according to PHP versions.

After downloading and extracting **License.zip**, follow these steps:
1\. Select the folder corresponding to your PHP version.
2\. Copy the contents of the folder over the site structure.
3\. **Installing the license is mandatory**, even for the free version.
4\. After domain approval and confirmation of license readiness, **re-download** the **License.zip** archive and reinstall the license.

:::info
In future versions, the archive structure may change. However, the correct location for the license file remains:

```php
/system/license/sllic.lic
```

:::

:::danger
If the **sllic.lic** file is misplaced or not installed, you will see the following error message:

```php
Notice: Undefined variable: vendor in .....\www\admin\controller\module\attributico.php on line...
```

:::

If the domain is not listed in the license file, the module will operate in **view mode**. In this case, the module's name and version will display **(free)**. For example:

**Attribut&co v3.2.8 (free)**.
