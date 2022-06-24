from django.urls import path
from .views import ProductFrontendAPIView, ProductBackendAPIView, ProductDetailAPIView

urlpatterns = [
    path('products/front', ProductFrontendAPIView.as_view()),
    path('products/back', ProductBackendAPIView.as_view()),
    path('products/back/<productId>', ProductDetailAPIView.as_view())
]
