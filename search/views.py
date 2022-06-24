from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q
from .models import Product
from .serializers import ProductSerializer
from rest_framework import permissions, status
import math

class ProductFrontendAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductBackendAPIView(APIView):
    def get(self, request):
        params = request.GET.get('params')
        sort = request.GET.get('sort')
        page = int(request.GET.get('page', 1))
        per_page=9

        products = Product.objects.all()

        if params:
            products = products.filter(Q(title__icontains=params) | Q(description__icontains=params))

        if sort == 'asc':
            products = products.order_by('price')
        elif sort == 'desc':
            products = products.order_by('-price')

        total = products.count()
        start = (page - 1) * per_page
        end = page * per_page

        serializer = ProductSerializer(products[start:end], many=True)
        return Response({
            "data":serializer.data,
            "total": total,
            "page": page,
            "last_page": math.ceil(total / per_page)
        })

class ProductDetailAPIView(APIView):
    def get(self, request, productId, format=None):
        try:
            product_id=int(productId)
        except:
            return Response(
                {'error':'Product ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND
            )
        if Product.objects.filter(id=product_id).exists():
            product = Product.objects.get(id=product_id)
            product = ProductSerializer(product)
            return Response({'product':product.data}, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error':'Product with this ID does not exist'},
                status=status.HTTP_404_NOT_FOUND
            )