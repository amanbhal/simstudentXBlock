simstudentXblock
================

Xblock to display SimStudent interface in edX

## Installation ##
Use the below command on your command prompt to install the xblock:
$/edx/bin/pip.edxapp install simstudentXBlock/

Now, start the edX Studio
$paver devstack studio

On the devstack Studio, you will need to activate the simtudent XBlock for the course you need it for. Click on Settings -> Advanced Settings. Set the advanced_modules to [“simstudent”].


# simstudentXBlock 
The SimStudent XBlock displays a Tutor interface by default. To change the Tutor interface click on Edit and just type the name of the brd file you want to run and then click on Save.

# Files
1. simstudent.py: In this XBlock Python file, you define fields, views, handlers, and workbench scenarios.
    The default interface is definded by variable "href". The method "student_view" defines the xBlock as seen in LMS and the method "studio_view" defines the xBlock as seen in Studio. The method "save_simstudent" saves the values, entered during editing ,in their respective variables. [for more information visit: http://edx.readthedocs.io/projects/xblock-tutorial/en/latest/anatomy/python.html]
2. simstudent.html: In the XBlock HTML file, you define the HTML content that is added to a fragment. The HTML content can         reference the XBlock fields. The fragment is returned by the view method, to be displayed by the runtime application. It       renders the HTML Tutor Interface inside the object tag. [for more information visit:                                           http://edx.readthedocs.io/projects/xblock-tutorial/en/latest/anatomy/html.html]
3. simstudent_edit.js: In the XBlock JavaScript file, you define code that manages user interaction with the XBlock. The code      is added to a fragment. This file also contains code to connect with Google Drive API but currently we are not using it.       The response from editing the xBlock is hardcoded in $(element).find('.save-button').bind() method. In future you should       make it such that if you enter the bundle name the backend should automatically fetch the brd file as well as WME and init     files from that bundle. [for more information visit:                                                                           http://edx.readthedocs.io/projects/xblock-tutorial/en/latest/anatomy/javascript.html]
4. simstudent.css: In the XBlock CSS file, you define the styles that are added to the fragment that is returned by the view       method to be displayed by the runtime application. [for more information visit:                                                http://edx.readthedocs.io/projects/xblock-tutorial/en/latest/anatomy/stylesheets.html]
