from .base import *

DEBUG = False

TEMPLATES[0]['DIRS'].insert(
    0, os.path.join(PROJECT_DIR, "templates_prod")
)
