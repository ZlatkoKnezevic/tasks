# CORE.tasks

Webform for trueAct | E-Mail to trueAct Ticket & Task
===
This project is an HTML Webform with JavaScript integration of CORE.api for authorization and modular queue mapping.


Project Folders
---
* css - Standard Bootstrap Styling & Company CI
* fonts - otf & woff Fonts
* img - Images & Icons
* scripts - Custom Scripts, API integration, Parser & Config
* vendors - Local Vendors (Angular, Bootstrap, Fontawesome, jQuery, Moment, Popper, Tether)
* webfonts - Webfonts for Browser Compatibility


### Technology
#### CORE.api
* PHP
* Slim Framework
* MSSQL

#### CORE.tasks
* Angular.JS / Bootstrap
* Javascript / jQuery


Version Control Information
---
* Version: 1.0.0

This project is using a simple interpretation of GitFlow. Version in alpha and beta phase do not use Version Control, rather Git Commits as backlog. Versions in production use MAJOR.MINOR.FIXES as Enduser Version Control Information. Branch organisation as followed: master (production), dev (development/testing), feature/name (development/experimental).


Installation Information
---
1) PHP Version 7.0.x needs to be installed. Install via the Webplattform Installer on IIS or download them manually from [PHP.net] (http://php.net/downloads.php#v7.0.32).

2) In IIS create a new Site for the project pointing to the root directory.

3) Copy the `config.example.js` and save it as `config.js` - add your CORE.api host:
```batch
var COREGlobalSettings = {
    host: "myhost.com"
};
```

4) Set your Queue Mappings in `mapping.json`. Find ressources in `mapping.sample.txt`.

5) IIS Site Restart is required.

6) For use of Single-Sign-On without a Authentication prompt, add the Domain or IP to trusted or internal sites in your network.