from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer, UserSerializer
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django_seed import Seed
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions

@api_view(['GET'])
def products(request):
    products = Products.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def productDetail(request, pk):
    product = Products.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def loginPage(request):
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
