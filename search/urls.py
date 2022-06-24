from django.urls import path
from .views import ProductFrontendAPIView, ProductBackendAPIView

urlpatterns = [
    path('products/front', ProductFrontendAPIView.as_view()),
    path('products/back', ProductBackendAPIView.as_view())
]
