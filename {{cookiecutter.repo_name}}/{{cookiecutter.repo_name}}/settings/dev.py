from .base import *

DEBUG = True

STATICFILES_DIRS.append(
    os.path.join(BASE_DIR, "bower_components")
)

TEMPLATES[0]['DIRS'].insert(
    0, os.path.join(PROJECT_DIR, "templates_dev")
)
