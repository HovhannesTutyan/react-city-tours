from django.test import TestCase

import requests

api = requests.get("http://127.0.0.1:8000/api/")
print(api.text)
