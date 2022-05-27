from django.urls import path
from .views import *

urlpatterns = [
    path('products/', products),
    path('product/<int:pk>/', productDetail)
]