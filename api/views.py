from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import CustomUserSerializer, CustomUser, UserProfile, UserProfileSerializer

class CustomUserView(ModelViewSet):
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.prefetch_related("user_profile__address_info") # prefetch_related takes reverse foreignKey related_name

class UserProfileView(ModelViewSet):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.select_related("user", "address_info") #select_related takes foreignKey related_name
