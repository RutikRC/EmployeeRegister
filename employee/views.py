from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializers import *
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import generics, permissions, filters, status, viewsets

class EmployeeViewSet(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        print("Request Data:", self.request.data)
        serializer.save(user=self.request.user)

class EmployeeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.OrderingFilter]

    def perform_destroy(self, instance):
        instance.delete()


def get_csrf_token(request):
    return JsonResponse({'csrfToken': str(request.COOKIES['csrftoken'])})
