from django.urls import path
from .views import *

app_name = 'mainapp'

urlpatterns = [
    path('products/', products, name='products'),
    path('product/<int:pk>/', productDetail, name='product'),
    path('users/signin/', loginPage, name='login')
]