Settings
========

The projects will use a multiple file settings structure.

It's a very streamlined setup, using only three files.

base.py
-------

base.py contains the great deal of the django settings.

It's imported by default by the setting.__init__

dev.py
------
Inside the dev.py we import all the content from the base.py, then add three statements:

* DEBUG = True
* Append the 'bower_components' folder to the STATIC_DIRS
* Insert at place 0 the 'templates_dev' inside TEMPLATES[0]['DIRS'], so that templates inside that folder get loaded before all others

production.py
-------------
Inside the dev.py we import all the content from the base.py, then add two statements:

* DEBUG = False
* Insert at place 0 the 'templates_prod' inside TEMPLATES[0]['DIRS'], so that templates inside that folder get loaded before all others
