from django.contrib import admin
from .models import EventMain, EventFeature, EventAttender

admin.site.register(EventFeature)
admin.site.register(EventAttender)
admin.site.register(EventMain)
